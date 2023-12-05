import React from 'react';

const Booking = ({booking, handleDelete, handleConfirm}) => {

      const {_id, img, title, service_id, price, date,status} = booking; 

      return (
             <tr>
                   <td><img src={img} alt="" className='w-24 rounded' /></td>
                  <td>{title}</td>
                  <td>{service_id}</td>
                  <td>{date}</td>
                  <td>${price}</td>
                  <td>

                 {
                  status?<span>confirmed</span>: <button className='btn btn-primary' onClick={()=> handleConfirm(_id)}>confirm</button>
                 }

                  </td>
                  <td><button onClick={()=>handleDelete(_id, title)} className='btn btn-secondary'>Delete</button></td>
                 
             </tr>
      );
};

export default Booking;