import React from 'react'
import img from "../../../src/assets/images/about_us/person.jpg"
import img1 from "../../../src/assets/images/about_us/parts.jpg"


const MotorService = () => {
      return (
            <div className='md:flex my-24'>
                  
                  <div className='relative w-full ps-12'>
                        <div><img src={img} alt="person" className='h-2/3 w-3/4 rounded' /></div>
                        <div className='absolute top-52 left-96 w-[30%] border-4'><img src={img1} alt="person" /></div>
                  </div>
                  <div className='space-y-4 text-center mx-12'>
                        <h1 className='text-xl text-red-600 font-bold'>About</h1>
                        <h1 className='text-5xl font-extrabold'>We are qualified & of experience in this field</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatem nulla ducimus natus, enim perspiciatis voluptate assumenda impedit cupiditate ut!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi possimus eos, molestiae eius totam maxime! Quod ipsum deserunt voluptas amet.</p>
                        <button className='btn btn-primary'>see all</button>
                  </div>
            </div>
      );
};

export default MotorService;