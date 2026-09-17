import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaPaw,
  FaArrowRight,
  FaHeart,
  FaShieldAlt,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";

import "./LoginPage.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { RiseLoader } from "react-spinners";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const {
    signInWithEmailAndPasswordFunc,
    signInWithPopupFunc,

    user,
    setUser,
    setLoading,
    loading,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading || user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RiseLoader color="#687cdb" size={25} margin={4} />
      </div>
    );
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful!");
        navigate(from);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google sign in");
    signInWithPopupFunc()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        navigate(from);
        toast.success("Signin successful!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="premium-login-page">
      {/* ================= LEFT SIDE ================= */}

      <section className="premium-visual">
        <div className="visual-noise"></div>

        {/* Aurora */}
        <div className="aurora aurora-one"></div>
        <div className="aurora aurora-two"></div>
        <div className="aurora aurora-three"></div>

        {/* Moon */}
        <div className="moon">
          <div className="moon-glow"></div>
          <div className="moon-core"></div>
        </div>

        {/* Stars */}
        <div className="stars">
          <span className="star star-1">✦</span>
          <span className="star star-2">✧</span>
          <span className="star star-3">✦</span>
          <span className="star star-4">·</span>
          <span className="star star-5">✧</span>
          <span className="star star-6">✦</span>
          <span className="star star-7">·</span>
        </div>

        {/* Snow */}
        <div className="snow-layer snow-back"></div>
        <div className="snow-layer snow-middle"></div>
        <div className="snow-layer snow-front"></div>

        {/* Brand */}

        <div className="brand-area">
          <div className="brand-logo">
            <FaPaw />
          </div>

          <div className="brand-text">
            <h3>WinterPaws</h3>
            <p>WINTER PET CARE</p>
          </div>
        </div>

        {/* Main content */}

        <div className="visual-content">
          <div className="mini-label">
            <span></span>A WARMER WINTER FOR THEM
          </div>

          <h1>
            Where every
            <br />
            <span>paw feels home.</span>
          </h1>

          <p>
            Discover trusted pet care, cozy winter essentials, grooming services
            and expert tips — all in one beautiful place.
          </p>

          {/* Features */}

          <div className="feature-pills">
            <div className="feature-pill">
              <FaPaw />
              <span>Pet Care</span>
            </div>

            <div className="feature-pill">
              <FaHeart />
              <span>Pet Wellness</span>
            </div>

            <div className="feature-pill">
              <span className="snow-icon">❄</span>
              <span>Winter Ready</span>
            </div>
          </div>
        </div>

        {/* Floating card 1 */}

        <div className="care-card care-card-one">
          <div className="care-icon">
            <FaPaw />
          </div>

          <div className="care-info">
            <span>WINTER CARE</span>
            <strong>Everything they need</strong>
          </div>

          <div className="care-check">✓</div>
        </div>

        {/* Floating card 2 */}

        <div className="care-card care-card-two">
          <div className="online-dot"></div>

          <div className="care-info">
            <span>CARE STATUS</span>
            <strong>Cozy & protected</strong>
          </div>
        </div>

        {/* ================= WINTER SCENE ================= */}

        <div className="winter-landscape">
          {/* Mountains */}

          <div className="mountain mountain-back"></div>
          <div className="mountain mountain-middle"></div>
          <div className="mountain mountain-front"></div>

          {/* Trees */}

          <div className="pine pine-one">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div className="pine pine-two">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div className="pine pine-three">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div className="pine pine-four">
            <i></i>
            <i></i>
            <i></i>
          </div>

          {/* Cozy Pet House */}

          <div className="pet-house">
            <div className="house-snow"></div>

            <div className="house-roof"></div>

            <div className="house-body">
              <div className="house-window">
                <span></span>
                <span></span>
              </div>

              <div className="house-door">
                <div></div>
              </div>

              <div className="house-light light-one"></div>
              <div className="house-light light-two"></div>
            </div>

            <div className="chimney"></div>

            <div className="smoke smoke-one"></div>
            <div className="smoke smoke-two"></div>
            <div className="smoke smoke-three"></div>
          </div>

          {/* ================= DOG ================= */}

          <div className="dog">
            <div className="dog-tail"></div>

            <div className="dog-body">
              <div className="dog-leg dog-leg-one"></div>
              <div className="dog-leg dog-leg-two"></div>
            </div>

            <div className="dog-head">
              <div className="dog-ear dog-ear-one"></div>
              <div className="dog-ear dog-ear-two"></div>

              <div className="dog-eye dog-eye-one"></div>
              <div className="dog-eye dog-eye-two"></div>

              <div className="dog-muzzle"></div>

              <div className="dog-nose"></div>

              <div className="dog-scarf"></div>
            </div>
          </div>

          {/* ================= CAT ================= */}

          <div className="cat">
            <div className="cat-tail"></div>

            <div className="cat-body">
              <div className="cat-chest"></div>
            </div>

            <div className="cat-head">
              <div className="cat-ear cat-ear-one"></div>
              <div className="cat-ear cat-ear-two"></div>

              <div className="cat-eye cat-eye-one"></div>
              <div className="cat-eye cat-eye-two"></div>

              <div className="cat-nose"></div>
            </div>

            <div className="cat-scarf"></div>
          </div>

          {/* Snow ground */}

          <div className="snow-ground"></div>
        </div>

        {/* Bottom */}

        <div className="visual-bottom">
          <div className="bottom-line"></div>

          <div className="bottom-content">
            <FaShieldAlt />
            <span>Trusted care for your furry companion</span>
          </div>
        </div>
      </section>

      {/* ================= RIGHT LOGIN ================= */}

      <section className="premium-form-side">
        <div className="form-background-glow glow-top"></div>
        <div className="form-background-glow glow-bottom"></div>

        {/* Mobile brand */}

        <div className="mobile-brand">
          <div className="mobile-brand-icon">
            <FaPaw />
          </div>

          <div>
            <strong>WinterPaws</strong>
            <span>WINTER PET CARE</span>
          </div>
        </div>

        {/* Login card */}

        <div className="login-card">
          <div className="login-card-top">
            <div className="login-icon">
              <FaPaw />
            </div>

            <div className="welcome-label">WELCOME BACK</div>

            <h2>Let's get cozy.</h2>

            <p>Sign in to continue caring for your furry companion.</p>
          </div>

          {/* Login form */}

          <form className="premium-login-form" onSubmit={handleSignin}>
            {/* Email */}

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <div className="premium-input">
                <FaEnvelope />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="premium-input">
                <FaLock />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="forgot-password-wrapper">
                <Link to="/forgot-password" state={{ email: email.trim() }}>
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Login button */}

            <button
              type="submit"
              className="premium-login-button"
              disabled={loading}
            >
              <span>{loading ? "Logging in..." : "Log in"}</span>

              <span className="arrow-circle">
                <FaArrowRight />
              </span>
            </button>
          </form>

          {/* Divider */}

          <div className="premium-divider">
            <span></span>

            <p>OR</p>

            <span></span>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="google-login-button"
            onClick={handleGoogleSignin}
            disabled={loading}
          >
            <span className="google-icon">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.26z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.72c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.72z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.54 13.8A5.86 5.86 0 0 1 6.23 12c0-.62.11-1.22.31-1.8V7.67H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.33l3.24-2.53z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.17c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.21 14.63 2.28 12 2.28A9.75 9.75 0 0 0 3.3 7.67l3.24 2.53c.77-2.31 2.92-4.03 5.46-4.03z"
                />
              </svg>
            </span>

            <span className="google-login-text">Continue with Google</span>

            <span className="google-arrow">
              <FaArrowRight />
            </span>
          </button>

          {/* Signup */}

          <div className="create-account">
            <span>New to WinterPaws?</span>

            <Link to="/signup">
              Create an account
              <FaArrowRight />
            </Link>
          </div>

          {/* Security */}

          <div className="security-footer">
            <div className="security-icon">
              <FaShieldAlt />
            </div>

            <div>
              <strong>Private & secure</strong>

              <span>Your information is always protected.</span>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div className="copyright">
          © {new Date().getFullYear()} WinterPaws · Made with
          <FaHeart />
          for pet lovers
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
