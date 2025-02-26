import NavBar from "../global/NavBar"
import Footer from "../global/Footer"

import '../global/Home.css'
import '../global/NavBar.css'

export default function Home(){
    return(
       <>
       <NavBar />
       <main className="home">
        <h1>This is Home Page</h1>
        </main>
       <Footer />
       </>
    )
}