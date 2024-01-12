import React from "react";
import my from '../assets/my.jpeg';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={my}
          alt="Founder"
        />

        <h2>Sonal Gupta</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/sonal_gupta1311" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Sonal997199" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/sonal-gupta-451336214" target={"blank"}>
            <AiFillLinkedin />
          </a>

        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
