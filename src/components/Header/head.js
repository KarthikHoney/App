import React from 'react';
import './head.css';
import { FaFacebookF,FaGoogle,FaYoutube,FaInstagramSquare,FaTwitter   } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { RiContactsBook2Fill,RiLogoutBoxFill } from "react-icons/ri";

const Header = () => {
    return (
        <div className="main">

           <img src='https://wallpapercave.com/wp/wp12482965.jpg' alt='logo' className='logo'/>
            <div className='refContainer'>
                <div className="icon-wrapper">
                    <FaGoogle className='google' />
                    <a className="element" href="https://www.google.com">Google</a>
                </div>

                <div className="icon-wrapper">
                <FaYoutube  className='you'/>
                <a className="element" href="https://www.youtube.com">Youtube</a>
                </div>

                <div className="icon-wrapper">
                <FaFacebookF className='face' />
                <a className="element" href="https://www.facebook.com">Facebook</a>
                </div>

                <div className="icon-wrapper">
                <FaInstagramSquare className='insta' />
                <a className="element" href="https://www.instagram.com">Instagram</a>
                </div>

                <div className="icon-wrapper">
                <FaTwitter className='twit' />
                <a className="element" href="https://www.twitter.com">Twitter</a>
                </div>

            </div>
            <div>
                <ul id='order' className="unorder">
                    <div className='list'>
                        <IoIosHome />
                        <li>Home</li>
                    </div>
                    <div className='list'>
                        <FcAbout />
                        <li>About</li>
                    </div>
                    <div className='list'>
                    <RiContactsBook2Fill />
                        <li>Contact</li>
                    </div>
                    <div className='list'>
                    <RiLogoutBoxFill />
                        <li>Home</li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
