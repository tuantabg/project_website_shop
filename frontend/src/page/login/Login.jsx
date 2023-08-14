import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

// Import Images =========>
import LogoReact from '../../assest/react.svg';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className='login'>
        <div className='w-full max-w-md m-auto'>
          <div className='logoReact p-4'>
            <img className='app-logo pointer-events-none' src={LogoReact} alt="Logo React" />
          </div>
          <h1 className='text-center p-4'>Đăng Nhập</h1>

          <div className='form-login w-full max-w-md p-5 md:p-5 text-center bg-white m-auto'>
              <form action="">
                <input ref={emailRef} type="email" id='emailName' className='form-control w-full' placeholder="Địa chỉ email" aria-label='Email Address'/>
                <input ref={passwordRef} type="password" id='password' className='form-control w-full' placeholder="Mật khẩu" aria-label='Password'/>
                <button className="btn btn-primary w-full mb-4">Đăng nhập</button>
                <p className="message">Chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Login;