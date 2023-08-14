import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

// Import Images =========>
import LogoReact from '../../assest/react.svg';


const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  return (
    <div className='signup'>
        <div className='w-full max-w-md m-auto'>
          <div className='logoReact p-4'>
            <img className='app-logo pointer-events-none' src={LogoReact} alt="Logo React" />
          </div>
          <h1 className='text-center p-4'>Đăng Ký</h1>

          <div className='form-signup w-full max-w-md p-5 md:p-5 text-center bg-white m-auto'>
              <form action="">
                <input ref={nameRef} type="text" id='firstName' className='form-control w-full' placeholder="Họ và tên" aria-label='Full Name'/>
                <input ref={emailRef} type="email" id='emailName' className='form-control w-full' placeholder="Email" aria-label='Email Address'/>
                <input ref={passwordRef} type="password" id='password' className='form-control w-full' placeholder="Mật khẩu" aria-label='Password'/>
                <input ref={passwordConfirmationRef} type="password" id='password' className='form-control w-full' placeholder="Lặp lại mật khẩu" aria-label='Repeat Password'/>
                <button className="btn btn-primary w-full mb-4">Đăng ký</button>
                <p className="message">Đã đăng ký? <Link to="/login">Đăng nhập</Link></p>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;