import React from "react";
import Line from "../Line";

import '../project/Intro.css'

export default function Intro({ title, subtitle, content, listTitle, listItem, img = {} }){
    return(
        <>
        <div className="container">
            <div className="project-intro">
                <div className="intro_title">
                    <h1>{title}</h1>
                    <h6>{subtitle}</h6>
                </div>
                <Line />
                <div className="intro_content">
                    <p>{content}</p>
                </div>
                <div className="intro_solution">
                    <ul>
                        <h6>{listTitle}</h6>
                            <li><p>{listItem}</p></li>
                            <li><p>{listItem}</p></li>
                            <li><p>{listItem}</p></li>
                            <li><p>{listItem}</p></li>
                    </ul>
                </div>
            </div>
            <div className="project-dribble">
                <img src={img.src} alt={img.alt} id={img.id} />
            </div>
        </div>
        </>
    )
}
