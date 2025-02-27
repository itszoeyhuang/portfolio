import { Link } from 'react-router'
import Logo from '../global/logo-v1-vanilla.png'
import '../global/NavBar.css'

export default function NavBar(){
    return(
        <header className='site-header'>
            <div className="container">
                <div className="grid">
                    <div className="col-3">
                        <Link to="/" >
                            <img src={Logo} alt="Home Logo" ></img>
                        </Link>
                    </div>
                    <div className="col-9">
                        <ul>
                            <Link to="/about" >About</Link>
                            <Link to="/work" >Work</Link>
                            <Link to="/contact" >Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}