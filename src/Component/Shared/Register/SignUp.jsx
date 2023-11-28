import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext);


const handleSignIn= event =>{
      event.preventDefault();
      const from = event.target;
      const name = from.name.value;
      const email = from.email.value;
      const password = from.password.value;
      const user = {name, email, password}
      console.log(user);
      createUser(email, password)
      .then(res =>{
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .then(error =>{
        console.log(error);
      })
}

      return (
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignIn} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name ='name' placeholder="name" className="input input-bordered" required />
                  </div>
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
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary block">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      );
};

export default SignUp;