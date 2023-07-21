import React from "react";

import "./Footer.css";

import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer({ bgcolor, color }) {
  return (
    <div className="footer" style={{ backgroundColor: bgcolor, color: color }}>
      <div className="line1 fontline fontsize">
        <div className="phone">
          <BsFillTelephoneFill className="iconsize" />
          <h2>11 4154-4414</h2>
        </div>
        <div className="linkedln">
          <BiLogoLinkedinSquare className="linkedlnicon" />
          <h2>/ elosolutions</h2>
        </div>
        <div className="number">
          <div className="whatsapp">
            <BsWhatsapp className="iconsize" />
            <h2>11 98208-2914</h2>
          </div>
          <div className="whatsapp">
            <BsWhatsapp className="iconsize" />
            <h2>11 98208-2915</h2>
          </div>
        </div>
      </div>
      <div className="line2 fontline fontsize">
        <div className="location">
          <h2>Rua Iguaçu, 38 - Vila São Silvestre - Barueri - SP</h2>
          <IoLocationSharp className="iconsize" />
        </div>
        <div className="contact">
          <FiMail className="iconsize" />
          <h2>contato@elosolutions.com.br</h2>
        </div>
      </div>
    </div>
  );
}
