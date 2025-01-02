import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const url = `https://shan-doc-server.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = id =>{
        // const proceed = confirm('Are you sure you want to delete?');
        let proceed=false;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shan-doc-server.vercel.app/bookings/${id}` , {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        const remaining = bookings.filter(booking=>booking._id!=id);
                        setBookings(remaining);
                    }
                })
            }
          });
        if (proceed){
            fetch(`https://shan-doc-server.vercel.app/bookings/${id}` , {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    const remaining = bookings.filter(booking=>booking._id!=id);
                    setBookings(remaining);
                }
            })

        }
    }

    const handleBookingConfirm = id =>{
        fetch(`https://shan-doc-server.vercel.app/bookings/${id}` , {
            method : 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                //updateState
                const remaining = bookings.filter(booking=>booking._id!=id);
                const updated = bookings.find(booking =>booking._id ==id);
                updated.status = 'confirm'
                const newBookings = [updated , ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <h2>Your bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}>     
                            </BookingRow>)
                        }
                      
                       
                        
                       
                      
                    </tbody>
                
                </table>
            </div>
        </div>
    );
};

export default Bookings;