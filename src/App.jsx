import "./App.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
// import required modules
//
import cloud from "../src/assets/photo/cloud.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import { Pagination } from "swiper/modules";
// swiper
// import logo from './assets/photo/logo.svg'
import main from "./assets/photo/mail.svg";
import phone from "./assets/photo/phone.png";
// import seo from './assets/photo/seo.svg'
import ecommerce from "./assets/photo/ecommerce.png";
import content from "./assets/photo/content.png";
import starlink from "./assets/photo/starlink.png";
import increase from "./assets/photo/Increase.svg";
import calcurb from "./assets/photo/calcurb.svg";
import wmo from "./assets/photo/wmo.svg";
import seo1 from "./assets/photo/seo1.svg";
import seo2 from "./assets/photo/seo2.svg";
import seo3 from "./assets/photo/seo3.svg";
import seo4 from "./assets/photo/seo4.svg";
import seo5 from "./assets/photo/seo5.svg";
import seo6 from "./assets/photo/seo6.svg";
import seo7 from "./assets/photo/seo7.svg";
// import facebook from './assets/photo/facebook.svg'
import facebookicon from "./assets/photo/facebookicon.svg";
import instagram from "./assets/photo/instagram.svg";
import linkedin from "./assets/photo/LinkedIn.png";
import lg from "./assets/photo/lg.png";
import growth1 from "./assets/photo/growth1.jpg";
import growth2 from "./assets/photo/growth2.jpg";
import growth3 from "./assets/photo/growth3.jpg";
import seo from "./assets/photo/seo.png";
import wordpressseo from "./assets/photo/wordpressseo.png";
import mobileseo from "./assets/photo/mobileseo.png";
import internationalseo from "./assets/photo/international.png";
import CountUp from "react-countup";
import googlepartner from "./assets/photo/googlepartner.svg";
import hubspot from "./assets/photo/hubspot.svg";
import meta from "./assets/photo/meta.svg";
import aws from "./assets/photo/aws.svg";
import acevideo from "./assets/photo/acevideo.mp4";
import { FloatingWhatsApp } from "react-floating-whatsapp";
//
import { useForm } from "react-hook-form";
function App() {
  //
  //
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  //
  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
    reset: resetForm1,
  } = useForm();

  const contactFrom1 = async (data) => {
    try {
      const response = await axios.post(
        "https://acedigitalsolution.com/php-api/api-insert.php",
        data
        // { withCredentials: true }
      );
      //  response.data;
      resetForm1();
      toast.success("We will contact you very soon.");
    } catch (error) {
      throw error;
    }
  };
  //
  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    formState: { errors: errorsForm2 },
    reset: resetForm2,
  } = useForm();

  const contactFrom2 = async (data) => {
    try {
      const response = await axios.post(
        "https://acedigitalsolution.com/php-api/api-insert.php",
        data
        // { withCredentials: true }
      );
      //  response.data;
      resetForm2();
      toast.success("We will contact you very soon.");
    } catch (error) {
      throw error;
    }
  };

  //
  //
  const {
    register: registerForm3,
    handleSubmit: handleSubmitForm3,
    formState: { errors: errorsForm3 },
    reset: resetForm3,
  } = useForm();

  const contactFrom3 = async (data) => {
    try {
      const response = await axios.post(
        "https://acedigitalsolution.com/php-api/api-insert.php",
        data
        // { withCredentials: true }
      );
      //  response.data;
      resetForm3();
      toast.success("We will contact you very soon.");
    } catch (error) {
      throw error;
    }
  };
  //
  //
  const {
    register: registerForm4,
    handleSubmit: handleSubmitForm4,
    formState: { errors: errorsForm4 },
    reset: resetForm4,
  } = useForm();

  const contactFrom4 = async (data) => {
    try {
      const response = await axios.post(
        "https://acedigitalsolution.com/php-api/api-insert.php",
        data
        // { withCredentials: true }
      );
      //  response.data;
      resetForm4();
      toast.success("We will contact you very soon.");
    } catch (error) {
      throw error;
    }
  };
  //
  //
  return (
    <div className="main_container">
      <ToastContainer />
      <FloatingWhatsApp
        accountName="ACE DIGITAL SOLUTION"
        src={null}
        statusMessage=""
        chatMessage="How can we help you ACED up? :)"
        phoneNumber="7070454522"
        avatar="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg"
      />
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
      {/* hero section */}
      <div className="hero_section_container">
        <div className="left_hero_section">
          <h1>Targeted</h1>
          <h1>Traffic with Our</h1>
          <h1> SEO Solutions </h1>
          {/* <h1>Solutions</h1> */}
          {/* <p>Package Starts From ₹ 20,000</p> */}

          {/* <p className="package_heading">Monthly Package:</p> */}
          <div className="package_cloud_container">
            <div className="cloud_container">
              <img src={cloud} alt="cloud" />
            </div>
            <div className="item_package_container">

              <div className="item_package item_package_one">
                <p className="item_package1">5+1 Month</p>
                <p className="item_package2">₹ 75,000</p>
              </div>
              <div className="item_package item_package_two">
                <p className="item_package1">1 Month</p>
                <p className="item_package2">₹ 25,000</p>
              </div>
              <div className="item_package item_package_three">
                <p className="item_package1">6+2 Month</p>
                <p className="item_package2">₹ 1,00,000</p>
              </div>
            </div>
          </div>

        </div>
        <div className="right_hero_section">
          {/*  */}
          <form
            className="form_container"
            onSubmit={handleSubmitForm1(contactFrom1)}
            autoComplete="off"
          >
            <input
              type="text"
              // id="fullname"
              // name="fullname"
              className="form_input_box"
              placeholder="Name*"
              // required
              autoComplete="off"
              {...registerForm1("fullname", { required: true })}
            />
            {errorsForm1.fullname && (
              <span className="error_message">Name is required</span>
            )}
            <input
              type="tel"
              // id="phone_number"
              // name="phone_number"
              minLength="10"
              maxLength="10"
              pattern="\d{10}"
              className="form_input_box"
              placeholder="Phone No*"
              // required
              autoComplete="off"
              {...registerForm1("phone_number", {
                required: true,
                valueAsNumber: true,
              })}
            />
            {errorsForm1.phone_number && (
              <span className="error_message"> Phone Number is required</span>
            )}
            <input
              type="email"
              // id="email"
              // name="email"
              className="form_input_box"
              placeholder="Email Address*"
              // required
              autoComplete="off"
              {...registerForm1("email", { required: true })}
            />
            {errorsForm1.email && (
              <span className="error_message">Email is required</span>
            )}
            <textarea
              // id="textarea"
              className="fixed-size-textarea " id="textarea1"
              placeholder="Enter your question or message"
              //
              // name="text_area"
              autoComplete="off"
              {...registerForm1("text_area", { required: false })}
            />

            <button className="form_button" type="submit">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
      {/*  */}

      <div className="ace_services_container">
        <div className="ace_services_heading">
          <h2 className="ace_services_heading1">Services We Offer</h2>
        </div>
        <div className="ace_services_card">
          <div className="card_item">
            <div className="card_image">
              <img src={seo} alt="website development" />
            </div>
            <h3>Local</h3>
            <h3>Seo Services</h3>
            <p>
              Get your business to appear in local and location-related searches
            </p>
            <div className="getQuotes">
              <button>Get Quotes</button>
            </div>
          </div>
          {/*  */}
          <div className="card_item">
            <div className="card_image">
              <img src={ecommerce} alt="website development" />
            </div>
            <h3>eCommerce</h3>
            <h3>SEO </h3>
            <p>
              Stand out in a competitive marketplace by improving your SERP
              visibility and rankings
            </p>
            <div className="getQuotes">
              <button>Get Quotes</button>
            </div>
          </div>
          <div className="card_item">
            <div className="card_image">
              <img src={content} alt="content" />
            </div>
            <h3>Content</h3>
            <h3>Writing </h3>
            <p>
              Give your brand the voice it deserves with compelling content and
              captivate audiences
            </p>
            <div className="getQuotes">
              <button>Get Quotes</button>
            </div>
          </div>
          <div className="card_item">
            <div className="card_image">
              <img src={internationalseo} alt="content" />
            </div>
            <h3>International</h3>
            <h3>Seo </h3>
            <p>
              Get your business to appear in local and location-related searches
            </p>

            <div className="getQuotes">
              <button>Get Quotes</button>
            </div>
          </div>
          {/* <div className="card_item">
            <div className="card_image">
              <img
                src={wordpressseo}
                alt="Wordpress
Seo "
              />
            </div>
            <h3>Wordpress</h3>
            <h3>Seo </h3>
            <p>
              Stand out in a competitive marketplace by improving your SERP
              visibility and rankings
            </p>
            <div className="getQuotes">
              <button>Get Quotes</button>
            </div>
          </div>
          <div className="card_item">
            <div className="card_image">
              <img
                src={mobileseo}
                alt="Mobile 
Seo "
              />
            </div>
            <h3>Mobile</h3>
            <h3>Seo </h3>
            <p>
              Give your brand the voice it deserves with compelling content and
              captivate audiences
            </p>
            <div className="getQuotes">
              <button>Get Quotes</button>
            </div>
          </div> */}
        </div>
      </div>
      {/*  */}
      <div className="contact_us">
        <button>Get Quotes</button>
      </div>
      <div className="audit_reports_container">
        <h3>Get the Free SEO Audit Report!</h3>
        <div className="form">
          <form
            className="audit_form"
            onSubmit={handleSubmitForm2(contactFrom2)}
            autoComplete="off"
          >
            <div className="form2Input">
              <input
                type="text"
                id="name"
                name="name"
                className="form_input_box_audit"
                placeholder="Name*"
                // required
                autoComplete="off"
                {...registerForm2("fullname", { required: true })}
              />
              {errorsForm2.fullname && (
                <span className="error_message">Name is required</span>
              )}
            </div>
            <div className="form2Input">
              <input
                type="email"
                id="email"
                name="email"
                className="form_input_box_audit"
                placeholder="Email Address*"
                // required
                autoComplete="off"
                {...registerForm2("email", { required: true })}
              />
              {errorsForm2.email && (
                <span className="error_message">Email is required</span>
              )}
            </div>
            <div className="form2Input">
              <input
                type="tel"
                id="phone"
                name="phone"
                minLength="10"
                maxLength="10"
                pattern="\d{10}"
                className="form_input_box_audit"
                placeholder="Phone No*"
                autoComplete="off"
                {...registerForm2("phone_number", { required: true })}
              />
              {/*  */}
              {/* phone_number */}
              {errorsForm2.phone_number && (
                <span className="error_message">Number is required</span>
              )}
            </div>
            {/*  */}

            {/*  */}

            {/*  */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* our result */}
      <div className="our_result_container_main">


        <div className="our_result">
          <h4>Our Results</h4>
          {/* <p className="our_result_para">700% increase in organic traffic </p> */}
        </div>
        <Swiper
          initialSlide={1}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img src={growth1} />
            <div className="our_result_heading" id="our_result_id">

            </div>
            <div className="our_heading_container">

              <p className="our_result_heading" id="heading_id">700% Increase In Organic Traffic </p>
            </div>
          </SwiperSlide>
          <SwiperSlide   >
            {" "}
            {/* <div class="overlay-text">8000</div> */}
            <img src={growth2} />
            <div className="our_result_heading" id="our_result_id">

            </div>
            <div className="our_heading_container">

              <p className="our_result_heading" id="heading_id">700% Increase In Organic Traffic </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={growth3} />
            <div className="our_result_heading" id="our_result_id">

            </div>
            <div className="our_heading_container">

              <p className="our_result_heading" id="heading_id">700% Increase In Organic Traffic </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* our case study */}

      {/*  */}
      <div className="audit_reports_container" id="audit_container_second">
        <h3>Get the Free SEO Audit Report!</h3>
        <div className="form">
          <form
            className="audit_form"
            onSubmit={handleSubmitForm3(contactFrom3)}
            autoComplete="off"
          >
            <div className="form2Input">
              <input
                type="text"
                id="name"
                name="name"
                className="form_input_box_audit"
                placeholder="Name*"
                // required
                autoComplete="off"
                {...registerForm3("fullname", { required: true })}
              />
              {errorsForm3.fullname && (
                <span className="error_message">Name is required</span>
              )}
            </div>
            <div className="form2Input">
              <input
                type="email"
                id="email"
                name="email"
                className="form_input_box_audit"
                placeholder="Email Address*"
                // required
                autoComplete="off"
                {...registerForm3("email", { required: true })}
              />
              {errorsForm3.email && (
                <span className="error_message">Email is required</span>
              )}
            </div>
            <div className="form2Input">
              <input
                type="tel"
                id="phone"
                name="phone"
                minLength="10"
                maxLength="10"
                pattern="\d{10}"
                className="form_input_box_audit"
                placeholder="Phone No*"
                autoComplete="off"
                {...registerForm3("phone_number", { required: true })}
              />
              {/*  */}
              {/* phone_number */}
              {errorsForm3.phone_number && (
                <span className="error_message">Number is required</span>
              )}
            </div>
            {/*  */}

            {/*  */}

            {/*  */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="our_case_study">
        <h1>Our Case Studies</h1>
        <div className="our_case_study_container">
          <div className="our_case_study_container_second">
            <div className="our_case_study_item">
              <div className="logo">
                <img
                  src={starlink}
                  alt="perprint"
                  className="study_img starlink"
                />
              </div>
              <div className="result_container">
                <p className="result">Result</p>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={85} duration={5} /> %
                  </p>
                  <p className="Ranked_keyword">Ranked Keywords (Top 10)</p>
                  <p className="growth_para">Growth in Keywords ranking In</p>
                  <p className="growth_para">The Top 10 Search Results</p>
                </div>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img
                      src={increase}
                      alt="increase"
                      className="increase"
                    />{" "}
                    <CountUp start={0} end={51} duration={5} />%{" "}
                  </p>
                  <p className="Ranked_keyword">Traffic Growth</p>
                  <p className="growth_para">
                    Increase in OrganicTraffic By 51%
                  </p>
                </div>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={216} duration={5} /> %
                  </p>
                  <p className="Ranked_keyword">Appointment Booking</p>
                  <p className="growth_para">
                    Increased The No. Of Appointment booking by 217%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="our_case_study_container_second">
            <div className="our_case_study_item">
              <div className="logo">
                <img src={calcurb} alt="perprint" className="study_img" />
              </div>
              <div className="result_container">
                <p className="result">Result</p>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={125} duration={5} />%
                  </p>
                  <p className="Ranked_keyword">Traffic</p>
                  <p className="growth_para">
                    Improved organic traffic for the schools website
                  </p>
                  {/* <p className='growth_para'>
                    website</p> */}
                </div>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={65} duration={5} />%
                  </p>
                  <p className="Ranked_keyword">Leads</p>
                  <p className="growth_para">
                    Bolstered leads from organic channels
                  </p>
                </div>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={216} duration={5} />%
                  </p>
                  <p className="Ranked_keyword">Blog Traffic</p>
                  <p className="growth_para">
                    Increased blog traffic using an event-specific keywords
                    strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="our_case_study_container_second">
            <div className="our_case_study_item">
              <div className="logo">
                <img src={wmo} alt="perprint" className="study_img" />
              </div>
              <div className="result_container">
                <p className="result">Result</p>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={85} duration={5} />%
                  </p>
                  <p className="Ranked_keyword">Traffic</p>
                  <p className="growth_para">
                    Improved Organic Traffic by 26% From Tier 2 and Tier 3
                    Cities
                  </p>
                </div>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={2} duration={5} /> X
                  </p>
                  <p className="Ranked_keyword">2X Growth</p>
                  <p className="growth_para">
                    2X Growth in Overall Website Traffic
                  </p>
                </div>
                <div className="result_container_item">
                  <p className="graph_percentage">
                    {" "}
                    <img src={increase} alt="increase" className="increase" />
                    <CountUp start={0} end={216} duration={5} />%
                  </p>
                  <p className="Ranked_keyword">Blog Traffic</p>
                  <p className="growth_para">
                    Increased The No. Of Appointment booking by 217%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="Comprehensive ">
        <h4>Our Comprehensive SEO Strategy</h4>
        <div className="Comprehensive_main_container">
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo1}
                alt="SEO
