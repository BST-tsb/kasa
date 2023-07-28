import Navbar from "../../components/navbar/navbar"; 
import Footer from "../../components/footer/footer"; 
import Banner from "../../components/banner/banner"; 
import Collapse from "../../components/collapse/collapse";
import background from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "./about.scss";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <main>
                <Banner image={background}/>
                <Collapse/>
                
            </main>
            <Footer />
        </div>
    )
}