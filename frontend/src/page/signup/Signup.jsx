import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

// Import Images =========>
import LogoReact from '../../assest/react.svg';


const Signup = () => {
  const [data, setData] = useState({
    fullName : "",
    email : "",
    password : "",
    passwordConfirmation : "",
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

    const {fullName, email, password, passwordConfirmation} = data;

    if (fullName && email && password && passwordConfirmation) {
      if (password === passwordConfirmation) {
        alert("success.");
      } else {
        alert("Mật khẩu và xác nhận mật khẩu không giống nhau.");
      }
    } else {
      alert("Vui lòng nhập các trường bắt buộc.")
    }
  }

  return (
    <div className='signup'>
        <div className='w-full max-w-md m-auto'>
          <div className='logoReact p-4'>
            <img className='app-logo pointer-events-none' src={LogoReact} alt="Logo React" />
          </div>
          <h1 className='text-center p-4'>Đăng Ký</h1>

          <div className='form-signup w-full max-w-md p-5 md:p-5 text-center bg-white m-auto'>
              <form onSubmit={handleSubmit} action="">
                <input  type="text" 
                        name='fullName'
                        value={data.fullName}
                        onChange={handleOnChange}
                        className='form-control w-full' 
                        placeholder="Họ và tên" 
                        aria-label='Full Name'
                        required
                />
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
                <input  type="password" 
                        name='passwordConfirmation'
                        value={data.passwordConfirmation}
                        onChange={handleOnChange}
                        className='form-control w-full' 
                        placeholder="Lặp lại mật khẩu" 
                        aria-label='Repeat Password'
                        required
                  />

                <button type='submit' className="btn btn-primary w-full mb-4">Đăng ký</button>
                <p className="message">Đã đăng ký? <Link to="/login">Đăng nhập</Link></p>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;