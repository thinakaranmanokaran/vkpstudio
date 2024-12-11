import React, { useState } from "react";
import Logo from "./../../assets/images/VKPLogo.avif";
import { motion, AnimatePresence } from "framer-motion";

import BrandName from "./../../utilities/BrandName";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Women, Couple1, RedCouple, hor1, hor2, hor3, hor4, hor5 } from "./../../assets/images/index";

import "./../../App.css";
import Domain from "../../utilities/Domain";
import Navigation from "./Navigation";

const LandingPage = ({ id }) => {

    const WelcomeNote = () => {
        const Note = {
            data: "Life’s most beautiful stories deserve to be captured with care and creativity. Whether it’s the heartfelt vows of a wedding, the joyful chaos of a birthday, or the unforgettable energy of your special events, we are here to turn your moments into cinematic memories. Every click of our camera is a promise to preserve the magic you’ll cherish forever.",
        };
 
        const textVariants = {
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 25
                }
            },
        };

        const Gallery = [
            {
                img: `${Couple1}`,
                title: "Marriage",
            },
            {
                img: `${RedCouple}`,
                // title: "Marriage"
            },
            {
                img: `${Women}`,
                // title: "Marriage"
            },
            {
                img: `${hor1}`,
                // title: "Marriage"
            },
            {
                img: `${hor2}`,
                // title: "Marriage"
            },
            {
                img: `${hor3}`,
                // title: "Marriage"
            },
            {
                img: `${hor4}`,
                // title: "Marriage"
            },
            {
                img: `${hor5}`,
                // title: "Marriage"
            },
        ];

        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrev = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? Gallery.length - 1 : prevIndex - 1
            );
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === Gallery.length - 1 ? 0 : prevIndex + 1
            );
        };

        return (
            <div className="  md:flex  justify-between py-4 items-start  md:p-16 pb-0 lg:mt-0 ">
                <div className=" w-full   text-center md:text-start md:-ml-4 md:mr-6  md:w-2/3 lg:w-1/3 text-white">
                    <motion.h1
                        className=" text-sm sm:text-lg  font-paragrabh"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {Note.data}
                    </motion.h1>
                </div>
                <motion.div className="flex ml-6  items-end relative mt-4 md:mt-0 " initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}  exit={{ opacity: 0, y: -50 }}   transition={{ duration: 0.5, ease: "easeOut" }}>
                    <div className=" -left-10 z-20 absolute flex space-x-2 bg-white bg-opacity-5 px-2 py-2 rounded-full h-fit  ">
                        <HiOutlineArrowLeft
                            onClick={handlePrev}
                            className="bg-white bg-opacity-15 backdrop-blur-lg p-2 size-6 w-10 h-10 rounded-full cursor-pointer  hover:bg-opacity-30 active:bg-purple transition-all duration-300 text-white    "
                        />
                        <HiOutlineArrowRight
                            onClick={handleNext}
                            className="bg-white bg-opacity-15 backdrop-blur-lg p-2 size-6 w-10 h-10 rounded-full cursor-pointer  hover:bg-opacity-30 active:bg-purple transition-all duration-300 text-white    "
                        />
                    </div>
                    <div className="w-[350px] overflow-hidden">
                        <div className="flex space-x-4 "    >
                            <div className="bg-light inverted-radius h-60 p-3  rounded-3xl bg-opacity-10 backdrop-blur-lg">
                                <img
                                    className="md:min-w-80   xs:min-w-60 xm:min-w-72 xsm:min-w-80  inverted-radiusss   object-cover object-top h-full select-none rounded-2xl"
                                    src={Gallery[currentIndex].img}
                                    alt={Gallery[currentIndex].title}
                                    srcset="" 
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    };

    const containerVariants = {
        hidden: {}, // Container itself does not animate
        visible: {
            transition: {
                staggerChildren: 0.05, // Stagger letters like train cars
            },
        },
    };

    // Variants for individual letters
    const letterVariants = {
        hidden: { opacity: 0, y: 50 }, // Each letter starts off-screen (bottom)
        visible: {
            opacity: 1,
            y: 0, // Move into position
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div id={id} >
            <div className="relative z-20   ">
                
                <div className="flex items-center flex-col justify-center  mt-12 md:mt-20  ">
                    {/* <img src={Logo} alt="" srcset=" " className='w-40' /> */}
                    <motion.div
                        className="text-white text-xl md:text-4xl lg:text-6xl text-center font-logo flex tracking-[-1px] space-x-0.5 "
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {BrandName.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                variants={letterVariants}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        className="text-white text-xl md:text-4xl lg:text-6xl text-center font-logo flex space-x-1"
                        initial={{ opacity: 0, y: 50 }} // Start hidden and below view
                        animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
                        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                    >
                        {Domain}
                    </motion.div>
                </div>
                <WelcomeNote  />
            </div>
        </div>
    );
};

export default LandingPage;
