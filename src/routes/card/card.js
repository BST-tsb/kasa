import "./card.scss";
import Navbar from "../../components/navbar/navbar"; 
import Footer from "../../components/footer/footer"; 
import Tags from "../../components/tags/tags";
import Slideshow from "../../components/carousel/carousel";
import Host from "../../components/host/host";
import Rate from "../../components/rate/rate";
import Collapse from "../../components/collapse/collapse";
import Data from "../../data/data.json";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./card.scss";

export default function Home() {
    const { id } = useParams();

    const data = Data.find((logement) => logement.id === id);
    let navigate = useNavigate();
    useEffect(()=>{
        if(!data) {
            navigate("/Error");
          }
    },[data, navigate])
      
      
    const tagsHome = data?.tags.map((tags, index) => {
        return <Tags key={index} name={tags} />
    });
    const equipements = data?.equipments.map((equipement, i) => {
        return (
          <ul key={i}>
            <li>{equipement}</li>
          </ul>
        );
      });
      
    
    if(data) {
        return (
            <div className="home">
                <Navbar />
                <main>
                    <section className="cont-carrousel">
                        <Slideshow slide={data.pictures}/>
                    </section>
                    <div className="global">

                    
                        <section className="cont-title-host">
                            <div className="cont-title">
                                <p className="home-title">{data.title}</p>
                                <p className="home-location">{data.location}</p>
                            </div>
                            <div className="tags-cont">
                                {tagsHome}
                            </div>
                        </section>
                        <section className="cont-tag-rate">
                            <Host name={data.host.name} picture={data.host.picture}/>
                            <Rate score={data.rating}/>
                        </section>
                    </div>
                    <section className="cont-collapse">
                        <div className="description">
                            <Collapse title="Description" content={data.description}/>
                        </div>
                        <div className="equipement">
                            <Collapse title="Équipements" content={equipements}/>
                        </div>
                        
                    </section>
                
                
                </main>
                <Footer />
            </div>
        )


       
    }
    
    
}