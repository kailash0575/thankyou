import React from 'react'
import lg from "./assets/photo/lg.png";
import facebookicon from "./assets/photo/facebookicon.svg";
import instagram from "./assets/photo/instagram.svg";
import linkedin from "./assets/photo/LinkedIn.png";
import googlepartner from "./assets/photo/googlepartner.svg";
import hubspot from "./assets/photo/hubspot.svg";
import meta from "./assets/photo/meta.svg";
import aws from "./assets/photo/aws.svg";
const Footer = () => {
  return (
    <div>

      <div className="footer_container_main">
        <div className="footer_container">
          <div className="footer_left_section">
            <div className="footer_right_section_item">
              <img src={lg} alt="logo" className="footer_logo" />
            </div>
          </div>
          <div className="footer_right_section">
            <div className="follow_us">
              <p>Follow us!</p>
            </div>
            <div className="footer_right_section_item_social_media">
              <li>
                <a
                  href="https://www.facebook.com/teamacedigital/"
                  target="_blank"
                >
                  <img src={facebookicon} alt="facebookicon" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/teamacedigital/"
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" className="instagram" />
                </a>
              </li>
              {/* linkedin */}
              <li>
                <a
                  href="https://www.linkedin.com/company/ace-digital-solution/"
                  target="_blank"
                >
                  <img src={linkedin} alt="instagram" />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="footer_heading">
          <p className="mobile_view">
            Having clients in over seven sectors and across five continents, Ace
            digital solution is the fastest growing performance marketing agency
          </p>
          <p className="desktop_view">
            Having clients in over seven sectors and across five continents, Ace
            digital{" "}
          </p>
          <p className="desktop_view">
            solution is the fastest growing performance marketing agency
          </p>
        </div>
        <div className="portfolio_container">
          <li>
            <a
              href="https://drive.google.com/file/d/1m0tzKzRFSwL9mQghmhu3dPRhEH0IhRTM/view"
              target="_blank"
            >
              {" "}
              Our Portfolio
            </a>
          </li>
        </div>
        <div className="footer_bottom_container">
          <div className="footer_bottom_item">
            {" "}
            <img src={googlepartner} alt="googlepartner" />{" "}
          </div>
          <div className="footer_bottom_item">
            <img src={hubspot} alt="googlepartner" />
          </div>
          <div className="footer_bottom_item">
            {" "}
            <img src={meta} alt="meta" />{" "}
          </div>
          <div className="footer_bottom_item">
            {" "}
            <img src={aws} alt="aws" />{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer