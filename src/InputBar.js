import { useState } from 'react';

function InputBar({ handleSubmit }) {
    let [text, setText] = useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(text)
        }}>
            <label>Search amiibos</label>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default InputBar;