Basic"
              />
            </div>
            <p>SEO</p>
            <p>Basic</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo2}
                alt="Keyboard 
Research"
              />
            </div>
            <p>Keyboard</p>
            <p>Research</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo3}
                alt="Content
Writing"
              />
            </div>
            <p>Content</p>
            <p>Writing</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo4}
                alt="Link
Building"
              />
            </div>
            <p>Link</p>
            <p>Building</p>
          </div>
          <div className="Comprehensive_container tablet_view">
            <div className="Comprehensive_item">
              <img
                src={seo5}
                alt="Audit &
Analysis"
              />
            </div>
            <p>Audit &</p>
            <p>Analysis</p>
          </div>
          <div className="Comprehensive_container tablet_view">
            <div className="Comprehensive_item">
              <img
                src={seo6}
                alt="Audit &
Analysis"
              />
            </div>
            <p>On Page</p>
            <p>SEO</p>
          </div>
          <div className="Comprehensive_container tablet_view">
            <div className="Comprehensive_item">
              <img
                src={seo7}
                alt="Technical 
SEO"
              />
            </div>
            <p>Technical</p>
            <p>SEO</p>
          </div>
        </div>
        <div
          className="Comprehensive_main_container  desktop_view"
          id="Comprehensive_main_container2"
        >
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo5}
                alt="Audit &
