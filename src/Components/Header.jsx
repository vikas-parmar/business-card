import React from "react";
import img1 from '../Assets/dp1.jpeg';

const Header = () => {
    return (
        <header>
            <img src={img1} alt="Profile Face" className="header--profile" />
        </header>
    )
}

export default Header;