import './App.css'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// swiper

import logo from './assets/photo/logo.svg'
import main from './assets/photo/mail.svg'
import phone from './assets/photo/phone.png'
// import seo from './assets/photo/seo.svg'
import ecommerce from './assets/photo/ecommerce.png'
import content from './assets/photo/content.png';
import perprint from './assets/photo/perprint.svg';
import increase from './assets/photo/Increase.svg';
import calcurb from './assets/photo/calcurb.svg';
import wmo from './assets/photo/wmo.svg'
import seo1 from './assets/photo/seo1.svg'
import seo2 from './assets/photo/seo2.svg'
import seo3 from './assets/photo/seo3.svg'
import seo4 from './assets/photo/seo4.svg'
import seo5 from './assets/photo/seo5.svg'
import seo6 from './assets/photo/seo6.svg'
import seo7 from './assets/photo/seo7.svg'
import leader from './assets/photo/leader.svg'
import google from './assets/photo/google.svg'
import facebook from './assets/photo/facebook.svg'
import facebookicon from './assets/photo/facebookicon.svg'
import instagram from './assets/photo/instagram.svg'
import youtube from './assets/photo/youtube.svg'
import lg from './assets/photo/lg.png'
import growth1 from './assets/photo/growth1.jpg'
import growth2 from './assets/photo/growth2.jpg'
import growth3 from './assets/photo/growth3.jpg'
import seo from './assets/photo/seo.png'
import wordpressseo from './assets/photo/wordpressseo.png'
import mobileseo from './assets/photo/mobileseo.png'
import internationalseo from './assets/photo/international.png'

