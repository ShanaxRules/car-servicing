import { useLocation, useNavigate } from "react-router-dom";




const Addititional = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const {data} = location.state || {};

    return (
        
        <div className="mt-18 mb-18 min-h-screen flex flex-col justify-center items-center">
            <button className='btn btn-error text-white mb-4' onClick={()=>navigate(-1)}>Back</button>
            <h2 className="text-black text-3xl text-center font-bold">{data.name}</h2>
            <h2 className="text-orange-600 text-2xl text-center">{data.details}</h2>

            
        </div>
    );
};

export default Addititional;