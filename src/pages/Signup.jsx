import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { RiseLoader } from "react-spinners";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setLoading,
    signoutUserFunc,
    setUser,
    user,
    loading
  } = useContext(AuthContext);

  const navigate = useNavigate()

  useEffect(() => {
  if (!loading && user) {
    navigate("/", { replace: true });
  }
}, [user, loading, navigate]);

if (loading || user) {
  return (
    <div className="h-screen flex items-center justify-center">
      <RiseLoader color="#f43f5e" size={30} margin={4} />
    </div>
  );
}

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("sign up function entered", {
      displayName,
      photoURL,
      email,
      password,
    });

    console.log(password.length);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain uppercase, lowercase, and at least 6 characters.",
      );
      return;
    }

    // createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPasswordFunc(email, password)
      .then(() => {
        updateProfileFunc(displayName, photoURL)
          .then((res) => {
            setLoading(false);
            console.log(res);
            signoutUserFunc().then(() => {
              toast.success("Successfully Signup completed!");
              setUser(null);
              navigate("/login")
            });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        if (e.code == "auth/email-already-in-use") {
          toast.error("User already exist in database !");
        } else if (e.code === "auth/invalid-email") {
          toast.error(
            "The email address you entered is invalid. Please check the format and try again.",
          );
        } else if (e.code === "auth/weak-password") {
          toast.error(
            "Your password does not meet the minimum security requirements. Please choose a stronger password.",
          );
        } else if (e.code === "auth/user-not-found") {
          toast.error(
            "No account was found with this email address. Please check your email or create a new account.",
          );
        } else if (e.code === "auth/wrong-password") {
          toast.error(
            "The password you entered is incorrect. Please verify your credentials and try again.",
          );
        } else if (e.code === "auth/user-disabled") {
          toast.error(
            "This account has been disabled. Please contact support for assistance.",
          );
        } else if (e.code === "auth/too-many-requests") {
          toast.error(
            "Too many unsuccessful attempts. Please wait a few minutes and try again.",
          );
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error(
            "This authentication method is currently unavailable. Please contact support.",
          );
        } else if (e.code === "auth/network-request-failed") {
          toast.error(
            "Unable to connect to the server. Please check your internet connection and try again.",
          );
        } else {
          toast.error(e.message);
        }
      });
  };

  return (
    <div className="auth-page sign-up-mode page-slide signup-page">
      <div className="forms-container">
        <div className="signin-signup">
          {/* ================= SIGN UP FORM ================= */}
          <form onSubmit={handleSignup} className="sign-up-form">
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" name="name" required placeholder="Username" />
            </div>
            <div className="input-field">
              <i class="fa-solid fa-link"></i>
              <input
                type="text"
                name="photo"
                required
                placeholder="Your photo URL here"
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name="email" required placeholder="Email" />
            </div>

            <div className="input-field relative">
              <i className="fa-solid fa-lock"></i>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-5 top-4.5 cursor-pointer z-50 text-[#adb3b8] text-[22px]"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <input type="submit" value="Sign up" className="btn" />

            <p className="social-text">or Sign up with social platforms</p>

            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="fa-brands fa-google"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* ================= PANELS ================= */}
      <div className="panels-container">
        {/* LEFT PANEL */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              consectetur adipisicing elit.
            </p>

            <Link to="/signup" className="btn transparent">
              Sign up
            </Link>
          </div>

          <img src="/src/assets/log.svg" className="image" alt="Login" />
        </div>

        {/* RIGHT PANEL */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              consectetur adipisicing elit.
            </p>

            <Link to="/login" className="btn transparent">
              Log in
            </Link>
          </div>

          <img
            src="/src/assets/register.svg"
            className="image"
            alt="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
