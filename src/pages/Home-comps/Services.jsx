import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shan-doc-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])



    return (

        <div className="mt-14 mb-16">

            <div className="space-y-5 mb-16">
                <h2 className="lg:text-2xl md:text-xl text-xl text-orange-700 font-bold text-center">Services</h2>
                <h2 className="lg:text-5xl md:text-4xl text-3xl text-black font-bold text-center">Our Service Area</h2>
                <h2 className="text-center text-gray-500">We offer a wide range of services that helps us shape the possibilities for our customer needs.</h2>
                <div className="flex flex-row justify-center">
                    {
                       services.length==0 && <span className="loading loading-spinner text-error text-center"></span>
                    }
                    
                </div>
            </div>


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">

                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;