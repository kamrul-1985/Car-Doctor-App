
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Pages/Home";
import About from "../Component/Pages/About";
import Contact from "../Component/Pages/Contact";
import Service from "../Component/Pages/Service";
import LogIn from "../Component/Shared/Register/LogIn";
import SignUp from "../Component/Shared/Register/SignUp";
import CheckOut from "../Component/Pages/CheckOut";
import Bookings from "../Component/Pages/Bookings";
import PrivetRout from "../Component/Pages/PrivetRoute/PrivetRout";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [ 
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        },
        {
            path: '/service',
            element:<Service></Service>
        },
        {
            path: '/login',
            element:<LogIn></LogIn>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
        {
            path: '/checkout/:id',
            element:<PrivetRout><CheckOut></CheckOut></PrivetRout>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/bookings',
            element:<PrivetRout><Bookings></Bookings></PrivetRout>
        },
        ]
      },
    ]);

    export default router;