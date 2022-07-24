import home from "../img/weather.jpg";
import { AboutStyle, Description, Image } from "../styles";
import { motion } from "framer-motion";

const About = () => {
  const ImgAnim = {
    hidden: { scale: 1.4 },
    show: { scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const aboutAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const anim = {
    hidden: { x: 200 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };
  return (
    <AboutStyle>
      <Description variants={anim} initial="hidden" animate="show">
        <motion.h2 variants={aboutAnim}>
          World <span>Weather</span>
        </motion.h2>
        <motion.h2 variants={aboutAnim}>information</motion.h2>
        <motion.h1 variants={aboutAnim}>Service</motion.h1>
      </Description>
      <Image>
        <motion.img
          variants={ImgAnim}
          initial="hidden"
          animate="show"
          src={home}
          alt="Weather"
        />
      </Image>
    </AboutStyle>
  );
};

export default About;
