import React from "react"
import img from '../Assets/Mail.png'
import img1 from '../Assets/linkedin.png'

export default function MainContent() {
    return (
        <section>
            <h1>Vikas Parmar</h1>
            <h3>Frontend Developer</h3>
            <p className="web--intro">
                <a href="https://viksa7111.github.io/my-portfolio/">
                    Vikas Parmar.website
                </a>
            </p>
            <div className="buttons">
                <a href="mailto:vkparmar003@gmail.com" >
                    <button className="btn" id="email">
                        <img src={img} alt="mail" className="icon" />
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/viksa7111/">
                    <button className="btn">
                        <img src={img1} alt="mail" className="linkedin1" />
                        LinkedIn
                    </button>
                </a>
            </div>
            <h2 className="heading">About</h2>
            <p className="para">I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with security and best
                practices, and am always looking for new things to learn.</p>
            <h2 className="heading">Interests</h2>
            <p className="para">Reading books. Travel geek. Food expert. Music scholar. Internet fanatic.
                Entrepreneur.  Pop culture ninja. Coffee fanatic.</p>
        </section>
    )
}
