import { Link } from 'react-router'

import NavBar from "../global/NavBar"
import Footer from "../global/Footer"

import '/src/main.css'
import '../global/Home.css'
import '../global/NavBar.css'

export default function Home(){
    return(
       <>
       <NavBar />
       <main className="home">
        <section className="hero-section">
            <h2>Hi! I'm Zoey!</h2>
        </section>
        <section className="col-3" id="intro-section" >
            <div className="section-main">
                <div className="grid">
                    <div className="col-12" >
                        <div>A UX/UI engineer</div>
                        <div>inspired by</div>
                        <div>
                            <img src="../src/images/line-1.jpg" alt="Line 1 Image" width="100px" height="auto" />
                        </div>
                        <div>nature, and specialising</div>
                        <div>in interactive design</div>
                        <div>
                            <img src="../src/images/line-2.jpg" alt="Line 2 Image" width="100px" height="auto" />
                        </div>
                        <div>and</div>
                        <div>user experience</div>
                        <div>I'm currently based in Vancouver</div>
                        <div>
                            <img src="../src/images/line-3.jpeg" alt="Line 3 Image" width="80px" height="60px" />
                        </div>
                        <div>With a background in</div>
                        <div>fashion and marketing,</div>
                        <div>
                            <img src="../src/images/line-4.jpg" alt="Line 4 Image" width="80px" height="60px" />
                        </div>
                        <div>I enjoy combining</div>
                        <div>high aesthetic</div>
                        <div>and</div>
                        <div>functionality</div>
                        <div>to life.</div>
                    </div>
                </div>
                
            </div>
            {/* <p>A UX/UX engineer inspired by nature, and specialising in interactive design and user experience. I'm currently based in Vancouve. With a background in fashion and marketing, I enjoy combining high aesthetic and functionality to life.</p> */}
            <button>
                <Link to="/about" >About Me</Link>
            </button>
         </section>
         <section className="project-section">
            <h1>PROJECTS</h1>
         </section>
       </main>
       <Footer />
       </>
    )
}