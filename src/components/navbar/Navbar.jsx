import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import SideBar from "../sideBar/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Olha Izbash
        </motion.span>
        <ul className="social">
          <li>
            <a href="">
              <img src="../../../public/facebook.png" alt="facebook link" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../../public/instagram.png" alt="instagram link" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
