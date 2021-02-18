import { Link } from "react-router-dom"
import { getObtainedAmiibos, removeAmiibo } from "./util/storage.js"
import { useEffect, useState } from "react"
import "./MainPage.css"

function MainPage() {
    let [myAmiibos, setMyAmiibos] = useState([])
    useEffect(() => {
        setMyAmiibos(getObtainedAmiibos())
    }, [])

    return (
        <>
            <header>
                <img src="/Amiibo-logo.png"></img>
            </header>
            <nav id="pages">
                <ul>
                    <li><Link to="/character">Character</Link></li>
                    <li><Link to="/gameSeries">Game Series</Link></li>
                    <li><Link to="/amiiboSeries">Amiibo Series</Link></li>
                </ul>
            </nav>

            <section id="amiiboCollection">
                {myAmiibos.map((singleAmiibo) => {
                    return (
                        <div class="grid-item">
                            <h1>{singleAmiibo.character}</h1>
                            <h4>Amiibo Series: {singleAmiibo.amiiboSeries}</h4>
                            <h6>Release Date: {singleAmiibo.release.na}</h6>
                            <div className="amiibo-image"><img src={singleAmiibo.image} alt={singleAmiibo.name}></img></div>

                            <button className="delete" onClick={(e) => {
                                removeAmiibo(singleAmiibo)
                                setMyAmiibos(getObtainedAmiibos())
                            }}>Delete</button>
                        </div>
                    )
                })}

            </section>
        </>
    )
}
//Get array from LocalStorage and map over the array

export default MainPage;