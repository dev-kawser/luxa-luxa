
const Slider = () => {
    return (
        <div>
            <div className="carousel rounded-xl w-full">
                <div id="img1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/60LMGwt/pexels-diego-f-parra-843633.jpg" className="h-[600px] w-full bg-cover bg-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#img3" className="btn btn-circle">❮</a>
                        <a href="#img2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="img2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/nj454xN/pexels-photo-68389.jpg" className="h-[600px] w-full bg-cover bg-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#img1" className="btn btn-circle">❮</a>
                        <a href="#img3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="img3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zn95Bmf/pexels-pixabay-221457.jpg" className="h-[600px] w-full bg-cover bg-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#img2" className="btn btn-circle">❮</a>
                        <a href="#img1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;