function App() {



  return (
    <div className='main_container'>
      <div className="navbar_container">
        <div className="left_section"><img src={logo} alt="logo" /></div>
        <div className="right_section">
          <button className='right_section_item'> <span><img src={main} alt="mail" /></span><a href="" className='right_section_item1'> marketing@acedigital solution.com</a></button>
          <button className='right_section_item'> <span><img src={phone} alt="phone" /></span><a href=""
            className='right_section_item1'   > 707 045 4522</a></button>
        </div>
      </div>
      {/* hero section */}
      <div className="hero_section_container">
        <div className="left_hero_section">
          <h1>Targeted</h1>
          <h1>Traffic with</h1>
          <h1>Our SEO </h1>
          <h1>Solutions</h1>
          <p>Packages started from 20000 thousands</p>
        </div>
        <div className="right_hero_section">
          <form className='form_container'>
            <label for="name" className='form_label'>Name:</label>
            <input type="text" id="name" name="name" className='form_input_box' placeholder='name' required />

            <label for="phone" className='form_label'>Phone No.</label>
            <input type="tel" id="phone" name="phone" pattern="\d{10}" className='form_input_box' placeholder="number" required />

            <label for="email " className='form_label'>Email address</label>
            <input type="email" id="email" name="email" className='form_input_box' placeholder='email@janesfakedomain.net' required />

            <label for="message" className='form_label'>Your message</label>

            <textarea id="textarea" class="fixed-size-textarea" placeholder="Enter your question or message"></textarea>

            <button className='form_button' type='submit' > Submit</button>
          </form>


        </div>
      </div>
      {/*  */}

      <div className="ace_services_container">
        <div className="ace_services_heading">

          <h2 className='ace_services_heading1'>Services We Offer
          </h2>
        </div>
        <div className="ace_services_card">
          <div className="card_item">
            <div className="card_image"><img src={seo} alt="website development" /></div>
            <h3>Local

            </h3>
            <h3>Seo Services</h3>
            <p>Get your business to appear in local and location-related searches</p>

          </div>
          {/*  */}
          <div className="card_item">
            <div className="card_image"><img src={ecommerce} alt="website development" /></div>
            <h3>eCommerce

            </h3>
            <h3>SEO </h3>
            <p>Stand out in a competitive marketplace by improving your SERP visibility and rankings</p>

          </div>
          <div className="card_item">
            <div className="card_image"><img src={content} alt="content" /></div>
            <h3>Content

            </h3>
            <h3>Writing </h3>
            <p>Give your brand the voice it deserves with compelling content and captivate audiences</p>

          </div>
          <div className="card_item">
            <div className="card_image"><img src={internationalseo} alt="content" /></div>
            <h3>International


            </h3>
            <h3>Seo </h3>
            <p>Get your business to appear in local and location-related searches</p>

          </div>
          <div className="card_item">
            <div className="card_image"><img src={wordpressseo} alt="Wordpress
Seo " /></div>
            <h3>Wordpress



            </h3>
            <h3>Seo </h3>
            <p>Stand out in a competitive marketplace by improving your SERP visibility and rankings</p>

          </div>
          <div className="card_item">
            <div className="card_image"><img src={mobileseo} alt="Mobile 
Seo " /></div>
            <h3>Mobile




            </h3>
            <h3>Seo </h3>
            <p>Give your brand the voice it deserves with compelling content and captivate audiences</p>

          </div>
        </div>
      </div>
      {/*  */}
      <div className="contact_us">
        <button>Contact Us</button>
      </div>
      <div className="audit_reports_container">
        <h3>Get the Free SEO Audit Report!</h3>
        <div className="form">
          <form className='audit_form'>
            <input type="text" id="name" name="name" className='form_input_box_audit' placeholder='name' required />
            <input type="email" id="email" name="email" className='form_input_box_audit' placeholder='email@janesfakedomain.net' required />

            <input type="tel" id="phone" name="phone" pattern="\d{10}" className='form_input_box_audit' placeholder="number" required />
            <input type="email" id="email" name="email" className='form_input_box_audit' placeholder='email@janesfakedomain.net' required />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      {/* our result */}
      <div className="our_result">
        <h4>Our Results</h4>
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
        <SwiperSlide> <img src={growth1} /></SwiperSlide>
        <SwiperSlide> <img src={growth2} /></SwiperSlide>
        <SwiperSlide> <img src={growth3} /></SwiperSlide>

      </Swiper>
      {/* our case study */}

      {/*  */}
      <div className="our_case_study">
        <h1>Our Case Studies</h1>
        <div className="our_case_study_container">
          <div className="our_case_study_container_second">


            <div className="our_case_study_item">
              <div className="logo">
                <img src={perprint} alt="perprint" className='study_img' />
              </div>
              <div className="result_container">
                <p className='result'>Result</p>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 85%</p>
                  <p className='Ranked_keyword'>Ranked Keywords (Top 10)
                  </p>
                  <p className='growth_para'>Growth in Keywords ranking In
                  </p>
                  <p className='growth_para'>
                    The Top 10 Search Results</p>
                </div>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 51%</p>
                  <p className='Ranked_keyword'>Traffic Growth
                  </p>
                  <p className='growth_para'>Increase in OrganicTraffic By 51%</p>

                </div>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 216%</p>
                  <p className='Ranked_keyword'>Appointment Booking

                  </p>
                  <p className='growth_para'>Increased The No. Of Appointment
                    booking by 217%</p>


                </div>
              </div>
            </div>
          </div>
          <div className="our_case_study_container_second">


            <div className="our_case_study_item">
              <div className="logo">
                <img src={calcurb} alt="perprint" className='study_img' />
              </div>
              <div className="result_container">
                <p className='result'>Result</p>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 85%</p>
                  <p className='Ranked_keyword'>Traffic

                  </p>
                  <p className='growth_para'>Improved organic traffic for the schools website
                  </p>
                  {/* <p className='growth_para'>
                    website</p> */}
                </div>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 51%</p>
                  <p className='Ranked_keyword'>Leads
                  </p>
                  <p className='growth_para'>Bolstered leads from organic channels</p>

                </div>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 216%</p>
                  <p className='Ranked_keyword'>Blog Traffic

                  </p>
                  <p className='growth_para'>Increased blog traffic using an
                    event-specific keywords strategy
                  </p>


                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="our_case_study_container_second">


            <div className="our_case_study_item">
              <div className="logo">
                <img src={wmo} alt="perprint" className='study_img' />
              </div>
              <div className="result_container">
                <p className='result'>Result</p>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 85%</p>
                  <p className='Ranked_keyword'>Traffic

                  </p>
                  <p className='growth_para'>Improved Organic Traffic by 26% From Tier 2 and Tier 3 Cities


                  </p>

                </div>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 2X</p>
                  <p className='Ranked_keyword'>2X Growth
                  </p>
                  <p className='growth_para'>2X Growth in Overall Website Traffic

                  </p>

                </div>
                <div className="result_container_item">
                  <p className='graph_percentage'> <span><img src={increase} alt="increase" /></span> 216%</p>
                  <p className='Ranked_keyword'>Blog Traffic

                  </p>
                  <p className='growth_para'>Increased The No. Of Appointment booking by 217%

                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='Comprehensive '>
        <h4>Our Comprehensive SEO Strategy</h4>
        <div className="Comprehensive_main_container">
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo1} alt="SEO
Basic" />
            </div>
            <p>SEO</p>
            <p>Basic</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo2} alt="Keyboard 
