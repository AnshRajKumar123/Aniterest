import React from 'react'
import '../ComponentCSS/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="FirstLineSet">
                    <h1>Aniterest</h1>
                    <hr />
                    <span>© <p>1996-2025,</p> Aniterest.com, Inc. or its affiliates</span>
                </div>
                <div className="SecondLineFoot">
                    <Link>
                        <i className="ri-facebook-circle-fill"></i>
                    </Link>
                    <Link>
                        <i className="ri-youtube-fill"></i>
                    </Link>
                    <Link>
                        <i className="ri-twitter-fill"></i>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer