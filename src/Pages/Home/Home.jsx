import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const cardData = useLoaderData();

    return (
        <div className="mt-12 container mx-auto">
            <Slider></Slider>
            <Card cardData={cardData}></Card>
        </div>
    );
};

export default Home;