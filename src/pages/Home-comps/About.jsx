
import image from "../../assets/images/about_us/person.jpg"
import image2 from "../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="mb-32">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-y-24 lg:gap-y-0 md:gap-y-0">
                   <div className="lg:w-1/2 w-full relative mb-8">
                        <img src={image} alt="" className="rounded-2xl w-4/5 h-[470px]" />
                        <img src={image2} alt="" className="rounded-2xl w-1/2 absolute lg:right-4 md:right-4 right-5 top-1/2 h-[332px] border-8 border-white" />
                   </div>
                    <div className="lg:w-1/2 w-full space-y-7">
                        <h3 className="lg:text-2xl md:text-xl text-xl text-orange-700 font-bold">About us</h3>
                        <h1 className="text-5xl font-bold">We are qualified<br></br> & of experience<br></br> in this field</h1>
                        <p className="py-6">
                            We will provide the best service there is and ensure you are always in the good spot. Our Services ranges from a lot of different aspects and we got you covered for anything that your mind desires.
                        </p>
                        <button className="btn bg-[#ff3811] px-5 py-3 rounded-lg text-white">Get More Info</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;