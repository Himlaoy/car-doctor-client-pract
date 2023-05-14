import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBookings(data)

            })
    }, [])


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>picture</th>
                            <th>name</th>
                            <th>email</th>
                            <th>service</th>
                            <th>price</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow 
                                key={booking._id} 
                                booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}
                                ></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;