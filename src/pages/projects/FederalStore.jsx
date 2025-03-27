import React from "react";
import Intro from "../../component/project/Intro";
import Content from "../../component/project/Content";
import Wireframes from "../../component/project/Wireframes";

import DribbleFederal from '../../assets/images/the-federal-store/dribble.png'

export default function FederalStore(){
    return(
        <>
        <Intro 
            title="FEDERAL STORE MOBILE REDESIGN"
            subtitle="Refining users' mobile ordering experience."
            content={[
                "The mobile app redesign mockup project for the Vancouver based cafe is mainly to enhance user’s mobile ordering experience, also generating more online sales for the café.",
                "Started by identifying the challenges for the store mobile experience, the site struggles with limited mobile optimisation such as unclear categorisation leading customers facing difficulty in getting the pastries overview and ordering."
            ]}
            listTitle="What I Did"
            listItems={["Figma", "HTML", "CSS", "Javascript"]}
            img={{ 
                src: DribbleFederal, 
                alt: "The Federal Store Dribble Image", 
                id: "dribble-federal" }} 
            />
            <Content
                heading="Wireframe & Prototype Creating"
                content="The low fidelity wireframes and prototypes were created using insights from user study and researches. The redesign shows clear cake categorisation by flavours with filter option implemented, also enhanced with icons and infographics. The wireframes aim to reduce excessive scrolling and actions like adding item to the cart etc."
            />
            <Wireframes 
                images={[
                    {}
                ]}
            />
        </>
    )
}