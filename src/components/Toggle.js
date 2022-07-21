import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  const orderAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <motion.div onClick={() => setToggle(!toggle)}>
        <motion.h4 style={{ cursor: "pointer" }} variants={orderAnim} layout>
          {title}
        </motion.h4>
      </motion.div>
      {toggle ? children : ""}
    </div>
  );
};
export default Toggle;
