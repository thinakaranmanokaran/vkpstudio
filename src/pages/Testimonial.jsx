import React, { useState, useEffect, useRef } from 'react'
import { Anu, Bala } from '../assets/images'

import { motion, useAnimation, useInView } from "framer-motion";

const Testimonial = () => {

	const Feedbacks = () => {
		const FeedData = [
			{
				name: "Raja V",
				feed: "Varun Krishna did an amazing job with our wedding photography...",
				img: ``,
				link: "https://maps.app.goo.gl/YetgvepHvPtf7sPCA",
				whileinview: { y: -100, x: 100, rotate: 10 },
			},
			{
				name: "Ezhil Kumaran",
				feed: "They done a very good job",
				img: ``,
				whileinview: { y: 0, x: 0, rotate: 5 },
				link: "https://maps.app.goo.gl/4pWFgLWAnCzqjR167",
			},
			{
				name: "Kothandaraman Suresh",
				feed: "Awesome photography!",
				img: ``,
				whileinview: { y: -40, x: 380, rotate: 17 },
				link: "https://maps.app.goo.gl/pTp8ebfUSqT5eWnC7"
			},
			{
				name: "Bala B",
				feed: " His Photography is excellent.",
				img: `${Bala}`,
				whileinview: { y: 40, x: 250, rotate: 13 },
				link: "https://maps.app.goo.gl/ze3QXnSFxvXcMpg98"
			},
			{
				name: "Ram Anu",
				feed: "We are completely satisfied with your work and happy about the output 😁",
				img: ``,
				whileinview: { y: -100, x: -250, rotate: -10 },
				link: "https://maps.app.goo.gl/LKpYriN4dpgbUtJa9"
			},
			{
				name: "Gayathri Chandhran",
				feed: " outstanding work with friendly attitude...I recommend my frnds to visit here",
				img: `${Anu}`,
				whileinview: { y: 10, x: -300, rotate: -12 },
				link: "https://maps.app.goo.gl/uG1MfKYR4KBtYbNQ9"
			}
		];

		return (
			<div className="flex justify-center ">
				{FeedData.map((Data, index) => (
					<motion.a key={index} href={Data.link} initial={{ y: 0, x: 0, rotate: 0 }} whileInView={Data.whileinview} transition={{ duration: 0.3 }} viewport={{ once: false, margin: "-10% 0px -40% 0px" }} className="bg-white p-2 max-w-80 min-w-40 w-fit scale-100 hover:scale-110 shadow-2xl cursor-pointer z-20 rounded-2xl flex absolute  shadow-black " target="_blank" rel="noopener noreferrer" >
						<div className="flex space-x-2 items-center">
							<div>
								{Data.img ? (
									<img
										className="w-12 shadow-lg max-w-28 h-full bg-white rounded-full"
										src={Data.img}
										alt={Data.name}
									/>
								) : (
									<div className="bg-purple rounded-full flex justify-center items-center text-2xl font-name w-12 h-12">
										{Data.name.charAt(0).toUpperCase()}
									</div>
								)}
							</div>
							<div>
								<h3 className="font-name text-sm ">{Data.name}</h3>
								<h3 className="font-subtitle text-sm ">{Data.feed}</h3>
							</div>
						</div>
					</motion.a>
				))}
			</div>
		);
	};

	return (
		<div className='h-[80vh] mt-20 hidden  md:block ' >
			<div className='sticky top-10 z-20' >
				<h1 className='text-white text-6xl font-seriff text-center  ' >Testimonial</h1>
			</div>
			<div className=' mt-52 ' >
				<Feedbacks />
			</div>
		</div>
	)
}

export default Testimonial