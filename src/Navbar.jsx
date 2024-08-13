import React from 'react'
import { Icon } from "@iconify/react";
import lg from "./assets/photo/lg.png";
import main from "./assets/photo/mail.svg";
import phone from "./assets/photo/phone.png";

const Navbar = () => {
  return (
    <div>
         <div className="navbar_container">
          <div className="toggle_menu">
            <Icon
              icon="mdi:hamburger-menu"
              width="24"
              height="24"
              className="toggle_menu_bar"
            />
          </div>
          <div className="left_section">
            <img src={lg} alt="logo" />
          </div>
          <div className="right_section">
            <button className="right_section_item for_desktop">
              {" "}
              <img src={main} alt="mail" />
              <a
                href="mailto:marketing@acedigitalsolution.com"
                className="right_section_item1"
              >
                {" "}
                marketing@acedigitalsolution.com
              </a>
            </button>
            <button className="right_section_item for_desktop">
              {" "}
              <img src={phone} alt="phone" />
              <a href="tel:7070454522" className="right_section_item1">
                {" "}
                707 045 4522
              </a>
            </button>
            {/*  */}
            {/*  */}{" "}
            <a
              href="mailto:marketing@acedigitalsolution.com"
              className="right_section_item1 for_mobile"
            >
              {" "}
              <Icon icon="ic:baseline-mail" width="24" height="24" />
            </a>{" "}
            <a href="tel:7070454522" className="right_section_item1 for_mobile">
              {" "}
              <Icon icon="material-symbols:call" width="24" height="24" />
            </a>
          </div>
        </div>
       
    </div>
  )
}

export default Navbar