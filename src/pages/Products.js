import React from 'react'
import imj from "../images/pexelsproduce.jpg"
import chilli from "../images/chilli-removebg-preview.png"
import cabbage from "../images/cabbage-removebg-preview.png"
import onion from "../images/onion-removebg.png"
import garlic from "../images/Garlic-removebg.png"
import maize from "../images/Maize-removebg.png"
import kale from "../images/Kale-removebg.png"
import harvest from "../images/fresh-removebg.png"
import boy from "../images/fresh-boy-harvest.png"
import organic from "../images/organic.png"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Products() {
  return (
    <div>
    <NavBar/>
      <div className=" flex flex-col h-96 justify-center flex items-center bg-fixed bg-center bg-cover opacity-90" style={{ backgroundImage: `url(${imj})` }}>
        <h1 className='text-6xl text-white font-bold'>Products</h1>
        <h3 className='animate__animated animate__hinge  text-gray-200'>HOME > PRODUCTS</h3>
      </div>
      
    <div className='bg-lime-400 md:p-20'>
      <div className='flex flex-col md:flex-row  justify-center md:space-x-8'>

      <div className='md:w-1/3 flex flex-col text-center md:p-12'>
        <div className='scroll-animate mx-auto justify-center'>
          <img alt="fresh harvest" src={boy} className='mx-auto h-48'/>
          <h2 className='mt-4 text-2xl font-semibold'> Fresh Harvest</h2>
          <p className='mt-2'>Handpicked, farm-fresh produce for a wholesome dining experience.</p>
        </div>
      </div>


      <div className='d:w-1/3 flex flex-col text-center md:p-12'>
        <div className='scroll-animate mx-auto'>
        <img src={organic} alt="organic practices" className='mx-auto h-48'/>
          <h2 className='mt-4 text-2xl font-semibold'>Organic Practices</h2>
          <p className='mt-2'>Grown using sustainable and organic farming methods, no harmful chemicals.</p>
        </div>
      </div>


      <div className='md:w-1/3 flex flex-col text-center md:p-12'>
        <div className='scroll-animate mx-auto'>
        <img src={harvest} alt="Variety of selection" className='mx-auto h-48'/>
          <h2 className='mt-4 text-2xl font-semibold'> Variety of Selection</h2>
          <p className='mt-2'>Explore a diverse range of fresh produce to suit your culinary needs.</p>
        </div>
      </div>
    </div>
    </div>

    <div className='bg-gray-100 pattern-diagonal-lines-sm'>
      <div className='scroll-animate flex flex-col md:flex-row p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {chilli} alt="chilli" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pr-24'>
          <h1 className='text-5xl font-bold py-6'>Chilli Peppers</h1>
          <p className='text-xl font-bold py-4'>Add Spice to Your Dishes</p>
          <p className='text-base'>Our vibrant and flavorful chilli peppers are perfect for adding a kick to your favorite recipes. From mild to hot, we have a variety of options to suit your taste. </p>
        </div>
      </div>

      <div className='scroll-animate flex flex-col  md:flex-row-reverse p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {cabbage} alt="Cabbage" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pl-24'>
          <h1 className='text-5xl font-bold py-6'>Cabbage</h1>
          <p className='text-xl font-bold py-4'>Versatile and Nutritious</p>
          <p className='text-base'>Enjoy the versatility of our fresh cabbage, whether in salads, slaws, or cooked dishes. Packed with essential nutrients, it's a healthy addition to your meals. </p>
        </div>
      </div>

      <div className='scroll-animate flex flex-col md:flex-row  p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {kale} alt="Kale" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pr-24'>
          <h1 className='text-5xl font-bold py-6'>Kale</h1>
          <p className='text-xl font-bold py-4'>Superfood Greens</p>
          <p className='text-base'>Experience the health benefits of our nutrient-rich kale. Whether sautéed, baked, or blended into smoothies, it's a delicious way to boost your well-being.</p>
        </div>
      </div>

      <div className='scroll-animate flex flex-col md:flex-row-reverse p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {onion} alt="Onion" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pl-24'>
          <h1 className='text-5xl font-bold py-6'>Onion</h1>
          <p className='text-xl font-bold py-4'>Flavorful Foundations</p>
          <p className='text-base'>Our fresh onions are an essential ingredient for adding depth and flavor to a wide range of culinary creations. Elevate your dishes with the rich taste of our onions. </p>
        </div>
      </div>
      <div className='scroll-animate flex flex-col md:flex-row p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {garlic} alt="Garlic" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pr-24'>
          <h1 className='text-5xl font-bold py-6'>Garlic</h1>
          <p className='text-xl font-bold py-4'>Nature's Seasoning</p>
          <p className='text-base'>Enhance your meals with the aromatic and pungent flavor of our garlic. From roasts to sauces, our garlic adds a burst of taste to every bite. </p>
        </div>
      </div>

      <div className='scroll-animate flex flex-col md:flex-row-reverse p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {maize} alt="Maize" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pl-24'>
          <h1 className='text-5xl font-bold py-6'>Maize</h1>
          <p className='text-xl font-bold py-4'>Farm-Fresh Corn</p>
          <p className='text-base'>Enjoy the natural sweetness and crunch of our maize. Whether grilled, boiled, or roasted, our corn is a delicious and satisfying treat for all occasions. </p>
        </div>
      </div>

    </div>


    <Footer/>
    </div>
  

  )
}

export default Products