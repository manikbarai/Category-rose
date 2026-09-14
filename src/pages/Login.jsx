import { Link } from "react-router-dom";
import "./Login.css";
import { useContext, useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { RiseLoader } from "react-spinners";


const Login = () => {
  const [show, setShow] = useState(false);

  const {signInWithEmailAndPasswordFunc, signInWithPopupFunc, sendPasswordResetEmailFunc,user,setUser, setLoading, loading} = useContext(AuthContext)

  const location = useLocation()
  const from = location.state || "/" ;
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

  console.log(location);

  const emailRef = useRef(null)
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setLoading(false)
        setUser(res.user);
        toast.success("Signin successful!");
        navigate(from)
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google sign in");
    signInWithPopupFunc()
      .then((res) => {
        console.log(res);
        setLoading(false)
        setUser(res.user);
        navigate(from)
        toast.success("Signin successful!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

 

  const handleForgetPassword = () =>{
    console.log();
    const email = emailRef.current.value
    sendPasswordResetEmailFunc(email)
    .then(()=>{
      setLoading(false)
      toast.success("Password reset link sent! Please check your inbox.")
    }).catch((e)=>{
      toast.error(e.message)
    })
  }

  console.log(user);
  return (
    <div className="auth-page page-slide login-page">
      <div className="forms-container">
        <div className="signin-signup">
          {/* ================= LOGIN FORM ================= */}
         
            <form onSubmit={handleSignin} className="sign-in-form">
              <h2 className="title font-bold">Log in</h2>

              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="email"
                ref={emailRef}
                required placeholder="Email" />
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

              <button className="hover:underline cursor-pointer text-blue-400 font-semibold"  onClick={handleForgetPassword}
              type="button"
              >Forget password?</button>

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
