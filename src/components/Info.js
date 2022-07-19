import { AboutStyle, Description } from "../styles";
import styled from "styled-components";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const Info = () => {
  return (
    <AboutStyle>
      <Description>
        <h2>We know The</h2>
        <h2>
          <span>FUTURE</span>
        </h2>
        <Information>
          <div>We are the weather forecast system.</div>
          <div>We are a weather forecasting system. our experts check</div>
          <div>the information with the most modern satellite equipment</div>
          <div>and powerfuk servers. And they will give you the most</div>
          <div>accurate results.</div>
        </Information>
      </Description>
      <Cards>
        <div className="clock">
          <img src={clock} />
          <h3>Clock</h3>
        </div>

        <div className="other">
          <img src={money} />
          <h3>money</h3>
          <img src={teamwork} />
          <h3>Team work</h3>
        </div>
      </Cards>
    </AboutStyle>
  );
};

const Information = styled.div`
  margin-top: 1rem;
  div {
    font-size: 1.5rem;
  }
`;

const Cards = styled.div`
  margin-top: 27vh;
  padding: 1rem;
  .other {
    display: flex;
    justify-content: space-between;
    padding: 3rem;
  }
  h3 {
    padding: 1rem;
    background: white;
    margin: 0rem 1rem 0rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  .clock {
    display: flex;
    justify-content: center;
    h3 {
      width: 17%;
    }
  }
`;

export default Info;
