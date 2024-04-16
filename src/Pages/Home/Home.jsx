import { Helmet } from "react-helmet-async";
import Card from "../../Components/Card/Card";
import { useLoaderData } from "react-router-dom";
import Slide from "../../Components/Slider/Slide";

const Home = () => {

    const cardData = useLoaderData();

    return (
        <div className="lg:mt-12 mt-7 container mx-2 pr-2 lg:mx-auto">
            <Helmet>
                <title>LuxuriaLuxe | Home</title>
            </Helmet>
            
            <Slide></Slide>
            <Card cardData={cardData}></Card>
        </div>
    );
};

export default Home;