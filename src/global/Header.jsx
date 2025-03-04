import React from 'react'
import { Link } from 'react-router'
import ThemeToggle from '../component/Toggle'

import '../global/Header.css'
import '../main.css'


export default function Header(){
    return(
        <header className='site-header'>
            <div className="container">
                <div className="grid">
                    <div className="col-3" id="home-logos" >
                        <Link to="/">
                            <img src="../public/logo-v1-vanilla.png" alt="Home Logo" id="z-logo" />
                        </Link>
                        <Link to="/">
                            <img src="../src/images/itszoeyhuang.png" alt="Home Logo" id="zoey-logo" />
                        </Link>
                    </div>
                    <div className="col-9">
                        <ul>
                            <Link to="/about" >about</Link>
                            <Link to="/work" >work</Link>
                            <Link to="/contact" >contact</Link>
                            <ThemeToggle />
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}