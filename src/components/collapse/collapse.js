import "./collapse.scss";
import { useState } from "react"

export default function Collapse({title, content}) {
    const [selected, setSelected] = useState(false);
    const toggle = () => setSelected(!selected)
    return (
        <div className="item">
        <div className="title" onClick={() => toggle()}>
            <h3>{title}</h3>
            <span>{selected  ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span>
        </div>
        <div className={selected ? 'content show' : 'content'}><span>{content}</span></div>
    </div>
    )
}
  