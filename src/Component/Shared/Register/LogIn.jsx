import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from './SocialLogIn';


const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
      const {sigIn} = useContext(AuthContext);


      const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      
        sigIn(email, password)
          .then(result => {
            const user = result.user;
            const loggedUser = {
              email: user.email
            }
            console.log(loggedUser);
            navigate(from, { replace: true });
            // If navigation is asynchronous, handle it here
            
          })
          .catch(error => {
            console.error(error);
            // Handle the error or display a message to the user
          });
      }
      return (
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogIn} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary block">Login</button>
                  </div>
                </form>
                <div className='text-center'><SocialLogIn></SocialLogIn></div>
              </div>
            </div>
            
          </div>
      );
};

export default LogIn;