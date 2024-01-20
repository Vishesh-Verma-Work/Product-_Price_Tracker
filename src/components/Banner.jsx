import React from 'react'
import '../App.css'
// import banner1 from 
import amit from '../assets/carousel1.jpeg'
import amit1 from '../assets/carousel2.jpeg'
import amit2 from '../assets/carousel3.jpeg'
import amit4 from '../assets/caro4.jpeg'
function Banner() {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] to=[#FCFCFC] to-100% '>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            {/* images_banner */}

        <div className='md:w-1/2' > <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={amit} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href='#slide2' className="btn btn-circle">❮</a> 
      <a href='#silde4' className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={amit1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={amit2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={amit4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div></div> 

               {/* text_banner */}
            <div className='md:w-1/2 px-4' >
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug'>Empowering Smart Shopping   <span className="text-orange-400">Redefined</span></h2>
               <p className='text-xl py-9 text-[#4A4A4A]'>
               Unleash the Power to Compare,Decide and  <br /> save in Every online Purschase
                </p>
                <button className='bg-black font-semibold text-white px-5 py-3 rounded-full'><a href="/menu">Explore Now</a></button>
                 </div> 
                 <hr />
            

        </div>
        <div class="line"></div>
        <hr className="" />
        <div id="moving-text">
        <div class="con">
            <h1>AMAZON</h1>
            <div id="gola"></div>
            <h1>MYNTRA</h1>
            <div id="gola"></div>
            <h1>FLIPKART</h1>
            <div id="gola"></div>
        </div>

        <div class="con">
            <h1>AMAZON</h1>
            <div id="gola"></div>
            <h1>MYNTRA</h1>
            <div id="gola"></div>
            <h1>FLIPKART</h1>
            <div id="gola"></div>
        </div>

        <div class="con">
            <h1>AMAZON</h1>
            <div id="gola"></div>
            <h1>MYNTRA</h1>
            <div id="gola"></div>
            <h1>FLIPKART</h1>
            <div id="gola"></div>
        </div>
    </div>
        </div>
  )
}

export default Banner