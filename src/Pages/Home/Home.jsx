import { Helmet } from "react-helmet-async";
import Card from "../../Components/Card/Card";
import { useLoaderData } from "react-router-dom";
import Slide from "../../Components/Slider/Slide";
import States from "../../Components/States/States";
import Gallery from "../../Components/Gallery/Gallery";

const Home = () => {

    const cardData = useLoaderData();

    return (
        <div className="lg:mt-12 mt-7 container mx-2 pr-2 lg:mx-auto">
            <Helmet>
                <title>LuxuriaLuxe | Home</title>
            </Helmet>
            
            <Slide></Slide>
            <Card cardData={cardData}></Card>
            <States></States>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;