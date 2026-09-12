import React from "react";
import MyContainer from "./MyContainer";
import logo from "../assets/Red_heart.png"
import MyLink from "./MyLink";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="bg-slate-100 py-2 border-b-slate-300">
        <MyContainer className={"flex items-center justify-between"}>
            <figure>
                <img src={logo} className="w-[55px]" />
            </figure>
            <ul className="flex items-center gap-2">
                <li>
                {" "}
                <MyLink to={"/"}>Home</MyLink>
                </li>
                <li>
                <MyLink to={"/about-us"}>About Us</MyLink>
                </li>
                <li>
                <MyLink to={"/profile"}>Profile</MyLink>
                </li>
            </ul>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold">
                <Link to={"/login"}>Log in</Link>
            </button>
        </MyContainer>
    </div>
  );
};

export default Navbar;
