import React from 'react';
import img1 from '../../../src/assets/images/banner/1.jpg'
import img2 from '../../../src/assets/images/banner/2.jpg'
import img3 from '../../../src/assets/images/banner/3.jpg'
import img4 from '../../../src/assets/images/banner/4.jpg'



const Banner = () => {
      return (
            <div>
                 <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full" />
    <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 bottom-0 text-white flex justify-start items-center">

     <div className='w-1/3 space-y-4 ms-20'>
     <h1 className='text-5xl font-extrabold'>Doctors available for your car</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus earum doloremque eveniet hic sed animi architecto. Expedita, consectetur nostrum!</p>
    
     <button className='btn btn-warning mx-4'>service</button>
     <button className='btn btn-warning'>service</button>
     </div>
    
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide4" className="btn btn-circle bg-red-400">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-400">❯</a> 

    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src={img2} className="w-full" />
    <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 bottom-0 text-white flex justify-start items-center">

     <div className='w-1/3 space-y-4 ms-20'>
     <h1 className='text-5xl font-extrabold'>Doctors available for your car</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus earum doloremque eveniet hic sed animi architecto. Expedita, consectetur nostrum!</p>
    
     <button className='btn btn-warning mx-4'>service</button>
     <button className='btn btn-warning'>service</button>
     </div>
    
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide1" className="btn btn-circle bg-red-400">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-400">❯</a> 

    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full ">
    <img src={img3} className="w-full" />
    <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 bottom-0 text-white flex justify-start items-center">

     <div className='w-1/3 space-y-4 ms-20'>
     <h1 className='text-5xl font-extrabold'>Doctors available for your car</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus earum doloremque eveniet hic sed animi architecto. Expedita, consectetur nostrum!</p>
    
     <button className='btn btn-warning mx-4'>service</button>
     <button className='btn btn-warning'>service</button>
     </div>
    
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide2" className="btn btn-circle bg-red-400">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-red-400">❯</a> 

    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full ">
    <img src={img4} className="w-full" />
    <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] top-0 bottom-0 text-white flex justify-start items-center">

     <div className='w-1/3 space-y-4 ms-20'>
     <h1 className='text-5xl font-extrabold'>Doctors available for your car</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus earum doloremque eveniet hic sed animi architecto. Expedita, consectetur nostrum!</p>
    
     <button className='btn btn-warning mx-4'>service</button>
     <button className='btn btn-warning'>service</button>
     </div>
    
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-3/4">
      <a href="#slide3" className="btn btn-circle bg-red-400">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-400">❯</a> 

    </div>
  </div> 
 
</div>
  </div> 
      );
};

export default Banner;