Research" />
            </div>
            <p>Keyboard
            </p>
            <p>Research</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo3} alt="Content
Writing" />
            </div>
            <p>Content

            </p>
            <p>Writing</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo4} alt="Link
Building" />
            </div>
            <p>Link


            </p>
            <p>Building</p>
          </div>

        </div>
        <div className="Comprehensive_main_container " id='Comprehensive_main_container2' >

          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo5} alt="Audit &
Analysis" />
            </div>
            <p>Audit &



            </p>
            <p>Analysis</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo6} alt="Audit &
Analysis" />
            </div>
            <p>On Page




            </p>
            <p>SEO</p>
          </div>
          <div className="Comprehensive_container">
            <div className="Comprehensive_item">
              <img src={seo7} alt="Technical 
SEO" />
            </div>
            <p>Technical





            </p>
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
              <form className='form_container'>
                <div className="form_container_main">


                  <div className="left_proposal_section">
                    <img src={leader} alt="leader" />
                  </div>
                  <div className="form_inputs">

                    <label for="name" className='form_label'>Name:</label>
                    <input type="text" id="name" name="name" className='form_input_box' placeholder='name' required />

                    <label for="phone" className='form_label'>Phone No.</label>
                    <input type="tel" id="phone" name="phone" pattern="\d{10}" className='form_input_box' placeholder="number" required />
                    <label for="message" className='form_label'>Your message</label>

                  
            <textarea id="textarea" class="fixed-size-textarea textarea_container"    placeholder="Enter your question or message"></textarea>

                  </div>
                </div>
                <div className="button_container">
                  <button className='form_button' id='proposal_button' type='submit' > Get a Freee Marketing Plan</button>

                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
      {/* footer */}
      <div className="footer_container">
        <div className="footer_left_section">
          <p className='footer_about'>About</p>
          <p className='footer_para'>Having clients in over
            seven sectors and
            across five
            continents,
            Acedigitalsolution is the
            fastest growing
            performance
            marketing agency.</p>
        </div>
        <div className="footer_right_section">
          <div className="footer_right_section_item">
            <img src={lg} alt="logo" className='footer_logo' />
          </div>
          <div className="footer_right_section_item1">

            <img src={google} alt="goereeogle" />

            <img src={facebook} alt="facebook" />

          </div>
          <div className="footer_right_section_item_social_media">

            <li><a href="">
              <img src={facebookicon} alt="facebookicon" />
            </a></li>

            <li><a href="">
              <img src={instagram} alt="instagram" />
            </a></li>
            <li><a href="">
              <img src={youtube} alt="youtube" />
            </a></li>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
