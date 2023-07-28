import "./card.scss";
import Navbar from "../../components/navbar/navbar"; 
import Footer from "../../components/footer/footer"; 
import Tags from "../../components/tags/tags";
import Carousel from "../../components/carousel/carousel";
import Host from "../../components/host/host";
import Rate from "../../components/rate/rate";
import Data from "../../data/data.json"
import { useParams, Navigate } from "react-router-dom";

import "./card.scss";

export default function Home() {
    const { id } = useParams();

    const data = Data.find((logement) => logement.id === id);
    const tagsHome = data.tags.map((tags, index) => {
        return <Tags key={index} name={tags} />
    });
    
    if(!data) {
        <Navigate replace to="/about" />
    }
    else {
        return (
            <div className="home">
                <Navbar />
                <main>
                    <section className="cont-carrousel">
                        <Carousel slide={data.pictures}/>
                    </section>
                    <section className="cont-title-host">
                        <div className="cont-title">
                            <p className="home-title">{data.title}</p>
                            <p className="home-location">{data.location}</p>
                        </div>
                        <Host name={data.host.name} picture={data.host.picture}/>
                    </section>
                    <section className="cont-tag-rate">
                        <div className="tags-cont">
                            {tagsHome}
                        </div>
                        <Rate score={data.rating}/>
                    </section>
                    <section className="cont-collapse">

                    </section>
                
                
                </main>
                <Footer />
            </div>
        )
    }
    
}