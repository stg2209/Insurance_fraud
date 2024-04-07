import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeAbout from "../components/Homeabout"
import Footer from "../components/Footer";
import AssetsImg from "../assets/homepage_bg.png"


function Home(){
    return(
        <>
        <Navbar/>
        <br></br><br></br><br></br><br></br>
        <Hero
        cName="hero"
        heroImg={AssetsImg}
        title=""
        text=""
        buttonText="Plan"
        url="/"
        btnClass="show"
        />
        <HomeAbout/>
        <Footer/>
        </>
    );
}

export default Home;