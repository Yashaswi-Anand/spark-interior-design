import React from 'react'
import logo from '../components/assets/images/logo.png'
import { FaUserCircle } from "react-icons/fa";

function Header() {
    
    return (
        <div className='flex justify-between p-a-5'>
            <div>
                <img src={logo} alt="Image 1" height={60} width={250} />
            </div>

            <div className='m-a-10'>
                <FaUserCircle size={30}/>
            </div>
        </div>
    )
}

export default Header