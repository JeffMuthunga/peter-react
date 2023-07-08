import React from 'react'
import crop from "../images/markus.jpg"

function Featured() {
  return (
    <div>
        <section className="relative pt-16 bg-blueGray-50">
<div className="container mx-auto">
  <div className="flex flex-wrap items-center">
    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
      <div className="relative flex flex-col min-w-0 break-words bg-lime w-full mb-6 shadow-lg rounded-lg bg-lime-300">
        <img alt="..." src={crop} className="w-full  h-128 align-middle rounded-t-lg"/>
        <blockquote className="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
            <polygon points="-30,95 583,95 583,65" className="text-lime-300 fill-current"></polygon>
          </svg>
          <h4 className="text-xl font-bold text-black">
            We are great for your awesome project
          </h4>
          <p className="text-md font-light mt-2 text-black">
            Trust in our ability to farm your crops to excellence with our team of experts and all the latest 
            agricultural technologies  have revolutionized the way we farm crops, making the process more efficient and profitable.

          </p>
        </blockquote>
      </div>
    </div>

    <div className="w-full md:w-6/12 px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-brain"></i>
              </div>
              <h6 className="text-transparent text-xl bg-clip-text  mb-1 font-semibold bg-gradient-to-r from-lime-500 to-orange-500"> Expertise & Knowledge</h6>
              <p className="mb-4 text-blueGray-500">
              Clients should consider farming with us because we bring a wealth of expertise and knowledge to the table. We stay up-to-date with the latest agricultural practices, advancements in technology.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-leaf"></i>
              </div>
              <h6 className="text-transparent text-xl bg-clip-text  mb-1 font-semibold bg-gradient-to-r from-lime-500 to-orange-500">
                Sustainable and Responsible Practices
              </h6>
              <p className="mb-4 text-blueGray-500">
              We prioritize sustainability and responsible farming practices. Our commitment to the environment is reflected in our use of organic and eco-friendly methods.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-handshake"></i>
              </div>
              <h6 className="text-transparent text-xl bg-clip-text  mb-1 font-semibold bg-gradient-to-r from-lime-500 to-orange-500">Partnership and Support</h6>
              <p className="mb-4 text-blueGray-500">
              When clients farm with us, they gain more than just a supplier or service provider; they become part of a collaborative partnership. We value open communication and actively listen to our clients' needs, goals, and challenges.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-wallet"></i>
              </div>
              <h6 className="text-transparent text-xl bg-clip-text  mb-1 font-semibold bg-gradient-to-r from-lime-500 to-orange-500">Finances</h6>
              <p className="mb-4 text-blueGray-500">
                We provide financial profits based on amount invested by each partner. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

    </div>
  )
}

export default Featured