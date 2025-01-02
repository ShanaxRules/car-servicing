
import ReactStars from "react-rating-stars-component";
const PopCards = ({ datas }) => {
    const {image , rating , name , price} = datas;
    console.log(image);

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl border-[1px] border-gray-300">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-[215px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <ReactStars
                        count={rating}
                        color={'#FFa500'}
                        
                        size={24}
                        
                    />
                    <h2 className="card-title">{name}</h2>
                    <p className="text-orange-600 text-xl font-bold">Price : ${price}</p>

                </div>
            </div>

        </div>
    );
};

export default PopCards;