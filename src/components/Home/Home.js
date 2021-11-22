import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <Banner></Banner>
                <Services></Services>
                <Doctors></Doctors>
            </div>
        </div>
    );
};

export default Home;