import React from 'react'
import farm from "../images/joao.jpg";
import { FaLongArrowAltRight } from 'react-icons/fa';

function HeroDiv() {
  return (
    <div className='mx-auto flex flex-row'>
      <div className="w-1/4 lg:pl-32 py-32 bg-white z-10">
        <div>
          <h1 className='text-3xl lg:text-8xl font-bold'>The</h1>
          <h1 className='text-3xl lg:text-8xl font-bold' style={{ whiteSpace: 'nowrap' }}>Future of</h1>
          <h1 className='text-3xl lg:text-8xl font-bold'>Irrigation</h1>
          <h1 className='text-3xl lg:text-8xl font-bold' style={{ whiteSpace: 'nowrap' }}>is Now</h1>
        </div>
        <div className='py-4'>
          <p style={{ textAlign: "left" }}><span className="text-transparent text-xl bg-clip-text  mb-1 font-semibold bg-gradient-to-r from-lime-500 to-sky-500">MAKUENI VALLEY FARM </span>is a farm-based solution to Kenya's growing agricultural needs</p>
        </div>
        <div className='flex space-x-8' style={{ whiteSpace: 'nowrap' }}>
          <button className='bg-black h-12 w-32 text-white'>Contact us</button>
          <button className="space-x-4" style={{ display: 'flex', alignItems: 'center' }}>Products <FaLongArrowAltRight /></button>
        </div>
      </div>
      <div className='w-3/4 rounded-2xl'
        style={{
          backgroundImage: `url(${farm})`,
          backgroundSize: "cover",
          flexShrink: 0,
        }}
      ></div>
    </div>
  )
}

export default HeroDiv