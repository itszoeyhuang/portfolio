import { Link } from 'react-router'

import '../global/NavBar.css'

export default function NavBar(){
    return(
        <header className='site-header'>
            <div className="container">
                <div className="grid">
                    <div className="col-3">
                        logo goes here
                    </div>
                    <div className="col-9">
                        <ul>
                            <li>About</li>
                            <li>Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <nav className='nav-bar'>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/work" >Work</Link>
                <Link to="/contact" >Contact</Link>
            </nav> */}
        </header>
    )
}