import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

// Import Images =========>
import LogoReact from '../../assest/react.svg';

const Login = () => {
  const [data, setData] = useState({
    email : "",
    password : "",
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const {email, password} = data;

    if ( email && password) {
      alert("success.");
    } else {
      alert("Vui lòng nhập các trường bắt buộc.")
    }
  }

  return (
    <div className='login'>
        <div className='w-full max-w-md m-auto'>
          <div className='logoReact p-4'>
            <img className='app-logo pointer-events-none' src={LogoReact} alt="Logo React" />
          </div>
          <h1 className='text-center p-4'>Đăng Nhập</h1>

          <div className='form-login w-full max-w-md p-5 md:p-5 text-center m-auto'>
              <form onSubmit={handleSubmit} action="">
                <input  type="email" 
                        name='email'
                        value={data.email}
                        onChange={handleOnChange}
                        className='form-control w-full' 
                        placeholder="Email" 
                        aria-label='Email Address'
                        required
                />
                <input  type="password" 
                        name='password'
                        value={data.password}
                        onChange={handleOnChange}
                        className='form-control w-full' 
                        placeholder="Mật khẩu" 
                        aria-label='Password'
                        required
                />
                <button type='submit' className="btn btn-primary w-full mb-4">Đăng nhập</button>
                <p className="message">Chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Login;