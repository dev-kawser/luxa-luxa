

const Gallery = () => {

    return (
        <section className="py-6 mt-5 dark:bg-gray-100 dark:text-gray-900">
            <div>
                <h1 className="my-5 font-bold text-center text-red-500 lg:text-5xl text-3xl">
                    Gallery
                </h1>
            </div>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src="https://i.ibb.co/TcmGcYd/penthouse.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/6Rrz4Sz/Villa.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/jJHrt7j/Private-Island.webp" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/4JPJwNW/Resort.webp" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/jvm87x1/Mansion.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/L02g4mZ/floridapanhandlehomewaterfront.jpg" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
            </div>
        </section>
    );
};

export default Gallery;