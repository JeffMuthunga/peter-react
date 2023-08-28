import React from 'react'
import farm from "../images/joao.jpg";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "animate.css"
function HeroDiv() {
  return (
    <div className="mx-auto flex flex-col-reverse md:flex-row">
  <div className="animate__animated animate__slideInLeft w-full xl:w-1/4  md:pl-24 lg:pl-28 xl:pl-36 md:py-16 lg:py-16 xl:py-28 bg-white z-2">


  <div className='flex flex-wrap p-2 space-x-2  md:space-x-0 lg:p-0 sm:flex-row justify-center  md:flex-col'>
  <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-center md:text-left">The</h1>
  <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-center md:text-left" style={{ whiteSpace: 'nowrap' }}>Future of</h1>
  <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-center md:text-left">Irrigation</h1>
  <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-center md:text-left" style={{ whiteSpace: 'nowrap' }}>is Now</h1>
</div>

    <div className="py-4">
      <p className='text-center md:text-sm md:text-left '>
        <span className="text-transparent sm:text-sm md:text-xs lg:text-xl  bg-clip-text mb-1 font-semibold bg-gradient-to-r from-lime-500 to-sky-500">HEALTHY HARVEST AGRIVENTURES </span>
        is a farm-based solution to Kenya's growing agricultural needs
      </p>
    </div>
    <div className="flex flex-row justify-center mb-8 sm:flex-row sm:justify-start space-x-4 sm:space-x-8">
  <button className="bg-black h-12 w-32 text-xs text-white">Contact Us</button>
  
  <button className="space-x-4 flex items-center gap-x-2">
   <Link> Products <FaLongArrowAltRight /> </Link>
  </button>
  
</div>
  </div>
  <div
    className="animate__animated animate__slideInRight w-full md:w-3/4 rounded-2xl mt-4 lg:mt-0"
    style={{
      backgroundImage: `url(${farm})`,
      backgroundSize: "cover",
      flexShrink: 0,
      minHeight: "300px",
    }}
  ></div>
</div>
  )
}

export default HeroDiv