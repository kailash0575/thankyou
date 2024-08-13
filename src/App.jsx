import "./App.css";

import Footer from './Footer'

import React from 'react';
import Thankyou from './Thankyou'
import { FloatingWhatsApp } from "react-floating-whatsapp";
//
import Navbar from './Navbar'
function App() {

  return (
    <>
      {/*  */}

      {/*  */}
      <div className="main_container">
        
        <FloatingWhatsApp
          accountName="ACE DIGITAL SOLUTION"
          src={null}
          statusMessage=""
          chatMessage="How can we help you ACED up? :)"
          phoneNumber="7070454522"
          avatar="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg"
        />
            <Navbar/>
       <Thankyou/>
       
         <Footer/>
      </div>
    </>
  );
}

export default App;
