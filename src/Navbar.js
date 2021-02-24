import { Link } from "react-router-dom"

function Navbar() {
    return (
            <nav id="pages">
                <ul className="nav-link">
                    <li id="nav-img-location"><Link to="/"><img id="nav-img" alt="amiibo logo" src="/Amiibo-logo.png"></img></Link></li>
                    <li><Link to="/character">Character</Link></li>
                    <li><Link to="/gameSeries">Game Series</Link></li>
                    <li><Link to="/amiiboSeries">Amiibo Series</Link></li>
                    <li><button className="delete" onClick={() => {
                        let answer = window.confirm("Are you sure you want to remove all of the Amiibos from your collection?", "No")
                        console.log(answer)
                        if (answer) {
                            localStorage.clear()
                        }
                    }}>Delete All</button></li>
                </ul>
            </nav>
    )
}

export default Navbar;