import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import logo from "../assets/Red_heart.png";
import MyLink from "./MyLink";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { CircleLoader } from "react-spinners";
const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful!");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  console.log(loading);
  return (
    <div className="bg-slate-100/80 backdrop-blur-lg border-b border-white/70 py-2 border-b-slate-300">
      <MyContainer
        className={"flex items-center justify-between px-3 sm:px-6 lg:px-0"}
      >
        <figure>
          <img src={logo} className="w-[55px] h-[55px] object-contain" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            {" "}
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/services"}>Services</MyLink>
          </li>
          {user && (
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          )}
        </ul>

        {loading ? (
          <CircleLoader color="#f43f5e" />
        ) : user ? (
          <div className="text-center space-y-3">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <div className="relative group">
              <button
                className="bg-transparent border-none p-0 cursor-pointer"
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-11 w-11 rounded-full mx-auto object-cover transition-all duration-300 group-hover:ring-2 group-hover:ring-rose-400"
                  alt={user?.displayName || "User avatar"}
                />
              </button>

              {/* Display Name on Hover */}
              <div className="absolute top-[52px] right-0 z-50 pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                  {user?.displayName || "User"}

                  {/* Small arrow */}
                  <span className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 rotate-45"></span>
                </div>
              </div>
            </div>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p>{user?.email}</p>
              <button onClick={handleSignOut} className="my-btn">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold">
            <Link to={"/login"}>Log in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
