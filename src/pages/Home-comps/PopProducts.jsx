import { useEffect, useState } from "react";
import PopCards from "./PopCards";

const PopProducts = () => {

    const [datas , setDatas] = useState([]);

    useEffect( ()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    }, [])

    console.log(datas.image);


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {
                datas.map(data=><PopCards key={data.id} datas={data}></PopCards>)
            }


        </div>
    );
};

export default PopProducts;