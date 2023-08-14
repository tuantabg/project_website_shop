import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

// Import Icons =========>
import { BsPersonCircle, BsBasketFill } from "react-icons/bs";

// Import Images =========>
import LogoReact from '../../../assest/logoReact.svg';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(preve => !preve)
    }

    return (
        <header className='fixed shadow-md w-full h-16 z-50 left-0 right-0 m-auto bg-white'>
            {/* Desktop */}
            <div className="desktop flex items-center h-full md:px-4 justify-between">
                <Link to={"/"}>
                    <div className="logoHeader h-10">
                        <img src={LogoReact} className="h-full" alt="Logo React" />
                    </div>
                </Link>

                <div className="flex relative items-center gap-4 md:gap-7">
                    <nav className="main-menu flex gap-4 md:gap-6 text-base hidden md:flex">
                        <Link to={"/"}>Trang Chủ</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>Về Chúng Tôi</Link>
                        <Link to={"contact"}>Liên hệ</Link>
                    </nav>

                    <div className="cart text-3xl cursor-pointer text-slate-600">
                        <BsBasketFill />
                        <div className="quantity">0</div>
                    </div>

                    <div className="account text-3xl cursor-pointer text-slate-600" onClick={handleShowMenu}>
                        <BsPersonCircle />
                        {
                            showMenu && (
                                <div className='account-list absolute right-0 bg-white py-1 px-1 shadow drop-shadow-md'>
                                    <ul className='nav whitespace-nowrap'>
                                        <li className="li-item cursor-pointer">
                                            <Link to={"newProduct"}>Sản phẩm mới</Link>
                                        </li>
                                        <li className="li-item cursor-pointer">
                                            <Link to={"login"}>Đăng nhập</Link>
                                        </li>
                                    </ul>
                                    <p>Chưa có tài khoản? <Link to={"signup"}>Đăng ký</Link></p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Mobile */}
        </header>
    )
}

export default Header;