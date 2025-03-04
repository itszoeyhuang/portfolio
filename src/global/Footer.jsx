import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

import '../global/Footer.css'

export default function Footer(){
    return(
        <>
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="col-4">
                        <a href="https://www.linkedin.com/in/itszoeyhuang/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://github.com/itszoeyhuang" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://www.instagram.com/itszoeyhuang/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}