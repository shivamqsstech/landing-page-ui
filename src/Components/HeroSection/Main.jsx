import React from 'react'
import shoe_image from '../../assets/shoe_image.png'
import flipkat_img from '../../assets/amazon.png'
import amazon_img from '../../assets/flipkart.png'
import './style.css'
const Main = () => {


  return (
    <main className='container header'>
        <div className='Content-left'>
            <div className="contents">

            <h1>
                YOUR FEET DESERVES THE BEST    
            </h1>
            <div className='paragraph'>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH QUR SHOES.</p>

            </div>

            </div>

            <div className="buttons">
            <ul>

                <li className='shopNowBtn'>Shop Now</li>
                <li className='categoryBtn'>Category</li>

            </ul>
               
            </div>

            <div className="tags">
                <span>Also Available On</span>
                <div className="brand_logo">

                <img src={flipkat_img} alt="" />
                <img src= {amazon_img}alt="" />
                
                </div>
            </div>



        </div>

        <div className="main-image-right">
            <img src={shoe_image} alt="header-img"/>
        </div>

    </main>
  )
}

export default Main;