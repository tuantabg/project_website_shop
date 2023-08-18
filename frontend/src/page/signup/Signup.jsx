import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageToBase64 from '../../utility/imageToBase64/ImageToBase64';
import './Signup.scss';

// Import Images =========>
import LogoReact from '../../assest/avatarDefault.jpg';



const Signup = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		fullName : "",
		email : "",
		password : "",
		passwordConfirmation: "",
		image: "",
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
	

	const handleUploadProfileImage = async(fileImage) => { 
		const data = await ImageToBase64(fileImage.target.files[0]);
		console.log(data);

		setData((preve) => { 
			return {
				...preve,
				image: data
			}
		})
	}

	const handleSubmit = async(e) => {
			e.preventDefault();

			const {fullName, email, password, passwordConfirmation} = data;

			if (fullName && email && password && passwordConfirmation) {
			if (password === passwordConfirmation) {

				const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
					method 	: "POST",
					headers : {
						"content-type" : "application/json"
					},
					body 	: JSON.stringify(data)
				});

				const dataRes = await fetchData.json();
				console.log(dataRes);

				alert("success.");
				// navigate("/login");
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
			<h1 className='text-center p-4'>Đăng Ký</h1>
				<div className='form-signup w-full max-w-md p-5 md:p-5 text-center m-auto'>
					<form onSubmit={handleSubmit} action="">
						<div className='logoReact md:mb-5'>
							<img src={data.image ? data.image : LogoReact}
								className='pointer-events-none object-cover w-full h-full'
								alt="Logo React"
							/>
							<label htmlFor='profileImage' className='cursor-pointer'>
								<div className="uploadAvata h-1/3 bg-sky-500 bg-opacity-40">
									<span>Đăng ảnh</span>
								</div>
								<input type="file"
									name='image'
									onChange={handleUploadProfileImage}
									id='profileImage'
									className='hidden'
									accept="image/png, image/gif, image/jpeg"
									aria-label='Profile Image'
								/>  
							</label>  
						</div>
						<input type="text" 
							name='fullName'
							value={data.fullName}
							onChange={handleOnChange}
							className='form-control w-full' 
							placeholder="Họ và tên" 
							aria-label='Full Name'
							required
						/>
						<input type="email" 
							name='email'
							value={data.email}
							onChange={handleOnChange}
							className='form-control w-full' 
							placeholder="Email" 
							aria-label='Email Address'
							required
						/>
						<input type="password" 
							name='password'
							value={data.password}
							onChange={handleOnChange}
							className='form-control w-full' 
							placeholder="Mật khẩu" 
							aria-label='Password'
							required
						/>
						<input type="password" 
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