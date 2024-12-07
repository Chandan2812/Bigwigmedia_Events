import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Universities from "../components/Universities";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";



function Landing() {
    return (
        <div id="home">
            <Nav/>
            <Hero/>
            <Universities/>
            <Features/>
            <AboutUs/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default Landing;