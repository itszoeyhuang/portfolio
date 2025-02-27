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
       </main>
       <Footer />
       </>
    )
}