import home from "../img/weather.jpg";
import { AboutStyle, Description, Image } from "../styles";

const About = () => {
  return (
    <AboutStyle>
      <Description>
        <h2>
          World <span>Weather</span>
        </h2>
        <h2>information</h2>
        <h1>Service</h1>
      </Description>
      <Image>
        <img src={home} alt="Weather" />
      </Image>
    </AboutStyle>
  );
};

export default About;
