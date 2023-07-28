import Card from "../card/card"; 
import "./gallery.scss";
import data from '../../data/data';

export default function Gallery() {

    return (
        <div className='main-gallery'>

            {data.map(datas => {
                return (
                    <Card
                        key={datas.id}
                        id={datas.id}
                        title={datas.title}
                        cover={datas.cover}
                    />
                )
            })}
        </div>
    )
}