import React from 'react';
import { useHistory } from 'react-router';
import './Allservice.css';

const Allservice = (props) => {
    const history = useHistory()
    const { id, name, charge, description, img } = props.allservice
    const handleBooking = () => {
        history.push(`booking`)
    }
    return (

        <div className="col-lg-4 mb-4 allservice">

            <img src={img} alt="" />
            <div className="service-detail">
                <h3>{id}</h3>
                <h3>charge: {charge}</h3>
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={handleBooking} className="service-btn mb-1 rounded">Booking</button>
            </div>

        </div>
    );
};

export default Allservice;