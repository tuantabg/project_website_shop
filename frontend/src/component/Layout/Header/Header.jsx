import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

// Import Icons =========>
import { BsPersonCircle, BsBasketFill } from "react-icons/bs";

// Import Images =========>
import LogoReact from '../../../Assest/logo.svg';

export const Header = () => {
    return (
        <header className='fixed shadow-md w-full h-16 z-50 left-0 right-0 m-auto bg-white'>
            {/* Desktop */}
            <div className="desktop flex items-center h-full md:px-4 justify-between">
                <Link to={"/"}>
                    <div className="logoHeader h-10">
                        <img src={LogoReact} className="h-full" alt="Logo React" />
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-7">
                    <nav className="flex gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
                        <Link to={"/"}>Trang Chủ</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>Về Chúng Tôi</Link>
                        <Link to={"contact"}>Liên hệ</Link>
                    </nav>

                    <div className="cart text-3xl text-slate-600">
                        <BsBasketFill />
                        <div className="quantity">0</div>
                    </div>

                    <div className="account text-3xl text-slate-600">
                        <BsPersonCircle />
                    </div>
                </div>
            </div>

            {/* Mobile */}
        </header>
    )
}

export default Header;