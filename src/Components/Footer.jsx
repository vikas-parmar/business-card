import React from 'react'
import img1 from '../Assets/Twitter.png'
import img2 from '../Assets/Instagram.png'
import img3 from '../Assets/Facebook.png'
import githubLogo from '../Assets/githubLogo.svg'
const Footer = () => {
    return (
        <footer>
            <a href="https://twitter.com/viksa7111">
                <img src={img1} alt="Twitter" className="socials" />
            </a>
            <a href="https://instagram.com/vicky_panwar__?igshid=YmMyMTA2M2Y=">
                <img src={img2} alt="Instagram" className="socials" />
            </a>
            <a href="https://www.facebook.com/viksaa7111/">
                <img src={img3} alt="Facebook" className="socials" />
            </a>
            <a href="https://github.com/viksa7111/">
                <img src={githubLogo} alt="Facebook" className="socials" />
            </a>
        </footer>
    )
}

export default Footer;