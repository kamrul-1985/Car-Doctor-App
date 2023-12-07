import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Booking from './Booking';


const Bookings = () => {

      const {user, loading} = useContext(AuthContext);

      const [bookings, setBookings] = useState([]);

      const url = `http://localhost:5000/bookings?email=${user.email}`;

      useEffect(() => {
            fetch(url, {
              method:"GET",
              headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
              }
            })
            .then(res => res.json())
            .then(data =>{
              if(!data.error){
                setBookings(data)
              }
            })
      },[url]);


      const handleDelete= (id, title) => {
            const proceed = confirm(`you realy want to delete you${title}`);
            if(proceed){
             fetch(`http://localhost:5000/bookings/${id}`,{
                   method:"DELETE"
             })
             .then(res => res.json())
             .then(data => {
                   console.log(data);
                   if(data){
                         alert('your booking has been deleted');
                         const remaining = bookings.filter(booking => booking._id == id);
                         setBookings(remaining);
                   }
             })
            }
       }

      //  const handleConfirm = id =>{
      //       fetch(`https://localhost:5000/bookings/${id}`,{

      //             method:'PATCH',
      //             headers:{
      //                   'Content-Type':'application/json'
      //             },
      //             body: JSON.stringify({status:'confirm'})
      //       })
      //       .then(res => res.json())
      //       .then(data =>{
      //             console.log(data);
      //             if(data){
      //             alert('data has been updated');
      //             const remaining = bookings.filter(booking => booking._id == id);
      //             const updatedData = bookings.find(booking => booking._id !== id);
      //             updatedData.status = confirm;
      //            const newBookings = [remaining, ...updatedData];
      //            setBookings(newBookings);
      //             }
                  
                  
      //       })
      //  }


      const handleConfirm = (id) => {
            fetch(`http://localhost:5000/bookings/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ status: 'confirm' }),
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error('Failed to update booking status');
                }
                return res.json();
              })
              .then((data) => {
                console.log(data);
                // Assuming data contains information about the updated booking
                alert('Data has been updated');
          
                // Update bookings state based on the updated data
                const updatedBookings = bookings.map((booking) =>
                  booking._id === id ? { ...booking, status: 'confirm' } : booking
                );
          
                setBookings(updatedBookings);
              })
              .catch((error) => {
                console.error(error);
                alert('Failed to update booking status');
              });
          };

          
      return (
            <div>
                  <h1 className='text-5xl text-green-600 text-center font-extrabold my-12'>YOUR BOOKINGS' {bookings.length}</h1>
                  <div>
  <table className='table'>
    {/* head */}
    <thead>
      <tr>
            
        <th>IMAGE</th>
        <th>TITLE</th>
        <th>SERVICE:ID</th>
        <th>DATE</th>
        <th>PRICE</th>
        <th>STATUS</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>        
      {
            bookings?.map(booking => <Booking
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleConfirm={handleConfirm}>
            </Booking> )
      }
      
    </tbody>
  </table>
</div>
            </div>
      );
};

export default Bookings;