import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AuthContext} from '../Provider/AuthProvider';

const CheckOut = () => {
  const {user} = useContext(AuthContext)

      const service = useLoaderData();

      const {title, service_id, price} = service;
      
      const handleBooking = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const date = from.date.value;
        const booking = {
          UserName: name,
          UserEmail: email,
          date,
          phone
        };
        fetch(`http://localhost:5000/checkout`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(booking)
        })
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.insertedId){
    alert('booking has been send to db')
  }
})
   }

      return (
            <div>
                  <h1 className='text-center text-green-900 text-5xl font-extrabold my-8'>Take Our {title} service</h1>
                  <form onSubmit={handleBooking}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 mx-auto bg-gray-200 p-8 rounded'>
                        <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>

                    <input 
                    type="text"
                    name ="name" 
                    className="input input-bordered" 
                    defaultValue={user?.name}
                    required />

                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>

                    <input 
                    type="date" 
                    name ="date"  
                    className="input input-bordered" 
                    required />

                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>

                    <input 
                    type="email" 
                    name ="email"  
                    className="input input-bordered" 
                    defaultValue={user?.email}
                    required />

                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>

                    <input 
                    type="number" 
                    name ="phone"
                    className="input input-bordered" 
                    required />

                  </div>
                        </div>
                        <div className='my-5 w-2/3 mx-auto'>
                        <button className='btn btn-block' type='submit'>submit</button>
                        </div>
                  </form>
            </div>
      );
};

export default CheckOut;