/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <>
        <Helmet>
            <title>LuxuriaLuxe | About</title>
        </Helmet>
        
        <div className="p-6 lg:mt-20 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://i.ibb.co/NyD9m1y/lll.png" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">Ahmed Safi</h4>
                    <p className="dark:text-gray-600">Welcome to LuxuriaLuxe, where luxury meets sophistication and elegance. At LuxuriaLuxe, we are dedicated to curating an unparalleled experience of refined luxury for discerning individuals who appreciate the finer things in life.

                        Our journey began with a passion for craftsmanship and a commitment to excellence. Founded 1992, we set out to redefine luxury by blending timeless elegance with modern innovation. Each product, service, and experience we offer is meticulously crafted to embody the essence of luxury and reflect our unwavering dedication to quality.

                        At the heart of LuxuriaLuxe lies a deep appreciation for artistry and attention to detail. From exquisite handcrafted designs to premium materials sourced from around the globe, every element is thoughtfully curated to ensure the utmost in luxury and sophistication.

                        Driven by a desire to exceed expectations, we strive to create unforgettable moments and elevate everyday experiences. Whether it's indulging in our exclusive collections, exploring our curated destinations, or indulging in personalized services, we invite you to immerse yourself in the world of LuxuriaLuxe.

                        Beyond our commitment to luxury, we also place great emphasis on sustainability and ethical practices. We believe that true luxury extends beyond material possessions and encompasses a responsibility to our planet and communities. That's why we are dedicated to minimizing our environmental footprint and supporting ethical practices throughout our supply chain.

                        At LuxuriaLuxe, we are more than just a purveyor of luxury goods and services — we are curators of an extraordinary lifestyle. Join us on this journey of elegance, sophistication, and timeless beauty.

                        Welcome to the world of LuxuriaLuxe.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;