import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {

    const services = useLoaderData();

    const { user } = useContext(AuthContext);
    const [service, setService] = useState(null);

    useEffect(() => {
        if (services) {
            setService(services);
        }
    }, [services]);

    if (!service) {
        return <p>Loading...</p>; // Show loading state until data is available
    }
    const { title, _id, price, img } = service || {}; // Safely destructuring

    const handleCheckOut = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email: email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        };

        console.log(order);

        fetch('https://shan-doc-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            });
    };

    if (!service) {
        return <p>Loading...</p>; // Render loading state until data is available
    }

    return (
        <div className="mb-32 rounded-2xl mt-12">
            <div className="h-[300px] w-full bg-[url('https://i.ibb.co.com/br0Z0dM/checkout.png')] bg-cover bg-center mb-32 flex flex-row justify-start items-center rounded-2xl">
                <h2 className="text-white lg:text-4xl md:text-3xl text-3xl font-bold ml-4">Checkout</h2>
            </div>
            <h2 className="text-3xl text-center mb-20">Book Service: <span className="text-orange-600 font-bold">{title}</span></h2>
            <form className="card-body bg-gray-100 p-5 rounded-2xl" onSubmit={handleCheckOut}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name"
                            defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Service</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email"
                            defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount"
                            defaultValue={`Tk${price}`} className="input input-bordered" required readOnly />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-[#ff3811] text-white btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;
