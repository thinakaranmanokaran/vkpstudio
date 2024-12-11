import { useState, useEffect } from "react";

import LandingPage from '../components/home/LandingPage'
import PhotoStyleCorners from '../components/PhotoStyleCorners'
import ParticleBackground from '../components/ParticleBackground'
import Testiimonial from './Testimonial'
import Navigation from '../components/home/Navigation'
import Gallery from './Gallery'
import About from './About'
import Contact from './Contact'

import { motion } from "framer-motion";
import Footer from '../components/Footer'

const Home = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className=" p-4">
            <Navigation />
            <LandingPage id="home" />
            <Testiimonial />
            <motion.div
                className="relative z-30 overflow-hidden left-1/2 -translate-x-1/2"
                initial={{
                    width: "240px",
                    height: "80px",
                    borderRadius: "30px",
                }}
                whileInView={{
                    width: "100vw",
                    height: screenWidth <= 325  ? "300vh"  : screenWidth <= 380  ? "340vh"  : screenWidth <= 430  ? "245vh"  : screenWidth <= 600 ? "100vh" : screenWidth > 1000 ? "120vh" : '' , 
                    borderRadius: "0%",
                    // overflow: "visible",
                }}
                viewport={{
                    once: true,
                    margin: "-10% 0px -20% 0px",
                }}
                transition={{ duration: 0.5 }}
            >
                <Gallery id="gallery" />
            </motion.div>
            <About id="about" />
            <Contact id="contact" />
            <Footer />
            <PhotoStyleCorners />
        </div>
    );
};

export default Home;
