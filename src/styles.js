import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const AboutStyle = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  color: white;
  margin-top: 20vh;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;

export const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #1b1b1b;
    }
    button {
        font: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 7rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white; 
        transition: all 0.5 ease;
        &:hover {
            background-color: #23d997;
            color: white;
        }

    }
        span {
            font-weight: bold;
            color: #23d997;
        }
        h2{
          font-size: 3rem;  
        }

`;
