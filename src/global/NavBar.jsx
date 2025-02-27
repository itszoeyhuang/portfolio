import { Link } from 'react-router'

import '../global/NavBar.css'

export default function NavBar(){
    return(
        <header className='site-header'>
            <div className="container">
                <div className="grid">
                    <div className="col-3">
                        <Link to="/" >
                            Logo Here
                        </Link>
                    </div>
                    <div className="col-9">
                        <ul>
                            <Link to="/about" >about</Link>
                            <Link to="/work" >work</Link>
                            <Link to="/contact" >contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}