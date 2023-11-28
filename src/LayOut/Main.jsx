import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Shared/Header/Header';
import Footer from '../Component/Shared/Footer/Footer';
import NavBar from '../Component/Shared/Header/NavBar';

const Main = () => {
      return (
            <div className='max-w-7xl mx-auto'>
                  <Header></Header>
                  <NavBar></NavBar>
                 <Outlet></Outlet>
                 <Footer></Footer>
            </div>
      );
};

export default Main;