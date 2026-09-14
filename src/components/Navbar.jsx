import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import logo from "../assets/Red_heart.png";
import MyLink from "./MyLink";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { CircleLoader } from "react-spinners";
const Navbar = () => {
  const { user, signoutUserFunc, setUser ,loading,setLoading} = useContext(AuthContext);
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
    <div className="bg-slate-100 py-2 border-b-slate-300">
      <MyContainer className={"flex items-center justify-between"}>
        <figure>
          <img src={logo} className="w-[55px] h-[55px] object-contain" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            {" "}
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"}>About Us</MyLink>
          </li>
          {user && <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>}
        </ul>

        {loading ? (<CircleLoader color="#f43f5e" />) : user ? (
          <div className="text-center space-y-3">
            

            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="bg-transparent border-none p-0 cursor-pointer"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
              src={user?.photoURL || "https://via.placeholder.com/88"}
              className="h-11 w-11 rounded-full mx-auto "
              alt=""
            />
            </button>

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
