import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"


export default function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <div id="logo">
                    <a href="https://www.linkedin.com/in/suman-vastrakar/">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFLEeuN_2EAA/profile-displayphoto-shrink_100_100/0/1647781088738?e=1655337600&v=beta&t=E-RO1GdNMvws7--yWpDC4A_AkCKg---1eteeUbV8g0M"
                            style={{ width: "80px", borderRadius: "50%" }} alt="human" />
                    </a>

                </div>
                <ul>
                    <li className="item"><Link to="/">
                        <pre>Home</pre>
                    </Link></li>
                    <li className="item"><a href="#">
                        <pre>Services</pre>
                    </a></li>
                    <li className="item"><a href="#">
                        <pre>About Us</pre>
                    </a></li>
                    <li className="item"><a href="#">
                        <pre>Contact Us</pre>
                    </a></li>
                </ul>
                {/* <div>
            <img className="cartImag" src="" alt="" />
        </div> */}
            </nav>

        </div>
    )
}
