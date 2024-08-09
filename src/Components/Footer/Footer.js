import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">-- Portfolio --</h2>
        </div>
      
        <div className="footer-divider"></div>

        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <p className="footer-copy">&copy; 2024 Naga Sai. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/naga-sai2002/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={"30px"} /></a>
            <a href="https://github.com/Nagasai2018" target="_blank" rel="noopener noreferrer"><FaGithub size={"30px"} /></a>
            <a href="https://www.instagram.com/gurram_naga_sai/" target="_blank" rel="noopener noreferrer"><FaInstagram size={"30px"} /></a>
          </div>
          <p className="footer-support">Support: <a href="mailto:nagasai6230@gmail.com">nagasai6230@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
