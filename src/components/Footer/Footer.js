import React from 'react';

const Footer = () => {
    return (
        <div className="box" style={{ backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)' }}>
            <div className="row">
                <p className="footer-title" style={{ fontSize: '40px', color:'white', fontWeight: '500'}}>Stay Healthy</p>
            </div>
            <div className="row">
                <div className="col-md-6 links">
            
                </div>
                <div className="col-md-4">
                </div>
            </div>
            <div className="row contacts ">
                <div className="col-md-6 get-in-touch align-self-center" style={{ fontWeight: '700', color:'white' }}>
                    <p>GET IN TOUCH</p>
                    <p> something@gmail.com</p>
                    <p>Mobile: +1234567810</p>
                    <p> Skype: some.thing</p>
                </div>
                <div className="col-md-5 ambulance">
                    <img src="https://dhakahealthcare.com/assets/images/feature/24-ambulance.jpg" alt="" />
                    <p className="text-light"> <strong> 24 Hours Ambulance </strong></p>
                </div>

            </div>
        </div>
    );
};

export default Footer;