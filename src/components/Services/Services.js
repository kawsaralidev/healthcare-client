import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h1 className="m-5 text-info">Our Services</h1>
            <div className="services ">
                <div className="col-lg-6">
                    <img src={'https://t4.ftcdn.net/jpg/02/10/45/39/240_F_210453925_spHdLHUcDJS76oWKzFp4mQeCKW8WisER.jpg'} alt="" />
                    <h3 className="text-info my-3">Our Hospital</h3>
                    <p>Disin Care Hospital is a not-for-profit, 223-bed acute care teaching hospital with a strong emphasis on cardiac care, orthopaedics and sports medicine.As one of the region's top specialty hospitals, Disin care Union Memorial has been caring for members of the community for more than 160 years</p>
                </div>


                <div className=" services-container">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;