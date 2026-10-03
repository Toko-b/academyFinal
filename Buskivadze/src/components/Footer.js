import React from "react";
import heart from "../imgs/heart.png";
import google from "../imgs/google.png";
import pinterest from "../imgs/pinterest.png";
import twitter from "../imgs/twitter.png";
import facebook from "../imgs/faceblogo.png";
import { StyledFooter, Logos } from "../Style";

function Footer() {
  return (
    <StyledFooter>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Made with love</p>
        <Logos src={heart} alt="<3" />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Logos src={facebook} alt="could not be loaded" />
        <Logos src={twitter} alt="could not be loaded" />
        <Logos src={google} alt="could not be loaded" />
        <Logos src={pinterest} alt="could not be loaded" />
      </div>
    </StyledFooter>
  );
}

export default Footer;
