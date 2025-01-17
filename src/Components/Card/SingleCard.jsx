/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SingleCard = ({ sc }) => {

    const { id, estate_title, price, status, image, location } = sc

    return (
        <div className="hover:scale-105">
            <div data-aos="fade-up" className="card bg-base-100 shadow-xl">
                <figure><img className="lg:h-96" src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <h4 className="text-lg font-medium">Location: {location}</h4>
                    <div className="flex justify-between">
                        <h4 className="font-medium">Price: <span className="text-green-500">{price}</span></h4>
                        <h4 className="font-medium">For: {status}</h4>
                    </div>
                    <Link to={`/card/${id}`} className="card-actions mt-3 justify-end">
                        <button className="btn btn-primary">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;