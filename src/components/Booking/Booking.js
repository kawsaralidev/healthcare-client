import React from 'react';
import { Link } from 'react-router-dom';
import success from "../../images/image/ordersuccess.png"

const Booking = () => {
    return (
        <div>
            <img className="w-25" src={success} alt="" />
            <br />
            <Link to="/home">
                <button className="service-btn rounded ">Go Home</button>
            </Link>
        </div>
    );
};

export default Booking;