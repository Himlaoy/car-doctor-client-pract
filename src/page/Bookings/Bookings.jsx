import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`
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
            {
                bookings.map(booking=><BookingRow key={booking._id} booking={booking}></BookingRow> )
            }
        </div>
    );
};

export default Bookings;