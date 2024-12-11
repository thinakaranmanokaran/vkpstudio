import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import useSmoothScroll from "./hooks/useSmoothScroll";

import BG from './assets/images/grid-me.png';
import Infinity from './assets/images/infinity.png';

import Footer from './components/Footer';
import Loader from './components/Loader';

const App = () => {
	useSmoothScroll();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000); // Simulate loading delay
		return () => clearTimeout(timer);
	}, []);

	return (
		<div >
			{isLoading ? (
				<Loader />
			) : (
				<div className='w-screen h-full bg-dark'>
					<img src={BG} className='w-screen bg-repeat-y h-screen md:w-screen opacity-30 md:h-full fixed object-cover' alt="" />
					<img src={Infinity} className="fixed top-1/2 left-1/2 -translate-y-1/2 blur-md -translate-x-1/2" alt="" />
					<Home />
				</div>
			)}
		</div>
	);
};

export default App;
