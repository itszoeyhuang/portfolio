import React from 'react'
import { Link } from 'react-router'
import Line1 from '../assets/images/line-1.jpeg'
import Line2 from '../assets/images/line-2.jpeg'
import Line3 from '../assets/images/line-3.jpeg'
import Line4 from '../assets/images/line-4.jpeg'

import '../global/Home.css'
import '../main.css'

export default function Home(){
    return(
       <>
       <div className="container">
        <div className="grid">
            <div className="col-12" id="title">
                <h2 id='mark1' >“</h2>
                <h2>Hi! I'm Zoey!</h2>
                <h2 id='mark2' >“</h2>
            </div>
            <div className="container-main">
                <div className="grid">
                    <div className="col-12" id="hero-intro">
                        <div className="v-gap">
                            <div className="v-flex">
                                {/* Line1 */}
                                <div className="word">
                                    <h4>A UX/UI Designer</h4>
                                </div>
                                <div className="word">
                                    <h4>inspired by</h4>
                                </div>
                                <img src={ Line1 } alt='line-1-image' id='line-1-img' ></img>
                                <h4>nature, and specialising</h4>

                                {/* Line2 */}
                                <h4>in interactive design</h4>
                                <img src={ Line2 } alt='line-2-image' id='line-2-img'></img>
                                <h4>and</h4>
                                <h4>user experience</h4>

                                {/* Line3 */}
                                <h4>I'm currently based in Vancouver.</h4>
                                <img src={ Line3 } alt='line-3-image' id='line-3-img'></img>
                                <h4>With a background in</h4>
                                
                                {/* Line4 */}
                                <h4>fashion and marketing,</h4>
                                <img src={ Line4 } alt='line-4-image' id='line-4-img'></img>

                                {/* Line5 */}
                                <div>I enjoy combining</div>
                                <h4>high aesthetic</h4>
                                <h4>and</h4>
                                <h4>functionality</h4>
                                <h4>to life.</h4>
                            </div>
                        </div>
                        <Link to='/about'>
                            <div className="btn">
                                <div className="btn-text">
                                    <p>About Me</p>
                                </div>
                                <div className="btn-wrap"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       </div>
       </>
    )
}