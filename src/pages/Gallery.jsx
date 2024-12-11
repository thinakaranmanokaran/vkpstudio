import React from 'react'
import { Bala, Couple1, hor1, hor2, hor5, por1, square1, square2 } from '../assets/images'

const Gallery = ({ id }) => {

	const Grid = () => {

		const Data = [
			{
				title: "",
				img: `${square2}`,
				cpan: "col-span-1",
				rpan: "row-span-1",
			},
			{
				title: "",
				img: `${hor5}`,
				cpan: "col-span-1",
				rpan: "row-span-1",
			},
			{
				title: "",
				img: `${por1}`,
				cpan: "col-span-1",
				rpan: "row-span-2",
			},
			{
				title: "",
				img: `${Couple1}`,
				cpan: "col-span-1",
				rpan: "row-span-2",
			},
			{
				title: "",
				img: `${hor1}`,
				cpan: "col-span-1",
				rpan: "row-span-1",
			},
			{},
			// {},
			{
				title: "",
				img: `${hor2}`,
				cpan: "col-span-1",
				rpan: "row-span-1",
			},
		]

		return (
			<div className=' flex justify-center ' >
				<div className=' space-y-3 w-5/6 md:w-[80vw]  ' >
					<div className='flex flex-col md:flex-row  ' >
						<div className='p-2 ' >
							<img src={hor5} className=' w-full md:w-[25vw] h-fit rounded-2xl ' alt="" srcSet="" />
							<img src={Couple1} className=' w-full md:w-[25vw] h-fit rounded-2xl mt-4' alt="" srcSet="" />
						</div>
						<div className='p-2 ' >
							<img src={square2} className=' w-full md:w-[25vw] h-80 md:h-44  lg:h-80 object-cover rounded-2xl ' alt="" srcSet="" />
							<img src={hor1} className=' w-full md:w-[25vw] h-fit rounded-2xl mt-4 ' alt="" srcSet="" />
						</div>
						<div className='p-2 ' >
							<img src={por1} className=' w-full md:w-[25vw] h-fit rounded-2xl ' alt="" srcSet="" />
							<img src={hor2} className=' w-full md:w-[25vw] h-fit rounded-2xl mt-4' alt="" srcSet="" />
						</div>
					</div>

				</div>
			</div>
		)
	}

	return (
		<div className='h-full relative ' id={id} >
			<div className='sticky z-30 top-10' >
				<div className='text-white text-6xl font-seriff text-center mb-12' >Gallery</div>
			</div>
			<div>
				<Grid />
			</div>
		</div>
	)
}

export default Gallery