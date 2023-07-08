import React from 'react'
import "../Gallery.scss"
import bellpepper from "../images/bellpepper.jpg"
import fruits from "../images/fruits.jpg"
import peppers from "../images/peppers.jpg"
import potato from "../images/potato.jpg"
import tomato from "../images/tomato.jpg"

function Gallery() {
  return (
    <div className="container1">
  <div className="card">
    <img src={tomato} alt="..."/>
    <div className="card__head bg-lime-400">Tomato Farming</div>
  </div>
  <div className="card">
    <img src={bellpepper} alt="..."/>
    <div className="card__head bg-lime-400">Bell Pepper Farming</div>
  </div>
  <div className="card">
    <img src={potato} alt="..."/>
    <div className="card__head bg-lime-400">Potato Farming</div>
  </div>
  <div className="card">
    <img src={fruits} alt="..."/>
    <div className="card__head bg-lime-400">Exotic Fruits</div>
  </div>
  <div className="card">
    <img src={peppers} alt="..."/>
    <div className="card__head bg-lime-400">Pepper Farming</div>
  </div>
</div>
  )
}

export default Gallery