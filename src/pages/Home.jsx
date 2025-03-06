import React from 'react'
import { Link } from 'react-router'

import '../global/Home.css'
import '../main.css'

export default function Home(){
    return(
       <>
       <div className="container">
        <div className="grid">
            <div className="col-12" id="title">
                <h2>Hi! I'm Zoey!</h2>
            </div>
            <div className="col-12" id="intro-content">
                
            </div>
        </div>
       </div>

        {/* <section className="hero-section">
            <h2>Hi! I'm Zoey!</h2>
        </section>
        <section className="intro-section" id="intro-section" >
            <div className="section-main">
                <div className="text-intro">
                    <div className="line" id="line-1" >
                        <div>A UX/UI engineer</div>
                        <div>inspired by</div>
                        <div>
                            <img src="../src/images/line-1.jpg" alt="Line 1 Image" width="100px" height="auto" />
                        </div>
                        <div>nature, and specialising</div>
                    </div>
                    <div className="line" id="line-2">
                        <div>in interactive design</div>
                        <div>
                            <img src="../src/images/line-2.jpg" alt="Line 2 Image" width="100px" height="auto" />
                        </div>
                        <div>and</div>
                        <div>user experience</div>
                    </div>
                    <div className="line" id="line-3">
                        <div>I'm currently based in Vancouver</div>
                        <div>
                            <img src="../src/images/line-3.jpeg" alt="Line 3 Image" width="80px" height="60px" />
                        </div>
                        <div>With a background in</div>
                    </div>
                    <div className="line" id="line-4">
                        <div>fashion and marketing,</div>
                        <div>
                            <img src="../src/images/line-4.jpg" alt="Line 4 Image" width="80px" height="60px" />
                        </div>
                    </div>
                    <div className="line" id="line-5">
                        <div>I enjoy combining</div>
                        <div>high aesthetic</div>
                        <div>and</div>
                        <div>functionality</div>
                        <div>to life.</div>
                    </div>
                </div>
            </div>
            <button>
                <Link to="/about" >About Me</Link>
            </button>
        </section>

        <section className="project-section">
            <h1>PROJECTS</h1>
        </section> */}
       </>
    )
}