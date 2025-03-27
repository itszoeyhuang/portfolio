import React from "react";

import '../project/Content.css'

export default function Content({ heading, content}){
    return(
        <>
            <div className="container">
                <div className="intro">
                    <div className="intro_heading">
                        <h5>{heading}</h5>
                    </div>
                    <div className="intro_content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}