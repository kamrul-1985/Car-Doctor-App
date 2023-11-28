import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
  const navigate = useNavigate();

      const {sigIn} = useContext(AuthContext);


const handleLogIn = event =>{
      event.preventDefault();
      const from = event.target;
      const email = from.email.value;
      const password = from.password.value;
      sigIn(email, password)
      .then(res =>{
        if (res){
          navigate("/", { state: { key: "value" } });
        }
      })
      .then(error =>{
        console.log(error);
      })
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
              </div>
            </div>
          </div>
      );
};

export default LogIn;