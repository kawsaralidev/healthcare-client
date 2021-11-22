import React, { useEffect, useState } from 'react';
import Allservice from './Allservice';
import './Allservices.css';

const Allservices = () => {
    const [allservices, setAllservices] = useState([])

    useEffect(() => {
        fetch('allservices.json')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-info m-5">Our Services</h1>
            <div className="row allservices">
                {
                    allservices.map(allservice => <Allservice key={allservice.id} allservice={allservice}></Allservice>)
                }
            </div>
        </div>
    );
};

export default Allservices;