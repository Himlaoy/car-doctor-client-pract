import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Checkout = () => {
    const {user} = useContext(AuthContext)

    const service = useLoaderData()
    const { title, service_id, price,_id ,img} = service
    console.log(service)

    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date= form.date.value
        const email = form.email.value

        const order = {
            customerName:name,
            email,
            price:price,
            date,
            img,
            title,
            service:_id

        }
        console.log(order)

        fetch(`https://car-doctor-server-69.vercel.app/bookings/`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       
    }



    return (

        <div className="  shadow-2xl bg-base-100">
            <h2 className='text-center text-2xl'>Book service: {title}</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dew amount</span>
                            </label>
                            <input type="text" defaultValue={price} name='amount' className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order confirm" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Checkout;