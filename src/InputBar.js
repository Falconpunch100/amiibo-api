import { useState } from 'react';

function InputBar({ handleSubmit }) {
    let [text, setText] = useState("")
    // let [type, setType] = useState("character")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(text)
        }}>
            <label>Search amiibos</label>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }}></input>
            <button type="submit">Search</button>

            {/* <div id="searchtype">
                <div>
                    <label>Character</label>
                    <input type="radio" name="searchtype" id="character" value="character" checked={type === "character"} onChange={(e) => {setType(e.target.value)}}></input>
                </div>
                <div>
                    <label>Game Series</label>
                    <input type="radio" name="searchtype" id="gameseries" value="gameseries" checked={type === "gameseries"} onChange={(e) => {setType(e.target.value)}}></input>
                </div>
                <div>
                    <label>amiibo Series</label>
                    <input type="radio" name="searchtype" id="amiiboseries" value="amiiboseries" checked={type === "amiiboseries"} onChange={(e) => {setType(e.target.value)}}></input>
                </div>
            </div > */}
        </form >
    )
}

export default InputBar;