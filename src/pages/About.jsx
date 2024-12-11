import React, { useRef, useState } from "react";
import { about1, about2, about3 } from "../assets/images"; // Adjust your import path
import { FaPause, FaPlay } from "react-icons/fa6";

import { motion } from "framer-motion";
import Parallax from "../components/home/ParallaxText";

const About = ({ id }) => {
	const Quote = ({ className }) => {
		return (
			<div>
				<svg
					height="128"
					viewBox="0 0 48 48"
					width="128"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12 34h6l4-8v-12h-12v12h6zm16 0h6l4-8v-12h-12v12h6z" fill="#CB9DF0" />
					<path d="M0 0h48v48h-48z" fill="none" className={className} />
				</svg>
			</div>
		);
	};

	const text = `Varun Krishnan Photography - a new landmark for our Thanjavur city.
    We specialize in wedding and events photography, but if you need us to explore other areas, we’ll be thrilled to do it.
    Call us anytime or send us an email at varunkrishnanphotography@gmail.com if you have any questions or would like to make an appointment.
    Even if you just want to know a little bit more about us and what we do, we’d love to hear from you.`;

	// Split the text into characters for animation
	const textArray = text.split("");

	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	const togglePlayback = () => {
		const video = videoRef.current;
		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="relative z-30  "  id={id} >
			<div>
				<div>
					<h1 className="text-white text-6xl font-seriff text-center md:mb-6">About us</h1>
				</div>
				<div>
					<div className="flex flex-col space-y-2 md:flex-row md:p-4 -ml-4 md:space-x-3">
						<motion.div className="flex w-screen items-center md:w-1/2 flex-col md:flex-row" initial={{ scale: 0.5 }} transition={{ duration: 0.2 }} whileInView={{ scale: 1 }} viewport={{once: false}} >
							<img
								src={about1}
								className="md:w-1/2 w-4/5   object-cover p-2 pr-0 rounded-3xl h-full"
								alt=""
							/>
							<div className="md:w-1/2 w-5/6 ml-1 p-2 -mt-1 md:mt-0 space-y-2">
								<div className="relative group">
									<div
										className={`text-white text-4xl lg:text-6xl ${isPlaying ? "hidden" : "flex"} group-hover:flex items-center justify-center transition-all duration-300 z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer`}
										onClick={togglePlayback}
									>
										{isPlaying ? <FaPause /> : <FaPlay />}
									</div>
									<video
										src={about2}
										className={`w-full object-cover h-[140px] ${isPlaying ? "brightness-100" : "brightness-75"}  cursor-pointer group-hover:brightness-75 transition-all duration-300 h-44 lg:h-44 rounded-3xl`}
										ref={videoRef}
										autoPlay
										loop
										muted
										onClick={togglePlayback}
									></video>
								</div>
								<img
									src={about3}
									alt=""
									className="w-full rounded-3xl"
								/>
							</div>
						</motion.div>

						<div className=" md:w-1/2 p-4 relative ml-4   ">
							<motion.div className="absolute left-36  md:left-56 -top-4 xsm:top-2 md:-top-20 lg:-top-2 lg:left-[35vw] " initial={{ rotate: -45 }} transition={{ duration: 0.3 }} whileInView={{ rotate: 0 }} viewport={{ once: false }} >
								<Quote className={`  `} />
							</motion.div>
							<div className="relative h-full flex items-center justify-center mt-56 md:mt-0">
								<motion.div
									className="text-white overflow-x-hidden  font-paragrabh lg:text-2xl absolute top-1/2 -translate-y-1/2 h-fit"
									initial="hidden"
									whileInView="visible"
									variants={{
										hidden: { opacity: 1 },
										visible: {
											transition: {
												staggerChildren: 0.01, // Delay between each character animation
											},
										},
									}}
								>
									{textArray.map((char, index) => (
										<motion.span
											key={index}
											variants={{
												hidden: { opacity: 0 },
												visible: { opacity: 1 },
											}}
											className={char === " " ? "inline-block w-1" : ""}
										>
											{char}
										</motion.span>
									))}
								</motion.div>
							</div>
							<motion.div initial={{ rotate: 135 }} transition={{ duration: 0.3 }} whileInView={{ rotate: 180 }} viewport={{ once: false }} className="absolute left-2 md:left-20 block md:hidden lg:block xsm:-bottom-52 -bottom-60 lg:-bottom-2 lg:left-0 ">
								<Quote className={``} />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<Parallax />
		</div>
	);
};

export default About;
  