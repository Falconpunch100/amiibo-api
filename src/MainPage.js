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
                <img alt="amiibo logo" src="/Amiibo-logo.png"></img>
            </header>

            <section id="amiiboCollection">
                {myAmiibos.map((singleAmiibo) => {
                    return (
                        <div className="grid-item">
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

export default MainPage;