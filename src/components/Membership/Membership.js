import React from 'react';
import './Membership.css'
const Membership = () => {
    return (
        <div className="membership-main">
            <div className="row align-items-center">
                <h2> Why Become a Member? </h2>
                
                <div className="col-md-3 align-self-center columns">
                    <i class="fas fa-user-nurse fa-6x"></i>
                    <p>Unlimited consultations with world class doctors</p>
                </div>
                <div className="col-md-3 align-self-center columns">
                    <i class="fas fa-hand-holding-medical fa-6x"></i>
                    <p>All the care you need under one roof</p>
                </div>
                <div className="col-md-3 align-self-center columns">
                    <i class="far fa-calendar-alt fa-6x"></i>
                    <p>Unlimited consultations for your children under 5 years (up to 3 children)</p>
                </div>
                <div className="col-md-3 align-self-center columns">
                    <i class="fas fa-heartbeat fa-6x"></i>
                    <p> 25% off all additional services ** </p>
                </div>
                <div className="col-md-12 align-self-center">
                    <button className="btn btn-lg btn-primary"> Become a Member</button>
                </div>
           </div>
        </div>
    );
};

export default Membership;