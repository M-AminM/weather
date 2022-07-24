import styled from "styled-components";
import { motion } from "framer-motion";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const orderAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const anim = {
    hidden: { y: 100 },
    show: {
      y: 30,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };

  const nameHandler = (event) => {
    setInput(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = () => {
    setInput("");
    setMessage("");
    const data = { name: input, message: message };
    axios.post("http://localhost:8000/messages", data);
  };

  return (
    <ContactStyle variants={anim} initial="hidden" animate="show">
      <ContactInfo>
        <motion.h4 style={{ color: "#23d997" }} variants={orderAnim}>
          Get In Touch
        </motion.h4>
      </ContactInfo>
      <AnimateSharedLayout>
        <ContactInfo>
          <Toggle title="Send us message">
            <div className="inputs">
              <label htmlFor="name">Name</label>
              <input
                value={input}
                onChange={nameHandler}
                id="name"
                type="text"
              />
              <label htmlFor="message">Message</label>
              <textarea
                value={message}
                onChange={messageHandler}
                id="message"
                rows="10"
                cols="20"
              />
              <input onClick={submitHandler} type="submit" value="Submit" />
            </div>
          </Toggle>
        </ContactInfo>
        <ContactInfo>
          <Toggle title="Send an email">
            <div className="email">
              Send your feedback with <a href="mailto:aminfarid1234@gmail.com">email</a>
            </div>
          </Toggle>
        </ContactInfo>
        <ContactInfo>
          <Toggle title="Social Media">
            <img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" />
            <img src="https://www.vectorlogo.zone/logos/twitter/twitter-official.svg" />
            <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" />
            <img src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg" />
          </Toggle>
        </ContactInfo>
      </AnimateSharedLayout>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  h4 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  h1 {
    margin: 1rem;
  }
  img {
    padding: 0.3rem;
    width: 22%;
    height: 5vh;
  }
  .email {
    padding-bottom: 2rem;
    font-size: 1.5rem;
    color: #23d997;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 0.5rem;
    }
    label {
      margin-bottom: 0.5rem;
    }
  }
`;

export default Contact;
