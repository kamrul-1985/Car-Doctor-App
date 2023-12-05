import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import img from "../../../../src/assets/icons/q8-vPggS_400x400.jpg"
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
      const navigate = useNavigate();
      const {googleLogIn} = useContext(AuthContext);

      const handleSocialLogIn = () =>{
            googleLogIn()
            .then(data => {
                  console.log(data.user)
                  navigate('/')
            })
            .catch(error =>console.log(error))
      };

      return (
            <div className='divider'>
                 <div>
                 <button onClick={handleSocialLogIn} className='btn btn-circle'><img src={img} alt="" /></button>
                 </div>
            </div>
      );
};

export default SocialLogIn;