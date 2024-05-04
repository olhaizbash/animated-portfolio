import React from "react";
import { motion } from "framer-motion";
import "../sidebar.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const listItems = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.ul className="links" variants={variants}>
      {listItems.map((el) => (
        <motion.li
          key={el}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <a href={`#${el}`}>{el}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Links;
