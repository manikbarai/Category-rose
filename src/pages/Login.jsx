import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google sign in");
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout successful!");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  console.log(user);
  return (
    <div className="auth-page page-slide login-page">
      <div className="forms-container">
        <div className="signin-signup">
          {/* ================= LOGIN FORM ================= */}
          {user ? (
            <div className="text-center space-y-3">
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-20 w-20 rounded-full mx-auto"
                alt=""
              />
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p>{user?.email}</p>
              <button onClick={handleSignOut} className="my-btn">
                Sign Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleSignin} className="sign-in-form">
              <h2 className="title font-bold">Log in</h2>

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

              <input type="submit" value="Login" className="btn solid" />

              <p className="social-text">or Log in with social platforms</p>

              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>

                <a
                  onClick={handleGoogleSignin}
                  href="#"
                  className="social-icon"
                >
                  <i className="fa-brands fa-google"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          )}
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

export default Login;
