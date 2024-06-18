import './App.css'
import logo from './assets/photo/logo.svg'
import main from './assets/photo/mail.svg'
import phone from './assets/photo/phone.png'
import seo from './assets/photo/seo.svg'
import ecommerce from './assets/photo/ecommerce.svg'
import content from './assets/photo/contentwriter.svg';
import perprint from './assets/photo/perprint.svg';
import increase from './assets/photo/Increase.svg';
import calcurb from './assets/photo/calcurb.svg';
import wmo from './assets/photo/wmo.svg'
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

            <input id="message" name="message" size={2} className='form_input_box' placeholder="Enter your question or message" required />

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
      {/* our case study */}
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
      <div className='Comprehensive '></div>
    </div>
  )
}

export default App
