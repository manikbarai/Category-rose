import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaImage,
  FaEye,
  FaEyeSlash,
  FaCheck,
} from "react-icons/fa";

import "./SignupPage.css";
import { AuthContext } from "../../context/AuthContext";
import { RiseLoader } from "react-spinners";
import toast from "react-hot-toast";

const SignupPage = () => {
 

  const [showPassword, setShowPassword] = useState(false);
  const {createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setLoading,
    signoutUserFunc,
    setUser,
    user,
    loading} = useContext(AuthContext)

    const navigate = useNavigate()

     useEffect(() => {
    if (!loading && user) {
      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

   if (loading || user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RiseLoader color="#687cdb" size={30} margin={4} />
      </div>
    );
  }

  // Signup Handler
  const handleSignup = (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value.trim();
    const photoURL = e.target.photoURL?.value.trim();
    const email = e.target.email?.value.trim();
    const password = e.target.password?.value;

    // Required Field Validation

     if (!displayName && !photoURL && !email && !password) {
    toast.error("Please enter your full details.");
    return;
  }


    if (!displayName) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!photoURL) {
      toast.error("Please enter your profile photo URL.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!password) {
      toast.error("Please create a password.");
      return;
    }

    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain uppercase, lowercase, and at least 6 characters.",
      );
      return;
    }
    setLoading(true);

    createUserWithEmailAndPasswordFunc(email, password)
    .then(() => {
      updateProfileFunc(displayName, photoURL)
        .then((res) => {
          console.log(res);

          signoutUserFunc().then(() => {
            toast.success("Successfully Signup completed!");

            setUser(null);

            navigate("/login", { replace: true });
          });
        })
        .catch((e) => {
          console.log(e);

          if (e.code === "auth/network-request-failed") {
            toast.error(
              "Unable to connect to the server. Please check your internet connection and try again.",
            );
          } else {
            toast.error(
              "Unable to update your profile. Please try again.",
            );
          }
        })
        .finally(() => {
          setLoading(false);
        });
    })
    .catch((e) => {
      console.log(e);

      if (e.code == "auth/email-already-in-use") {
        toast.error("User already exists in database!");

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
        toast.error("Something went wrong. Please try again.");
      }
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <main className="premium-signup-page">
      {/* =========================
          LEFT PREMIUM VISUAL
      ========================== */}
      <section className="signup-visual">
        {/* Aurora */}
        <div className="aurora aurora-one"></div>
        <div className="aurora aurora-two"></div>
        <div className="aurora aurora-three"></div>

        {/* Moon */}
        <div className="signup-moon">
          <div className="moon-crater crater-one"></div>
          <div className="moon-crater crater-two"></div>
          <div className="moon-crater crater-three"></div>
        </div>

        {/* Stars */}
        <span className="signup-star s1"></span>
        <span className="signup-star s2"></span>
        <span className="signup-star s3"></span>
        <span className="signup-star s4"></span>
        <span className="signup-star s5"></span>
        <span className="signup-star s6"></span>
        <span className="signup-star s7"></span>
        <span className="signup-star s8"></span>

        {/* Snow */}
        <div className="signup-snow">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        {/* Mountains */}
        <div className="mountain mountain-back"></div>
        <div className="mountain mountain-middle"></div>
        <div className="mountain mountain-front"></div>

        {/* Pine Trees */}
        <div className="pine pine-left">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div className="pine pine-center">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div className="pine pine-right">
          <i></i>
          <i></i>
          <i></i>
        </div>

        {/* Pet House */}
        <div className="premium-pet-house">
          <div className="house-chimney"></div>

          <div className="house-roof">
            <div className="roof-snow"></div>
          </div>

          <div className="house-main">
            <div className="house-window">
              <span></span>
            </div>

            <div className="house-door">
              <div className="door-knob"></div>
            </div>

            <div className="house-paw">🐾</div>
          </div>

          {/* Smoke */}
          <div className="smoke">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Floating Premium Cards */}

        <div className="floating-card floating-card-one">
          <div className="floating-icon">🐾</div>

          <div>
            <strong>Pet First</strong>
            <span>Always caring</span>
          </div>
        </div>

        <div className="floating-card floating-card-two">
          <div className="floating-icon">❄</div>

          <div>
            <strong>Winter Ready</strong>
            <span>Warm & protected</span>
          </div>
        </div>

        {/* Main Visual Content */}
        <div className="signup-visual-content">
          <div className="visual-logo">
            <span>🐾</span>
          </div>

          <div className="visual-label">WINTERPAWS</div>

          <h1>
            A warmer world
            <br />
            <span>for every paw.</span>
          </h1>

          <p>
            Join a premium pet-care community designed to make every winter
            moment warmer, safer and happier.
          </p>

          <div className="visual-benefits">
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Personalized care</p>
            </div>

            <div>
              <span>
                <FaCheck />
              </span>
              <p>Winter essentials</p>
            </div>

            <div>
              <span>
                <FaCheck />
              </span>
              <p>Trusted services</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          RIGHT SIGNUP SECTION
      ========================== */}
      <section className="signup-form-side">
        {/* Decorative Glow */}
        <div className="form-glow form-glow-one"></div>
        <div className="form-glow form-glow-two"></div>
        <div className="form-glow form-glow-three"></div>

        <div className="signup-card">
          {/* Header */}
          <div className="signup-card-header">
            <div className="signup-card-icon">🐾</div>

            <div className="signup-small-label">CREATE YOUR ACCOUNT</div>

            <h2>Join WinterPaws</h2>

            <p>
              Start your journey toward better care,
              <br />
              comfort and happier paws.
            </p>
          </div>

          {/* Form */}
          <form className="premium-signup-form"
          onSubmit={handleSignup}
            noValidate
          >
            {/* Name */}
            <div className="signup-field">
              <label htmlFor="name">Full name</label>

              <div className="signup-input">
                <FaUser />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="signup-field">
              <label htmlFor="photoURL">Photo URL</label>

              <div className="signup-input">
                <FaImage />

                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  placeholder="Enter your profile photo URL"
                />
              </div>
            </div>

            {/* Email */}
            <div className="signup-field">
              <label htmlFor="email">Email address</label>

              <div className="signup-input">
                <FaEnvelope />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="signup-field">
              <label htmlFor="password">Password</label>

              <div className="signup-input">
                <FaLock />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>


            {/* Password Requirement */}
            <div className="password-requirement">
              <div className="requirement-icon">
                <FaCheck />
              </div>

              <div>
                <strong>Password security</strong>
                <span>6+ characters · uppercase · lowercase</span>
              </div>
            </div>

            {/* Button */}
            <button type="submit" className="premium-signup-button"
            disabled={loading}
            >
              <span>
                {loading ? "Creating account..." : "Create my account"}
              </span>

              {!loading && <div className="signup-button-arrow">→</div>}
            </button>
          </form>

          {/* Login */}
          <div className="already-account">
            <span>Already part of WinterPaws?</span>

            <Link to="/login">Log in</Link>
          </div>

          {/* Security */}
          <div className="signup-security">
            <span>🔒</span>

            <p>Your personal information is protected</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
