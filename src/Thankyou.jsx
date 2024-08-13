import Footer from "./Footer"
import Navbar from "./Navbar"

const Thankyou = () => {
    return (
        <>
        {/* <Navbar/> */}
        <Navbar/>
        <div className="Thankyou_container">
            <h1>Thankyou..!</h1>
            <p>You details has been successfully</p>
            <p>Submitted. Thanks!</p>
        </div>
        <Footer/>
        </>
    )
}

export default Thankyou