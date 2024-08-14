import Footer from "./Footer"
import Navbar from "./Navbar"
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Thankyou = () => {
    return (
        <>
            <FloatingWhatsApp
                accountName="ACE DIGITAL SOLUTION"
                src={null}
                statusMessage=""
                chatMessage="How can we help you ACED up? :)"
                phoneNumber="7070454522"
                avatar="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg"
            />
            {/* <Navbar/> */}
            <Navbar />
            <div className="Thankyou_container">
                <h1>Thankyou..!</h1>
                <p>You details has been successfully</p>
                <p>Submitted. Thanks!</p>
            </div>
            <Footer />
        </>
    )
}

export default Thankyou