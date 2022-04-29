/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            <span>Hi, I'm </span>
            <span>Ganesh S Prabhu</span>
          </h3>
          {/* <h3></h3> */}
          <p>
            <Typewriter
              options={{
                strings: [
                  "I'm a Full Stack Web Developer",
                  
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          <a
            className="btn"
            href="Files/Ganesh_Resume.pdf"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        <div className="share">
          <a
            href="https://github.com/Ganesh-S-Prabhu"
            target="_blank"
            rel="noreferrer"
            className="fab fa-github"
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ganesh-s-prabhu/"
            rel="noreferrer"
            className="fab fa-linkedin"
          ></a>
         
             <a
            target="_blank"
            href="https://www.ganeshsprabhu2000@gmail.com"
            rel="noreferrer"
            className="fa fa-envelope"
          ></a>




        






        </div>
      </section>
    </>
  );
};

export const Party = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -9999;
`;
