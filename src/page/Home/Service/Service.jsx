import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])



    return (
        <div className='pt-6'>
            <div className='text-center space-y-4 w-1/3 mx-auto'>
                <h2 className='text-xl text-rose-500'>Service</h2>
                <p className='text-4xl'>Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div>
                {
                    services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;