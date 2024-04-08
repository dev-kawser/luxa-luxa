/* eslint-disable react/prop-types */

import SingleCard from "./SingleCard";


const Card = ({ cardData }) => {


    return (
        <div className="mt-20">
            <div className="text-center text-4xl font-bold">
                Estates
            </div>
            <div className="grid mt-10 gap-7 grid-cols-1 lg:grid-cols-3">
                {
                    cardData.map(sc => <SingleCard key={sc.id} sc={sc}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Card;