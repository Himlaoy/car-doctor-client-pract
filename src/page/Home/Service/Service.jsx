import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])



    return (
        <div className='pt-6 '>
            <div className='text-center space-y-4 w-1/3 mx-auto'>
                <h2 className='text-xl text-rose-500'>Service</h2>
                <p className='text-4xl'>Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;