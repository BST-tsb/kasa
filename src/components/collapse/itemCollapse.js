import { useState } from "react"

export default function ItemCollapse({item}) {
    const [selected, setSelected] = useState(false);
    const toggle = () => setSelected(!selected)
    return (
        <div className="item">
        <div className="title" onClick={() => toggle()}>
            <h3>{item.title}</h3>
            <span>{selected  ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span>
        </div>
        <div className={selected ? 'content show' : 'content'}><p>{item.description}</p></div>
    </div>
    )
}