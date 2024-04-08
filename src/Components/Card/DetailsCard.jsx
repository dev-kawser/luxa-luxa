import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsCard = () => {

    const cardData = useLoaderData();
    const { id } = useParams();
    const item = cardData.find((card) => card.id == id);

    const { estate_title, area, price, segment_name, facilities, description, status, image, location } = item

    return (
        <div className="flex p-7 rounded-md lg:flex-row-reverse bg-slate-100 mt-5 lg:mt-10 flex-col gap-12 container md:mx-5 lg:mx-auto mx-2">
            <Helmet>
                <title>LuxuriaLuxe | {segment_name}</title>
            </Helmet>
            <div className="flex items-center justify-center">
                <img className="lg:h-[600px] rounded-xl" src={image} alt="" />
            </div>
            <div>
                <div className="space-y-3">
                    <h2 className="card-title text-4xl font-bold mt-5">{segment_name}</h2>
                    <p className="font-semibold text-xl">Title: {estate_title}</p>
                    <h4 className="text-lg">Location: {location}</h4>
                </div>
                <div className="mt-5 space-y-3">
                    <p className="text-xl">{description}</p>
                    <h4 className="font-medium">Area: {area}</h4>
                </div>
                <div className="flex mt-5 gap-10">
                    <h4 className="font-medium">Price: {price}</h4>
                    <h4 className="font-medium">For: {status}</h4>
                </div>
                <div className="mt-5 space-y-3">
                    <h3 className="text-lg font-semibold">Facilities:</h3>
                    {
                        facilities.map((fc, idx) => <li key={idx}>{fc}</li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;