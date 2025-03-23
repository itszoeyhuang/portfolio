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
        <div className="container-main">
            <div className="title">
                <h2 className="mark1">"</h2>
                <h2 className='title-hero'>Hi! I'm Zoey!</h2>
                <h2 className="mark2">"</h2>
            </div>
            <div className="hero-intro">
                <div className="intro-line">
                    <span className='emphasis'><h6>A UX UI Designer</h6></span>
                    <span><h6>inspired by</h6></span>
                    <img src={ Line1 } alt='line-1-image' id='line-1-img' ></img>
                    <span><h6>nature, and specialising</h6></span>
                </div>
                <div className="intro-line">
                    <span><h6>in interactive design</h6></span>
                    <img src={ Line2 } alt='line-2-image' id='line-2-img'></img>
                    <span><h6>and</h6></span>
                    <span className='emphasis'><h6>user experience</h6></span>
                </div>
                <div className="intro-line">
                    <span><h6>I'm currently based in Vancouver.</h6></span>
                    <img src={ Line3 } alt='line-3-image' id='line-3-img'></img>
                    <span><h6>With a background in</h6></span>
                </div>
                <div className="intro-line">
                    <span><h6>fashion and marketing,</h6></span>
                    <img src={ Line4 } alt='line-4-image' id='line-4-img'></img>
                </div>
                <div className="intro-line">
                    <span><h6>I enjoy combining</h6></span>
                    <span className='emphasis'><h6>high aesthetic</h6></span>
                    <span><h6>and</h6></span>
                    <span className='emphasis'><h6>functionality</h6></span>
                    <span><h6>to life.</h6></span>
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
    </>
    )
}