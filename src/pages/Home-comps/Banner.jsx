import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'

const Banner = () => {
    function navigateCarousel(slideNumber) {
        const carousel = document.querySelector('.carousel');
        const targetSlide = document.getElementById(`slide${slideNumber}`);
        carousel.scrollTo({
            top: 0,
            left: targetSlide.offsetLeft,
            behavior: 'smooth'
        });
    }




    return (
        <div className='mb-32'>
            <div className="carousel w-full h-[600px] rounded-2xl ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src={img1}
                        className="w-full" />
                    <div className="absolute h-full left-0 top-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='space-y-7 pl-12'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl text-white font-bold'>Affordable<br></br> Price For Car<br></br> Servicing</h2>
                            <p className='text-white'>We offer the best car servicing in town and help all</p>
                            <div className='flex flex-row gap-x-2'>
                                <button className='text-white btn bg-[#FF3811] px-5 py-3 rounded-lg'>Discover more</button>
                                <button className='btn btn-outline outline-white text-white'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a onClick={() => navigateCarousel(3)} className="btn btn-circle bg-black text-white mr-3">❮</a>
                        <a onClick={() => navigateCarousel(2)} className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full" />
                    <div className="absolute h-full left-0 top-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='space-y-7 pl-12'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl text-white font-bold'>Offering Services<br></br>With Professionals</h2>
                            <p className='text-white'>Professionals get the job done</p>
                            <div className='flex flex-row gap-x-2'>
                                <button className='text-white btn bg-[#FF3811] px-5 py-3 rounded-lg'>Meet the team</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a onClick={() => navigateCarousel(1)} className="btn btn-circle bg-black text-white mr-3">❮</a>
                        <a onClick={() => navigateCarousel(3)} className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full" />
                    <div className="absolute h-full top-0 right-0 flex justify-end items-center bg-gradient-to-r from-[rgba(21, 21, 21, 0.00)] to-[#151515]">
                        <div className='space-y-7 pr-12'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl text-white font-bold text-right'>Ranging all around<br></br> For we are<br></br> Best</h2>
                            <p className='text-white text-right'>Cheapest rate you can find anywhere else</p>
                            <div className='flex flex-row gap-x-2 justify-end'>
                                <button className='text-white btn bg-[#FF3811] px-5 py-3 rounded-lg'>Discover more</button>
                                <button className='btn btn-outline outline-white text-white'>Our Services</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a onClick={() => navigateCarousel(2)} className="btn btn-circle  bg-black text-white mr-3">❮</a>
                        <a onClick={() => navigateCarousel(1)} className="btn btn-circle bg-black text-white">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;