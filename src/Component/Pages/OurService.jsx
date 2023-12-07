import React, { useEffect, useState } from 'react';
import Services from './Services';

const OurService = () => {

      const [services, setServices] = useState([]);

      useEffect(()=>{
            fetch(`http://localhost:5000/services`,{

                  method: "GET",
                  headers:{
                       'Content-Type': 'application/json'
                  },
                  body: JSON.stringify()
            })
            .then(res => res.json())
            .then(data =>{
                  setServices(data);
            })
      },[])

      console.log(services);

      return (
            <div className='my-12 bg-gray-200'>
                  <div className='space-y-3 text-center w-[30%] mx-auto'>
                        <h1 className='text-red-600 text-xl font-bold'>Service</h1>
                        <h1 className='text-3xl font-bold'>Take Our Services</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Official molestias saepe quaerat. </p>
                  </div>
                 <div className='grid grid-cols-1 md:grid-cols-3 w-2/3 mx-auto gap-5'>
                 {
                        services?.map(service => <Services 
                        key={service._id}
                        service={service}></Services>
                        
                              )
                  }
                 </div>
            </div>
      );
};

export default OurService;