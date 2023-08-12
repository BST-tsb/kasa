import Navbar from "../../components/navbar/navbar"; 
import Footer from "../../components/footer/footer"; 
import Banner from "../../components/banner/banner"; 
import Collapse from "../../components/collapse/collapse";
import background from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import DataAbout from "../../data/data_about.json";
import "./about.scss";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <main>
                <div className="about">
                    <Banner image={background}/>
                </div>
                
                
                    {DataAbout.map((item) => {
                    return (
                        <div key={item.id}>
                        <Collapse content={item.description} title={item.title} />
                        </div>
                    );
                    })}
                
            </main>
            <Footer />
        </div>
    )
}