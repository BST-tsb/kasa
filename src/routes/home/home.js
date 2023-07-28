import Navbar from "../../components/navbar/navbar"; 
import Footer from "../../components/footer/footer"; 
import Banner from "../../components/banner/banner"; 
import Gallery from "../../components/gallery/gallery"; 
import background from "../../img/banner.png";
import "./home.scss";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <main>
                <Banner image={background} title={'Chez vous, partout et ailleurs'}/>
                <Gallery />
            </main>
            <Footer />
        </div>
    )
}