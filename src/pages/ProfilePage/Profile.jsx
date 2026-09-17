

import { useContext, useState } from "react";
import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Profile = () => {
  const { user , setUser} = useContext(AuthContext);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

   const [name, setName] = useState(user?.displayName || "")
   const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
     const [updating, setUpdating] = useState(false);

      const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!photoURL.trim()) {
      toast.error("Please enter your profile image URL.");
      return;
    }

    setUpdating(true);

    try {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        toast.error("User not found. Please login again.");
        return;
      }

      await updateProfile(currentUser, {
        displayName: name.trim(),
        photoURL: photoURL.trim(),
      });

      // Update AuthContext user state
      if (setUser) {
        setUser({
          ...currentUser,
          displayName: name.trim(),
          photoURL: photoURL.trim(),
        });
      }

      toast.success("Profile updated successfully! 🎉");

      setShowUpdateForm(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <section className="profile-page">

      {/* Winter Decorations */}
      <div className="snow snow-one">❄</div>
      <div className="snow snow-two">❄</div>
      <div className="snow snow-three">✦</div>
      <div className="snow snow-four">❄</div>

      <div className="profile-container">

        {/* Heading */}
        <div className="profile-heading">
          <span className="heading-icon">🐾</span>

          <div>
            <p className="heading-small">
              WINTER PET COMPANION
            </p>

            <h1>My Profile</h1>

            <p>
              Your cozy space for a happier, warmer pet journey.
            </p>
          </div>
        </div>


        {/* ==============================
            UPDATE PROFILE FORM
        =============================== */}

        {showUpdateForm ? (
          <div className="update-profile-card">

            <div className="update-header">

              <div>
                <span className="update-label">
                  PERSONALIZE YOUR PROFILE
                </span>

                <h2>Update Profile</h2>

                <p>
                  Keep your pet companion profile fresh and up to date.
                </p>
              </div>

              <div className="update-paw">
                🐾
              </div>

            </div>


            <form onSubmit={handleUpdateProfile}>

              {/* Profile Preview */}

              <div className="profile-preview">

                <div className="preview-image-wrapper">

                  <img
                    src={
                      photoURL ||
                      "https://i.ibb.co/5GzXkwq/user-placeholder.png"
                    }
                    alt="Profile preview"
                    className="preview-image"
                  />

                </div>

                <div>
                  <span>PROFILE PREVIEW</span>

                  <h3>
                    {name || "Your Name"}
                  </h3>

                  <p>
                    {user?.email}
                  </p>
                </div>

              </div>


              {/* Name */}

              <div className="form-group">

                <label htmlFor="profile-name">
                  Full Name
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    id="profile-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                  />

                </div>

              </div>


              {/* Image URL */}

              <div className="form-group">

                <label htmlFor="profile-photo">
                  Profile Image URL
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🖼️
                  </span>

                  <input
                    id="profile-photo"
                    type="url"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="https://example.com/your-photo.jpg"
                  />

                </div>

                <small>
                  Use a direct image URL for your profile picture.
                </small>

              </div>


              {/* Buttons */}

              <div className="update-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowUpdateForm(false);

                    setName(user?.displayName || "");
                    setPhotoURL(user?.photoURL || "");
                  }}
                  disabled={updating}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="save-profile-btn"
                  disabled={updating}
                >
                  {updating ? (
                    <>
                      <span className="button-spinner"></span>
                      Updating...
                    </>
                  ) : (
                    <>
                      ✓ Save Changes
                    </>
                  )}
                </button>

              </div>

            </form>

          </div>
        ) : (

          /* ==============================
              PROFILE VIEW
          =============================== */

          <div className="profile-card">

            {/* Left Side */}

            <div className="profile-visual">

              <div className="avatar-wrapper">

                <div className="avatar-glow"></div>

                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/5GzXkwq/user-placeholder.png"
                  }
                  alt={user?.displayName || "User"}
                  className="profile-avatar"
                />

                <div className="verified-badge">
                  ✓
                </div>

              </div>


              <div className="profile-welcome">

                <span className="welcome-badge">
                  ❄ Winter Companion
                </span>

                <h2>
                  Welcome, <br />

                  <span>
                    {user?.displayName || "Pet Parent"}
                  </span>
                  !
                </h2>

                <p>
                  Keep your furry friend cozy, healthy and happy
                  throughout the winter season.
                </p>

              </div>


              <div className="paw-decoration paw-one">
                🐾
              </div>

              <div className="paw-decoration paw-two">
                🐾
              </div>

            </div>


            {/* Right Side */}

            <div className="profile-details">

              <div className="details-header">

                <div>

                  <span>
                    ACCOUNT DETAILS
                  </span>

                  <h3>
                    Personal Information
                  </h3>

                </div>

                <div className="winter-icon">
                  ☃️
                </div>

              </div>


              {/* Name */}

              <div className="info-item">

                <div className="info-icon name-icon">
                  👤
                </div>

                <div className="info-content">

                  <span>
                    Full Name
                  </span>

                  <strong>
                    {user?.displayName || "Not available"}
                  </strong>

                </div>

              </div>


              {/* Email */}

              <div className="info-item">

                <div className="info-icon email-icon">
                  ✉
                </div>

                <div className="info-content">

                  <span>
                    Email Address
                  </span>

                  <strong>
                    {user?.email || "Not available"}
                  </strong>

                </div>

              </div>


              {/* Status */}

              <div className="info-item">

                <div className="info-icon status-icon">

                  <span className="status-icon-check">
                    ✓
                  </span>

                </div>

                <div className="info-content">

                  <span>
                    Pet Companion Status
                  </span>

                  <div className="status">

                    <span className="status-dot"></span>

                    <span className="status-text">
                      Active Member
                    </span>

                  </div>

                </div>

              </div>


              {/* Update Button */}

              <button
                className="update-profile-btn"
                onClick={() => {
                  setName(user?.displayName || "");
                  setPhotoURL(user?.photoURL || "");
                  setShowUpdateForm(true);
                }}
              >

                <span>
                  ✎
                </span>

                Update Profile

                <span className="arrow">
                  →
                </span>

              </button>


              <p className="profile-note">
                ✨ Keep your profile information updated for a
                better pet-care experience.
              </p>

            </div>

          </div>

        )}


        {/* Bottom Features */}

        {!showUpdateForm && (
          <div className="profile-features">

            <div className="feature-card">

              <div className="feature-icon">
                🧣
              </div>

              <div>
                <h4>Stay Cozy</h4>
                <p>Warm winter care</p>
              </div>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                ✂️
              </div>

              <div>
                <h4>Pet Grooming</h4>
                <p>Keep them fresh</p>
              </div>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                ❤️
              </div>

              <div>
                <h4>Pet Wellness</h4>
                <p>Healthy & happy</p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Profile;