import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div id="main">
            <Navbar />
        <div className="name">
            <h1><span>Build Your Dream</span> With Creativity And Quality</h1>
            <p className="details">We’re doing things a little differently. Using technology,
             we’re creating a better kind of insurance that works for you and the world around you.</p>
             <a href="" className="cv-btn">Downlaod</a>
        </div>
        </div>
    )
}

export default Header
