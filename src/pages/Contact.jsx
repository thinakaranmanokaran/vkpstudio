import React, { useState } from 'react'

import { GoArrowRight } from "react-icons/go";

import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
    const position = [10.768053606575748, 79.11072708713971];

    // Custom marker icon
    const customIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your icon URL
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });
    return (
        <MapContainer
            center={position}
            zoom={15}
            style={{ height: "350px", width: "100%", borderRadius: "16px", }}
        >
            {/* Tile Layer for a modern look */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marker with a popup */}
            <Marker position={position} icon={customIcon}>
                <Popup>
                    <strong>Office Location</strong>
                    <br />
                    No 5, Swarna Commercial Complex, 1st Floor <br />
                    Natarajapuram North, Medical College Rd, <br />
                    Thanjavur, Tamil Nadu 613004.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

const Contact = ({ id }) => {
    const [name, setName] = useState("");
    const [mail, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className='relative z-30' id={id} >
            <div className='sticky z-30 mt-12' >
                <h1 className="text-white text-6xl font-seriff text-center mb-6">Contact</h1>
            </div>
            <div className='' >
                <div className='w-full h-fit  lg:px-40 flex flex-col md:flex-row justify-center md:space-x-5 pb-6 ' >
                    <div className='bg-white relative z-30  w-full md:w-2/5 h-full p-6 py-10 rounded-3xl bg-opacity-5 backdrop-blur-3xl' >
                        {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, harum. Non obcaecati delectus sunt veniam quasi ut, neque, omnis dolor eos soluta dolorum magnam veritatis minima, doloremque porro! Dicta, quod sunt. Deserunt dolore quia amet, repudiandae aperiam quasi, eveniet fuga maiores non eaque, voluptates facere et itaque dignissimos ex corrupti!</div> */}
                        <div className='flex flex-col items-center w-full space-y-6 font-subtitle  ' >
                            <div className='text-3xl font-name text-white ' >Get in Touch</div>
                            <div className='w-full relative ' >
                                <input className={`bg-white bg-opacity-10 focus:outline-none focus:bg-opacity-100 transition-all peer duration-300 hover:bg-opacity-20 rounded-lg h-10 max-h-12 w-full p-2 ${name ? "bg-opacity-100 hover:bg-opacity-100 " : ""} `} onChange={(e) => setName(e.target.value)} type="text" name="name" id="nameinput" />
                                <label htmlFor="name" className={`absolute z-40 ml-1 text-white font-subtitle text-lg  left-0  peer-focus:bg-purple peer-focus:left-2 peer-focus:text-black rounded-xl shadow-lg peer-focus:text-sm h-fit px-2 py-1 transition-all duration-300 bottom-0.5 peer-focus:-top-4  ${name ? "-top-4 text-sm bg-purple text-black left-2 " : "bottom-0.5 "} `} >Name</label>
                            </div>
                            <div className='w-full relative ' >
                                <input className={`bg-white bg-opacity-10 focus:outline-none focus:bg-opacity-100 transition-all peer duration-300 hover:bg-opacity-20 rounded-lg h-10 max-h-12 w-full p-2 ${mail ? "bg-opacity-100 hover:bg-opacity-100" : ""} `} onChange={(e) => setEmail(e.target.value)} type="email" name="name" id="nameinput" />
                                <label htmlFor="name" className={`absolute z-40 ml-1 text-white font-subtitle text-lg  left-0  peer-focus:bg-purple peer-focus:left-2 peer-focus:text-black rounded-xl shadow-lg peer-focus:text-sm h-fit px-2 py-1 transition-all duration-300 bottom-0.5 peer-focus:-top-4  ${mail ? "-top-4 text-sm bg-purple text-black left-2 " : "bottom-0.5 "} `} >Email</label>
                            </div>
                            <div className='w-full relative ' >
                                <textarea className={`bg-white bg-opacity-10 focus:outline-none focus:bg-opacity-100 transition-all peer duration-300 hover:bg-opacity-20 rounded-lg h-40 w-full p-2 ${message ? "bg-opacity-100 hover:bg-opacity-100" : ""} `} name="" onChange={(e) => setMessage(e.target.value)} id="" ></textarea>
                                <label htmlFor="name" className={`absolute z-40 ml-1 text-white font-subtitle text-lg  left-0  peer-focus:bg-purple peer-focus:left-2 peer-focus:text-black rounded-xl  peer-focus:text-sm h-fit px-2 py-1 transition-all duration-300 top-1 peer-focus:-top-5  ${message ? "-top-5 text-sm bg-purple text-black left-2 shadow-lg " : "top-1 "} `} >Message</label>
                            </div>
                            <div className='flex justify-end w-full  ' >
                                <button className='bg-purple w-32 py-2 rounded-xl flex justify-center transition-all duration-300 scale-100 focus:outline-none active:scale-90 items-center gap-x-1 hover:gap-x-4 ' >Send <GoArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full mt-4 md:mt-0 md:w-3/5 h-full' >
                        <div className='bg-white overflow-hidden relative z-40 bg-opacity-5 backdrop-blur-2xl p-4 rounded-3xl w-full h-full '  >
                            <div className=' h-full rounded-2xl ' >
                                <MyMap />
                            </div>
                        </div>
                        <div className=" w-full flex justify-center " >
                        <div className='text-white lg:bg-white lg:bg-opacity-5  p-2 lg:p-4 rounded-xl lg:rounded-3xl flex flex-col lg:flex-row  space-y-2 lg:space-y-0 items-center  lg:space-x-3 mt-4 w-fit lg:backdrop-blur-3xl' >
                            <div className=' bg-white bg-opacity-5 backdrop-blur-3xl p-2 md:p-4 rounded-xl md:rounded-3xl group cursor-pointer w-fit ' >
                                <div className='flex  items-center text-sm lg:text-lg font-subtitle space-x-1 lg:space-x-2 ' ><FaPhoneAlt className='bg-white  p-1 lg:p-2 size-6 lg:size-9 rounded-full fill-black group-hover:bg-purple transition-all duration-300' /> <a href='tel:+917449225577' className='group-hover:text-purple transition-all duration-300 ' target='_blank'  >7449225577</a></div>
                            </div>
                            <div className=' bg-white bg-opacity-5 backdrop-blur-3xl p-2 md:p-4 rounded-xl md:rounded-3xl group cursor-pointer w-fit ' >
                                <div className='flex  items-center text-sm lg:text-lg font-subtitle space-x-1 lg:space-x-2 ' ><MdAlternateEmail className='bg-white  p-1 lg:p-2 size-6 lg:size-9 rounded-full fill-black group-hover:bg-purple transition-all duration-300' /> <a href='mailto:varunkrishnanphotography@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.' target='_blank' className='group-hover:text-purple transition-all duration-300 '  >varunkrishnanphotography@gmail.com</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact