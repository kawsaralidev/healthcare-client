import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const { id, img, name, specialist } = props.doctor
    return (
        <div className="col-lg-3 doctor p-4 col-sm-6 border rounded  ">
            <div className=" ">
                <img className="w-100 rounded" src={img} alt="" />
                <h5>Id: {id}</h5>
                <h4>Name: {name}</h4>
                <h4>{specialist}</h4>
            </div>
        </div>
    );
};

export default Doctor;