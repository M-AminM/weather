import styled from "styled-components";
import About from "../components/About";
import Info from "../components/Info";
import { motion } from "framer-motion";

const Home = () => {
  const WaveAnim = {
    hidden: {
      pathLength: 0,
      pathOffset: 1,
    },
    show: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div>
      <Wave
        viewBox="0 0 1440 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate="show"
          initial="hidden"
          variants={WaveAnim}
          d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
          stroke="#D96ED4"
          strokeOpacity="0.7"
          strokeWidth="10"
        />
      </Wave>

      <About />
      <Info />
    </div>
  );
};

const Wave = styled.svg`
  margin-top: 10vh;
  left: 0;
  position: absolute;
  z-index: 1;
`;
export default Home;
