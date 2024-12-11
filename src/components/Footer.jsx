import { useState, useEffect } from "react";
import Logo from './../assets/images/VKPLogo.jpg'
import BrandName from '../utilities/BrandName'
import Domain from '../utilities/Domain'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Bala, hor1, hor2, hor3, hor4, hor5, square1 } from '../assets/images';

import { PiStarFourFill } from "react-icons/pi";

import './../App.css'



const BGGrid = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	// Track mouse movement
	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: e.clientX / window.innerWidth, // Normalize to a range of 0 - 1
				y: e.clientY / window.innerHeight,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const GridData = [
		{ src: `${square1}` },
		{ src: `${hor1}` },
		{ src: `${hor2}` },
		{ src: `${hor3}` },
		{ src: `${hor4}` },
		{ src: `${hor5}` },
		{ src: `${hor1}` },
		{ src: `${hor2}` },
	];

	return (
		<div
			className="absolute z-0 -top-16 -right-96 overflow-hidden"
		>
			<div className="grid gap-4 -rotate-45"
				style={{
					transform: `translate(${-mousePosition.x * 300}px, ${-mousePosition.y * 100
						}px)`,
					transition: "transform 1s ease-out",
					rotate: '-45deg',
				}}
			>
				{GridData.map((item, rowIndex) => (
					<div
						key={rowIndex}
						className={`grid grid-cols-8 w-[400vw] md:w-[200vw] gap-4 ${rowIndex % 2 === 0
							? "animate-move-right"
							: "animate-move-left"
							}`}
					>
						{GridData.map((img, colIndex) => (
							<img
								src={img.src}
								key={`${rowIndex}-${colIndex}`}
								alt=""
								className="w-full  h-40 md:h-60 object-cover rounded-2xl opacity-15"
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};






const Services = [
	{
		title: "Navigate",
		lists: [
			{ name: "Testimonials ", },
			{ name: "About", },
			{ name: "Gallery ", },
			{ name: "Contact", },
			// { name: "", },
		],
	},
	{
		title: "Services",
		lists: [
			{ name: "Photography ", },
			{ name: "Videography", },
			{ name: "Drone ", },
			{ name: "Aerial Shots", },
			{ name: "Event Shoots", },
		],
	},
]

const CircleText = ({ text = "", radius = 100 }) => {
	const letters = text ? text.split("") : [];

	return (
		<div className="absolute scale-150  md:scale-100 mt-60 hidden lg:block  left-3/4 w-full h-full  " >
			<div className="  " >
				<svg viewBox="0 0 2500 1000" className="mx-auto ">
					<path
						id="circlePath"
						d="M 350, 250 m -200, -150 a 250,200 0 1,1 200,0 a 200,200 0 1,1 -10,0"
						fill="transparent"
					/>
					<text fill="white" className="font-bold text-xl  font-seclogo  ">
						<textPath href="#circlePath" startOffset="50%" style={{ fontSize: 77 }} className=" glow-text " >
							Quality * Perfect *  Frame *
						</textPath>
					</text>
				</svg>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<div className='h-screen bg-black w-screen  relative z-40 -left-4 -bottom-4 overflow-hidden ' >
			<div className='p-6 relative z-40 h-full ' >
				<div>
					<div>
						<h1 className=' text-3xl md:text-[80px] lg:text-[140px] tracking-tighter left-2 md:leading-[75px] lg:leading-[130px] absolute bottom-2  w-1/2 font-seclogo text-white shadow-xl ' > {BrandName} {Domain}  </h1>
						<span className="text-lg md:text-3xl tracking-normal font-name text-white absolute bottom-2 right-5 md:right-16 lg:right-52  " >	&copy; 2024</span>
					</div>
					<div className="flex flex-col md:flex-row w-full justify-between" >
						<div>
							<div className='font-seclogo text-white text-base md:text-xl  ' >Follow US on</div>
							<div className='flex items-center mt-0.5 md:mt-2 space-x-1 '  >
								<a href='https://www.instagram.com/varunkrishnanphotography/' target="_blank" className='cursor-pointer text-white flex relative group items-center  hover:px-2 py-1 hover:bg-white hover:text-black  transition-all duration-300 rounded-full hover:pr-24 ' ><FaInstagram className='size-9  ' /><span className='font-name opacity-0 group-hover:opacity-100 group-hover:left-12 left-0 absolute transition-transform  duration-500' >Instagram</span></a>
								<a href='https://www.facebook.com/people/Varun-Krishnan-Photography/100076412573595/' target="_blank" className='cursor-pointer text-white flex relative group items-center  hover:px-2 py-1 hover:bg-white hover:text-black  transition-all duration-300 rounded-full hover:pr-24 ' ><FaFacebook className='size-8   ' /><span className='font-name opacity-0 group-hover:opacity-100 group-hover:left-12 left-0 absolute transition-transform  duration-500' >Facebook</span></a>
							</div>
						</div>
						<div className=' ' >
							<div className='flex  space-x-12 mt-2 items-start justify-between' >
								{
									Services.map((Data) => (
										<div className='text-white  font-subtitle ' >
											<h1 className='text-lg md:text-xl  md:mb-2  font-seclogo ' >{Data.title}</h1>
											{Data.lists.map((subData, index) => (<div><h1 className='text-base md:text-xl border-b-2 opacity-80 hover:text-purple font-thin w-fit border-transparent hover:border-white transition-all duration-300 ' >{subData.name}</h1></div>))}
										</div>
									))
								}
							</div>
						</div>
					</div>
					{/* <div  >
						<img src={Logo}  className="w-40 h-40 hidden lg:block absolute rounded-full right-20 bottom-48 translate-x-2  " alt="" srcset=""  />
					</div>
					<CircleText /> */}
				</div>
			</div>
			<BGGrid />
		</div>
	)
}

export default Footer