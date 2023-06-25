import NavBar from "./Navbar"

export default function JumboTron(){
    return(
        <div className="jumboTron" id="home">
            <NavBar/>
            <div className="jumboTron-text">
                <h1>Yenthly Devolder</h1>
                <h2>Developer, Designer, Student</h2>
            </div>
        </div>
    )
}