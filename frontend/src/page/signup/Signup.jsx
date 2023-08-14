import React from 'react';
import './Signup.scss';

// Import Images =========>
import LogoReact from '../../assest/react.svg';

const Signup = () => {
    return (
        <div className='signup'>
            <div className='w-full max-w-md m-auto'>
              <div className='logoReact'>
                <img className='w-16' src={LogoReact} alt="Logo React" />
              </div>
              <h1 className='text-center p-4'>Đăng ký</h1>

              <div className='w-full max-w-md p-4 md:p-4 bg-white m-auto'>
                Signup
              </div>
            </div>
        </div>
    )
}

export default Signup;