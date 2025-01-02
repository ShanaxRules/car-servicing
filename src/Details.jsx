
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Details = () => {

    const name = ["Car wash", "Health insurance", "Car wash", "Health insurance", "Jamaica"]

    const location = useLocation();
    const { data } = location.state || {};

    const {_id , title , price , img} = data;
    console.log(_id);

    const navigate = useNavigate();

    return (
        <div>
            <button className='btn btn-error text-white mb-4' onClick={()=>navigate(-1)}>Back</button>
            <div className="h-[300px] w-full bg-[url('https://i.ibb.co.com/br0Z0dM/checkout.png')] bg-cover bg-center mb-32 flex flex-row justify-start items-center rounded-2xl">
                <h2 className="text-white lg:text-4xl md:text-3xl text-3xl font-bold  ml-4">Service Details</h2>

            </div>
            

            <div className='mb-32 flex lg:flex-row md:flex-col flex-col gap-x-6 gap-y-6 '>
                {/* upper section */}
                <div className='flex-1 flex flex-col gap-y-6'>
                    <img className='h-[400px] rounded-2xl' src={img} alt="" />
                    <h1 className='text-3xl text-black font-bold mb-2'>{title}</h1>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ipsa quidem cum consequatur et ea voluptate deserunt iste quas!</p>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='bg-gray-100 rounded-2xl p-5 flex flex-col justify-center items-center border-t-2 border-orange-500 h-[200px] space-y-2 '>
                            <h1 className='text-gray-800 text-xl font-bold'>Instant Car Service</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
                        </div>
                        <div className='bg-gray-100 rounded-2xl p-5 flex flex-col justify-center items-center border-t-2 border-orange-500 h-[200px] space-y-2'>
                            <h1 className='text-gray-800 text-xl font-bold'>24/7 Quality Service</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
                        </div>
                        <div className='bg-gray-100 rounded-2xl p-5 flex flex-col justify-center items-center border-t-2 border-orange-500 h-[200px] space-y-2'>
                            <h1 className='text-gray-800 text-xl font-bold'>Easy Customer Service</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
                        </div>
                        <div className='bg-gray-100 rounded-2xl p-5 flex flex-col justify-center items-center border-t-2 border-orange-500 h-[200px] space-y-2'>
                            <h1 className='text-gray-800 text-xl font-bold'>Quality Cost Service</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
                        </div>

                    </div>

                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, tempora perspiciatis pariatur officiis, facere delectus perferendis optio, iste quibusdam ipsa doloremque totam. Alias impedit animi sequi unde sit tempore totam eveniet quasi ratione non maxime, praesentium officia neque, consectetur ad fugit veritatis optio quibusdam vero dolorum possimus nesciunt. Eum, odio!</p>

                    <h1 className='text-3xl text-black font-bold mb-2'>3 Simple Steps to Process</h1>
                    <div className='grid lg:grid-cols-3 md_grid-cols-3 grid-cols-1 gap-6'>
                        <div className='border-[1px] border-gray-300 rounded-2xl p-5'>
                            <div className='bg-[#ff3811] p-5 rounded-full text-white w-[24px] h-[24px] flex flex-col justify-center items-center border-8 border-red-100'>
                                <h1 className='text-white'>01</h1>
                            </div>

                            <h1 className='text-black font-bold text-lg'>STEP ONE</h1>
                            <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quia?</p>


                        </div>
                        <div className='border-[1px] border-gray-300 rounded-2xl p-5'>
                            <div className='bg-[#ff3811] p-5 rounded-full text-white w-[24px] h-[24px] flex flex-col justify-center items-center border-8 border-red-100'>
                                <h1 className='text-white'>02</h1>
                            </div>

                            <h1 className='text-black font-bold text-lg'>STEP ONE</h1>
                            <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quia?</p>


                        </div>
                        <div className='border-[1px] border-gray-300 rounded-2xl p-5'>
                            <div className='bg-[#ff3811] p-5 rounded-full text-white w-[24px] h-[24px] flex flex-col justify-center items-center border-8 border-red-100'>
                                <h1 className='text-white'>03</h1>
                            </div>

                            <h1 className='text-black font-bold text-lg'>STEP ONE</h1>
                            <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quia?</p>


                        </div>




                    </div>

                    <div className="h-[650px] w-full bg-[url('https://i.ibb.co.com/51VdPJ6/2.jpg')] bg-cover bg-center mb-32 flex flex-row justify-start items-center rounded-2xl mt-16">


                    </div>



                </div>
                {/* right side section */}
                <div className='flex-1 flex flex-col gap-y-6'>
                    <div className='bg-gray-200 p-5 rounded-2xl'>
                        <h1 className='text-3xl text-gray-800 font-bold mb-6'>Services</h1>
                        {
                            name.map(nam => <div key={nam} className='bg-white rounded-2xl mb-4  hover:bg-orange-600'>
                                <h1 className='text-black font-bold hover:text-white p-3'>{nam}</h1>

                            </div>)
                        }

                    </div>

                    <div className='bg-gray-900 rounded-2xl p-5'>
                        <h1 className='text-white text-2xl font-bold'>Download</h1>
                        <div className='flex flex-row items-center gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='flex flex-col justify-start items-center flex-1 text-left '>
                                <h1 className='text-white text-lg font-bold text-left'>Our Brochure</h1>
                                <p className='text-gray-500 text-left'>Download</p>
                            </div>
                            <div>
                                <button className='bg-[#ff3811] text-white p-2 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='flex flex-col justify-start items-center flex-1 text-left '>
                                <h1 className='text-white text-lg font-bold text-left'>Company Details</h1>
                                <p className='text-gray-500 text-left'>Download</p>
                            </div>
                            <div>
                                <button className='bg-[#ff3811] text-white p-2 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                        </div>

                    </div>

                    <h1 className='text-3xl text-black font-bold'>Price : ${price}</h1>
                    <div>
                        <Link to={`/checkout/${_id}`}><button className='btn bg-[#ff3811] text-white px-5 py-3 rounded-xl w-full'>Proceed Checkout</button></Link>

                    </div>




                </div>








            </div>


        </div>
    );
};

export default Details;