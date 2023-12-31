import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import img from '../../../../src/assets/icons/logo.svg'
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () =>{
         logOut();
         localStorage.removeItem('access-token');
  }

      const menu = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='about'>About</Link></li>
      <li><Link to='contact'>Contact</Link></li>
      <li><Link to='service'>Services</Link></li>
      {user? <div className='flex'><li><button onClick={handleLogOut}>LogOut</button></li>
      <li><Link to="bookings">Your Bookings</Link></li></div> :
     <div className='flex'>
       <li><Link to='login'>LogIn</Link></li>
      <li><Link to='signup'>SignUp</Link></li></div>}
      </>
      return (
            <div>
                  <div className="navbar bg-base-200 px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
   <img src={img} alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
   <button className='btn btn-warning'>{user?.email}</button>
  </div>
</div>
            </div>
      );
};

export default NavBar;