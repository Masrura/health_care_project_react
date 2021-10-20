import React from 'react';

const AboutUs = () => {
    return (
        <div style={{ paddingBottom: '3%', backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)' }} className="row">
            <h1 style={{padding:'3%', color:'white'}}> About Us</h1>
            <div className="col-md-6">
                <img src="https://dhakahealthcare.com/assets/images/about-us.jpg" alt="" />
            </div>
            <div className="col-md-6">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <strong>About Us</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>Dhaka Health Care Hospital</strong> is one of the fastest growing hospitals in Shymoli, Dhaka. Dhaka Health Care Hospital always strives to provide the best service to it's patients at an affordable price. This hospital consists of the following departments Emergency, General Surgery, Laparoscopic Surgery, Gyne & Obs, Ear Nose Throat (ENT), Medicine, Urology, Neuro & Spine Surgery, Plastic & Cosmetic Surgery, Dental Surgery & Operation Theatre(OT). Dhaka Health Care Hospital has 24hrs Emergency, Orthopedics, Vascular Surgery, Pharmacy, Ambulance, Physiotherapy, Echo Cardiogram, Colour Dopler, ECG, Digital X-Ray, Ultrasonography, Digital Lab, C-Arm OT, Post Operative Ward, AC/Non-Ac Cabin, 24hrs Lift & much more services. We always stay beside the patients not due to business but as our responsibility.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <strong>Mission</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                Nowadays, almost everywhere patients are not getting the services that they should or deserve due to lack of concern of the authorities to provide better healthcare services. We don't want to walk to their same path rather we want to stand against those so called heathcare organizations. Dhaka Health Care Hospital's mission is to provide world class healthcare services to it's patients at an affordable cost. We want to see our patients are satisfied and happy after taking our services.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <strong>Vision</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <strong>Dhaka Health Care Hospital</strong> wants to see themselves as one of the best hospital in Dhaka & one of the leading hospital in Bangladesh. We want to set an example by providing world class healthcare services to our patients. Dhaka Health Care Hospital will expand it's services & facilities in near future & provide much better services to the patients.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AboutUs;