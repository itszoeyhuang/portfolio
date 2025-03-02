import { Link } from 'react-router'
import { Classic } from "@theme-toggles/react"

import '../global/NavBar.css'

export default function NavBar(){
    return(
        <header className='site-header'>
            <div className="container">
                <div className="grid">
                    <div className="col-3" id="home-logos" >
                        <Link to="/">
                            <img src="../public/logo-v1-vanilla.png" alt="Home Logo" />
                        </Link>
                        <Link to="/">
                            <img src="../src/images/itszoeyhuang.png" alt="Home Logo" />
                        </Link>
                    </div>
                    <div className="col-9">
                        <ul>
                            <Link to="/about" >about</Link>
                            <Link to="/work" >work</Link>
                            <Link to="/contact" >contact</Link>
                        </ul>
                    </div>
                    <Classic duration={750} />
                </div>
            </div>
        </header>
    )
}