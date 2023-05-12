import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Bookings = () => {
    const {user} =useContext(AuthContext)
    // console.log(user)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })
    },[])


    return (
        <div>
            <h3>ok</h3>
        </div>
    );
};

export default Bookings;