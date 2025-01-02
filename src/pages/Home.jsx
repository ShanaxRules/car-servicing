import { useEffect, useState } from "react";
import About from "./Home-comps/About";
import Banner from "./Home-comps/Banner";
import Black from "./Home-comps/Black";
import MeetTeam from "./Home-comps/MeetTeam";
import PopProducts from "./Home-comps/PopProducts";
import Review from "./Home-comps/Review";
// import ExpertSlider from "./Home-comps/ExpertSlider";
import Services from "./Home-comps/Services";
import WhyUs from "./Home-comps/WhyUs";
import Marquee from "react-fast-marquee";

const Home = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/ReviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);









    return (
        <div>
            <div className="mt-12">
                <Banner></Banner>

            </div>

            <div>
                <About></About>

            </div>

            <div>

                <Services></Services>
            </div>

            <div>
                <Black></Black>
            </div>

            {/* <div>
                <ExpertSlider></ExpertSlider>
            </div> */}
            <div className="mb-36">
                <div className="space-y-8 mb-20">
                    <h1 className="text-orange-500 text-center font-bold">Popular Products</h1>
                    <h1 className="text-black lg:text-4xl md:text-3xl text-3xl text-center font-bold">Browse Our Products</h1>
                    <h1 className="text-gray-800 text-center">Check out our latest products we are selling</h1>
                </div>
                <PopProducts></PopProducts>
            </div>

            <div>
                <MeetTeam></MeetTeam>

            </div>

            <div>
                <WhyUs></WhyUs>



            </div>

            <div>
                <div className="mt-20 mb-32">
                    <div className="space-y-8 mb-20">
                        <h1 className="text-orange-500 text-center font-bold">Testimonial</h1>
                        <h1 className="text-black lg:text-4xl md:text-3xl text-3xl text-center font-bold">What customers say</h1>
                        <h1 className="text-gray-800 text-center">Check out all the reviews we received</h1>
                    </div>
                    <Marquee autoFill={true} speed={100} gradient={true}>
                        {
                            reviews.map(reviewer => <Review key={reviewer.id} reviewer={reviewer}></Review>)
                        }

                    </Marquee>
                </div>
            </div>


        </div>
    );
};

export default Home;