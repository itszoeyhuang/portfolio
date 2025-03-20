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
                <h2 className='mark1' >“</h2>
                <h2 className='hero-title'>Hi! I'm Zoey!</h2>
                <h2 className='mark2' >“</h2>
            </div>
            <div className="container-main">
                <div className="grid">
                    <div className="col-12" id="hero-intro">
                        <div className="v-gap">
                            <div className="v-flex">
                                {/* Line1 */}
                                <span className="word">
                                    <span>A UX/UI Designer</span>
                                </span>
                                <span className="word">
                                    <span>inspired by</span>
                                </span>
                                <img src={ Line1 } alt='line-1-image' id='line-1-img' ></img>
                                <span>nature, and specialising</span>

                                {/* Line2 */}
                                <span>in interactive design</span>
                                <img src={ Line2 } alt='line-2-image' id='line-2-img'></img>
                                <span>and</span>
                                <span>user experience</span>

                                {/* Line3 */}
                                <span>I'm currently based in Vancouver.</span>
                                <img src={ Line3 } alt='line-3-image' id='line-3-img'></img>
                                <span>With a background in</span>
                                
                                {/* Line4 */}
                                <span>fashion and marketing,</span>
                                <img src={ Line4 } alt='line-4-image' id='line-4-img'></img>

                                {/* Line5 */}
                                <span>I enjoy combining</span>
                                <span>high aesthetic</span>
                                <span>and</span>
                                <span>functionality</span>
                                <span>to life.</span>
                            </div>
                        </div>
                        <Link to='/about'>
                            <button className="btn">
                                <button className="email">
                                    <h6>About Me</h6>
                                </button>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       </div>
       </>
    )
}