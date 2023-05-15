import React from 'react'
import reactmap from '../images/reactmap.png';
export const Homepage = () => {
  return (
    <div className='image-block'>
      <firure className = "card">
         
     
      <h1 className="title">REACT ROAD MAP </h1>
      <img src = {reactmap}  className = "card-image"
      alt = "reactmap"/>
      <figurecaption className = "card-body">
        <h2 className='card-title'>React can be used to develop single page and mobile apps </h2>
      <p className='card-description'>React is an open source JavaScript library for developing user interfaces. React is developed and maintained by Facebook, Instagram, and a community of individual developers and corporations. </p>
      </figurecaption>
      </firure>
    </div>
  )
}
