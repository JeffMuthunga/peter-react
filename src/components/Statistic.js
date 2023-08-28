import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightScale, faPeopleGroup, faSeedling, faTractor  } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


function Statistic() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-lime-400">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-500 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
        <FontAwesomeIcon icon={faPeopleGroup}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">
          19
        </h6>
        <p className="mb-2 font-bold text-md">Clients</p>
      </div>
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-500 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
          <FontAwesomeIcon icon={faSeedling}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">
          1.3K
        </h6>
        <p className="mb-2 font-bold text-md">Crop species</p>
      </div>
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-500 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
        <FontAwesomeIcon icon={faWeightScale}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">910</h6>
        <p className="mb-2 font-bold text-md">Kilograms of Produce</p>
      </div>
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-500 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
          <FontAwesomeIcon icon={faTractor}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">22</h6>
        <p className="mb-2 font-bold text-md">Harvests</p>
      </div>
    </div>
  </div>
  )
}

export default Statistic