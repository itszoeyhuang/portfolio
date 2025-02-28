import NavBar from "../global/NavBar"
import Footer from "../global/Footer"

import '../global/Home.css'
import '../global/NavBar.css'

export default function Home(){
    return(
       <>
       <NavBar />
       <main className="home">
        <div className="hero-section">
            <h1>Hi! I'm Zoey!</h1>
        </div>
        <div className="intro-section">
            <p>
                A UX/UX engineer inspired by nature, and specialising in interactive design and user experience. I'm currently based in Vancouve. With a background in fashion and marketing, I enjoy combining high aesthetic and functionality to life.
            </p>
            <button>About Me</button>
        </div>
       </main>
       <Footer />
       </>
    )
}