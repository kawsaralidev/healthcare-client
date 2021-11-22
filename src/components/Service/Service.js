import React from 'react';

import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { img, name } = props.service


    return (
        <div className="service col-sm-12 ">
            <img src={img} alt="" />
            <div className="pb-3">

                <h4> {name}</h4>
                <Link to="/allservices">
                    <button className="service-btn rounded ">Details</button>
                </Link>
            </div>


        </div>
    );
};

export default Service;