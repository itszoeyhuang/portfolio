import React from "react";

const Line = ({ text, ImageSrc, ImageAlt, ImageId}) => (
    <>
        <h4>{ text }</h4>
        { imageSrc && <img src={imageSrc} alt={imageAlt} id={imageId} />}
    </>
)

export default Line;