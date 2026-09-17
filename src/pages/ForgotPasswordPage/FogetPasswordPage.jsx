import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowRight,
  FaPaw,
  FaShieldAlt,
} from "react-icons/fa";
import { RiseLoader } from "react-spinners";
import toast from "react-hot-toast";
import "./ForgotPasswordPage.css";
import { AuthContext } from "../../context/AuthContext";


const ForgotPasswordPage = () => {
  const { sendPasswordResetEmailFunc, user, loading, setLoading } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");

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

  const handleResetPassword = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    sendPasswordResetEmailFunc(cleanEmail)
      .then(() => {
        toast.success(
          "Password reset link sent! Please check your Gmail inbox.",
        );

        // Open Gmail after Firebase sends the reset email
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 1200);
      })
      .catch((e) => {
        console.log(e);

        if (e.code === "auth/user-not-found") {
          toast.error(
            "No account was found with this email address.",
          );
        } else if (e.code === "auth/invalid-email") {
          toast.error(
            "The email address you entered is invalid.",
          );
        } else if (e.code === "auth/network-request-failed") {
          toast.error(
            "Unable to connect to the server. Please check your internet connection.",
          );
        } else if (e.code === "auth/too-many-requests") {
          toast.error(
            "Too many requests. Please wait a few minutes and try again.",
          );
        } else {
          toast.error(
            "Unable to send password reset email. Please try again.",
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="forgot-password-page">
      <section className="forgot-password-card">

        {/* Icon */}
        <div className="forgot-password-icon">
          <FaPaw />
        </div>

        {/* Header */}
        <div className="forgot-password-header">
          <span>ACCOUNT RECOVERY</span>

          <h1>Reset your password.</h1>

          <p>
            Enter the email address connected to your WinterPaws
            account and we'll send you a secure password reset link.
          </p>
        </div>

        {/* Form */}
        <form
          className="forgot-password-form"
          onSubmit={handleResetPassword}
        >
          <div className="forgot-form-group">
            <label htmlFor="reset-email">
              Email address
            </label>

            <div className="forgot-input">
              <FaEnvelope />

              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <button
            type="submit"
            className="reset-password-button"
            disabled={loading}
          >
            <span>
              {loading
                ? "Sending reset link..."
                : "Reset my password"}
            </span>

            {!loading && (
              <span className="reset-arrow">
                <FaArrowRight />
              </span>
            )}
          </button>
        </form>

        {/* Gmail info */}
        <div className="gmail-info">
          <div className="gmail-info-icon">
            ✉
          </div>

          <div>
            <strong>Check your Gmail</strong>
            <span>
              After clicking reset, we'll open Gmail for you.
            </span>
          </div>
        </div>

        {/* Back to Login */}
        <div className="back-to-login">
          <span>Remember your password?</span>

          <Link to="/login">
            Back to login
            <FaArrowRight />
          </Link>
        </div>

        {/* Security */}
        <div className="forgot-security">
          <FaShieldAlt />

          <span>
            Your account information remains private & secure.
          </span>
        </div>
      </section>
    </main>
  );
};

export default ForgotPasswordPage;

