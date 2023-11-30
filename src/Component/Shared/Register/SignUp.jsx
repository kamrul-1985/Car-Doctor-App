import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
// import { useAlert } from 'react-alert'

const SignUp = () => {
  const navigate = useNavigate();

  const {createUser} = useContext(AuthContext);


const handleSignIn= event =>{
      event.preventDefault();
      const from = event.target;
      const name = from.name.value;
      const email = from.email.value;
      const password = from.password.value;
      const user = {name, email, password};

      createUser(email, password)
      .then(res => {
        const loggedUser = res.user;
        fetch(`http://localhost:5000/users`, {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          const loggedUser = data.user;
          if(data.insertedId){
            <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your purchase has been confirmed!</span>
</div>
          };
          if (data){
            navigate("/", { state: { key: "value" } });
          }
          from.reset();
        })
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
                    <input type="text" name ="name" placeholder="name" className="input input-bordered" required />
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
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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