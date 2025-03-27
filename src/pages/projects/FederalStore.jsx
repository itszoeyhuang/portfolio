import React from "react";
import Intro from "../../component/project/Intro";

import DribbleFederal from '../assets/images/the-federal-store/dribble.png'

export default function FederalStore(){
    return(
        <>
        <Intro title="FEDERAL"/> 
        <Intro subtitle="Refining users' mobile ordering experience." />
        <Intro content="The mobile app redesign mockup project for the Vancouver based cafe is mainly to enhance user’s mobile ordering experience, also generating more online sales for the café. " />
        <Intro images={[
            { src:DribbleFederal}
        ]} />
        </>
    )
}