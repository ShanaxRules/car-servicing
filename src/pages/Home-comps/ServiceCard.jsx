import {  useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {  title, img, price } = service;
    const navigate = useNavigate();

    const handleClick = service =>{
        navigate('/details' , {state: {data : service}})
    }
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl border-[1px] border-gray-300">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl w-[320px] h-[210px]" />
                </figure>
                <div className="mt-5 items-center text-center p-5">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex flex-row justify-between items-center">
                        <h2><p className="text-red-500 font-bold text-xl">Price : ${price}</p></h2>
                        <button onClick={()=>handleClick(service)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                        {/* <Link to={`/checkout/${_id}`}><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button></Link> */}

                    </div>


                </div>
            </div>

        </div>
    );
};

export default ServiceCard;