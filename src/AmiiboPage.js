import { useState, useEffect } from 'react';
import InputBar from './InputBar'
import Amiibo from "./Amiibo"
import { getObtainedAmiibos } from "./util/storage.js"
let url = `https://www.amiiboapi.com/api/`

function AmiiboPage({ pageType }) {
    let [amiiboData, setAmiiboData] = useState([])

    function checkAmiibos(pizza) {
        let obtainedAmiibos = getObtainedAmiibos()
        if (obtainedAmiibos) {
            let copyAmiiboData = pizza.slice()
            for (let i = 0; i < obtainedAmiibos.length; i++) {
                const obtained = obtainedAmiibos[i];
                for (let j = 0; j < copyAmiiboData.length; j++) {
                    const singularAmiibo = copyAmiiboData[j];
                    if (singularAmiibo.tail === obtained.tail) {
                        singularAmiibo.obtained = true;
                    }
                }
            }
            setAmiiboData(copyAmiiboData)
        }
    }

    async function handleSubmit(text) {
        const response = await fetch(url + `amiibo/?${pageType}=` + text);
        const data = await response.json()
        if (!data.error) {
            setAmiiboData(data.amiibo)
            checkAmiibos(data.amiibo)
        }
        else {
            alert("No search results found. Try something else.")
        }
    }
    return (
        <section>
            <InputBar handleSubmit={handleSubmit}></InputBar>
            {amiiboData.map((amiibo) => {
                return (
                    <Amiibo key={amiibo.tail} amiibo={amiibo} setAmiiboData={setAmiiboData} allAmiibos={amiiboData} />
                )
            })}
        </section>
    )
}

export default AmiiboPage;