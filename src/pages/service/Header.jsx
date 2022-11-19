import React from 'react';
import logo from '../../images/outletservice/Ellipse 2.jpg'
import name from '../../images/outletservice/OUTLETCONTROL (1).jpg'
import kLogo from '../../images/outletservice/kLogo.jpg'
import { GoSearch } from 'react-icons/go';
import {AiOutlineRocket } from 'react-icons/ai';
import {TfiBell } from 'react-icons/tfi';


const Header = () => {
    return (
        <div className='header'  >
        
                <div className='d-flex'>
                    <img className='logoImg' src={logo} alt="" />
                    <img className='logoImg' src={name} alt="" />
                </div>
            <div className='d-flex align-items-center '>
                <div className='headericon' ><GoSearch/> <AiOutlineRocket/> <TfiBell/></div>
                <div > <img  className='logoimg' src={kLogo} alt="" /></div>
            </div>
        </div>
    );
};

export default Header;