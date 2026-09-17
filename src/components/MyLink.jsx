import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({ to, className, children }) => {
    return (
        <NavLink
      to={to}
      className={({ isActive }) =>
        `text-black no-underline font-medium transition-colors duration-300
        hover:text-rose-500
        ${isActive ? "text-rose-500" : "text-black"}`
      }
    >
      {children}
    </NavLink>
    );
};

export default MyLink;