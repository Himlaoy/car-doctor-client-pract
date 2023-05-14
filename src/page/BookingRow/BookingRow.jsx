
import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, bookings, setBookings }) => {

    const { customerName, service, img, title, _id, price, email, status } = booking
    // console.log(booking)


    const handleDelete = (id) => {
        console.log('delete')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = bookings.filter(booking._id !== id)
                            setBookings(remaining)
                        }
                    })

            }
        })

    }

    const handleUpdate =(id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify({status:"confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount>0){
                const remaining = bookings.filter(book=>book._id !== id)
                const updateBook = bookings.find(book=>book._id === id)
                updateBook.status= "confirm"
                const newUpdatedBook = [updateBook, ...remaining]
                setBookings(newUpdatedBook)
            }
        })

    }

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{price}</td>
            <th>
                { status=== "confirm" ? <span className='text-primary font-bold'>Confirmed</span>:
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;