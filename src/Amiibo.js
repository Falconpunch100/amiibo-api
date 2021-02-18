import { addAmiibo, removeAmiibo } from "./util/storage.js"

function Amiibo({ amiibo, setAmiiboData, allAmiibos }) {
    console.log(amiibo.name, amiibo.obtained)
    return (
        <div>
            <h1>{amiibo.character}</h1>
            <h4>Game Series: {amiibo.gameSeries}</h4>
            <h4>Amiibo Series: {amiibo.amiiboSeries}</h4>
            <h6>Release Date: {amiibo.release.na}</h6>
            <img src={amiibo.image} alt={amiibo.name}></img>
            <div id="owned">
            <label>Owned?</label>
            <label htmlFor="toggle"></label>
            <input type="checkbox" name="toggle" id="toggle" checked={amiibo.obtained} onChange={(e) => {
                console.log(e.target.checked)
                let copy = allAmiibos.slice()
                let foundAmiibo = copy.find((oneAmiibo) => {
                    if (oneAmiibo.tail === amiibo.tail) {
                        return true
                    }
                    else {
                        return false;
                    }
                })
                foundAmiibo.obtained = e.target.checked;
                if (foundAmiibo.obtained) {
                    addAmiibo(foundAmiibo)
                }
                else {
                    removeAmiibo(foundAmiibo)
                }
                console.log(copy, foundAmiibo)
                setAmiiboData(copy)
            }}/>
            </div>
        </div>
    )
}

export default Amiibo;