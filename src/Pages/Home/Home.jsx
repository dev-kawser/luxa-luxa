import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const cardData = useLoaderData();

    return (
        <div className="lg:mt-12 mt-7 container mx-2 lg:mx-auto">
            <Slider></Slider>
            <Card cardData={cardData}></Card>
        </div>
    );
};

export default Home;