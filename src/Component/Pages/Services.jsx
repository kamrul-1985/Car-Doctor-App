import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
      const {_id, title, service_id, img, price, description} = service;

      return (
            <div className='my-12'>
<div className="card w-full bg-base-100 shadow-xl p-4">
  <figure><img src={img} alt="Shoes" className='rounded w-full h-40' /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-red-600 font-bold'> Price: {price}</p>
  </div>
  <Link to={`/checkout/${_id}`}><button className='btn btn-primary'>details</button></Link>
</div>
            </div>
      );
};

export default Services;