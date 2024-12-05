import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Universities from "../components/Universities";


function Landing() {
    return (
        <div>
            <Nav/>
            <Hero/>
            <Universities/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default Landing;