import Slider from "react-slick";
import MeetCard from "./MeetCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetTeam = () => {


    const teams = [
        {
            image: "https://i.ibb.co.com/PMfKdFx/2.jpg",
            name: "James Wang",
            specialization: "Car Engine Expert",
        },
        {
            image: "https://i.ibb.co.com/4fYkGdC/3.jpg",
            name: "Jonas Told",
            specialization: "Car Wash Expert",
        },
        {
            image: "https://i.ibb.co.com/mbDBxMH/1.jpg",
            name: "Mohammad Jibran",
            specialization: "Mechanical Engineer",
        },
        {
            image: "https://i.ibb.co.com/HFJcy4H/person.jpg",
            name: "Tandron Smith",
            specialization: "Battery Worker",
        }

    ]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" , borderRadius:"100%" , color: "white" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" , borderRadius:"100%" , color: "white" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div>
            <div className="space-y-8 mb-32">
                <h1 className="text-orange-500 text-center font-bold">Team</h1>
                <h1 className="text-black lg:text-4xl md:text-3xl text-3xl text-center font-bold">Meet our Teams</h1>
                <h1 className="text-gray-800 text-center">Check out who will deal with the services</h1>
                <Slider {...settings} className="mx-10">
                    {
                        teams.map(team => <MeetCard key={teams.name} person={team}></MeetCard>)
                    }
                </Slider>





            </div>

        </div>
    );
};

export default MeetTeam;