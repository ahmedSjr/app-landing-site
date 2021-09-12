import React, {useState} from 'react'
import logo from '../img/logo.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        } 
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className-={nav ? 'nav active' : 'nav'}>
            <a href="" className='logo'>
                <img src={logo} alt="logo image" style={{ 'width': '50px', 'height': '50px' }} />
            </a>
            <input type="checkbox" className='menu-btn' id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#presentaion">UI </a></li>
                <li><a href="#">Dwonload</a></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
