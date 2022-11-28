import React from 'react';
import KazaLogo from "../assets/Logo/LOGO-noir.svg";

const Footer = () => {
  return (
    <footer>
      <img src={KazaLogo} alt="Logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;