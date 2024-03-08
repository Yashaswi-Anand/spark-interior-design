import React from 'react'
import logo from '../components/assets/images/logo.png'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div>
            <div className='p-a-10 flex justify-between flex-direction'>
                {/* About Us */}
                <div>
                    <h3>About Us</h3>
                    <p>It is a home interior design such as ceiling, walls, ground tiles</p>
                </div>
                {/* Contact us */}
                <div>
                    <h3>Contact Us</h3>
                    <p>Mobile: +91999999999</p>
                    <p>Email: email@email.com</p>
                    <p>Bihar, Patna</p>
                </div>
                {/* Logo */}
                <div>
                    <div>
                        <img src={logo} alt="Image 1" height={60} width={250} />
                    </div>
                    <div className='flex g-5'>
                        <FaSquareWhatsapp size={40}/>
                        <ImFacebook2 size={35} style={{marginTop: 3}}/>
                        <FaSquareInstagram size={40}/>
                        <FaXTwitter size={35} style={{marginTop: 3}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer