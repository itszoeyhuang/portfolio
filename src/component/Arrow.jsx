import React from "react";
import { Link } from "react-router"

export default function Arrow( { pathTo } ){
    return(
        <Link to={pathTo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="16" viewBox="0 0 53 16" fill="none">
            <path d="M52.7071 8.70711C53.0976 8.31659 53.0976 7.68342 52.7071 7.2929L46.3431 0.928936C45.9526 0.538412 45.3195 0.538412 44.9289 0.928936C44.5384 1.31946 44.5384 1.95263 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM-8.74228e-08 9L52 9L52 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F6F2EC" />
        </svg>
        </Link>
    )
}