Analysis"
              />
            </div>
            <p>Audit &</p>
            <p>Analysis</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo6}
                alt="Audit &
Analysis"
              />
            </div>
            <p>On Page</p>
            <p>SEO</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img
                src={seo7}
                alt="Technical 
SEO"
              />
            </div>
            <p>Technical</p>
            <p>SEO</p>
          </div>
        </div>
      </div>
      {/* send proposal */}
      <div className="send_proposal">
        <h4>Send me Proposal</h4>
        <div className="proposal_container_container">
          <div className="proposal_container">
            <div className="right_proposal_section">
              <form
                className="form_container"
                onSubmit={handleSubmitForm4(contactFrom4)}
                autoComplete="off"
              >
                <div className="form_container_main">
                  <div className="left_proposal_section">
                    {/* <img src={leader} alt="leader" /> */}
                    <video
                      className="video_size"
                      preload="auto"
                      muted
                      controls
                      autoPlay
                      loop
                      playsInline
                    >
                      <source src={acevideo} type="video/mp4" />
                      {/* Your browser does not support the video tag. */}
                    </video>
                    {/*  */}

                    {/*  */}
                  </div>
                  <div className="form_inputs">
                    {/* <label for="name" className='form_label'>Name:</label> */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form_input_box"
                      placeholder="Name*"
                      autoComplete="off"
                      {...registerForm4("fullname", { required: true })}
                    />
                    {errorsForm4.fullname && (
                      <span className="error_message">Name is required</span>
                    )}

                    {/* <label for="phone" className='form_label'>Phone No.</label> */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form_input_box"
                      placeholder="Email Address*"
                      // required
                      autoComplete="off"
                      {...registerForm4("email", { required: true })}
                    />
                    {errorsForm4.email && (
                      <span className="error_message">Email is required</span>
                    )}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="\d{10}"
                      minLength="10"
                      maxLength="10"
                      className="form_input_box"
                      placeholder=" Phone No*"
                      // required
                      autoComplete="off"
                      {...registerForm4("phone_number", { required: true })}
                    />
                    {errorsForm4.phone_number && (
                      <span className="error_message">Phone Number is required</span>
                    )}

                    {/* <label for="message" className='form_label'>Your message</label> */}





                  </div>
                </div>
                <div className="button_container">
                  <button
                    className="form_button"
                    id="proposal_button"
                    type="submit"
                  >
                    {" "}
                    Get a Free Marketing Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
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
                  href="https://www.facebook.com/people/Ace-Digital-Solution/61559529158329/"
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
  );
}

export default App;
