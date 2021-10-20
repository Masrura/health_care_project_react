import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )' }}>
            <h1 className="animate__animated animate__bounce"> <strong> Our Services </strong></h1>
            <div className="services">

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="https://praavahealth.com/wp-content/uploads/2020/12/01.jpg" alt="" />
                    </div>
                    <div className="col-md-6 animate-right">
                        <h2>Consultations</h2>
                        <p>
                            Our doctors are able to look after all your healthcare needs. They listen and spend at least 15 minutes with you – every time.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center list">
                    <div className="col-md-6 animate-left">

                        <h2>Diagnostic Services</h2>

                        <p> We provide best-in-class diagnostics including:</p>
                        <ul>
                            <li>250+ lab tests</li>
                            <li>Molecular Cancer Diagnostics</li>
                            <li>COVID-19 test</li>
                            <li>X-rays</li>
                            <li> Ultrasounds</li>
                            <li>Mammographies</li>
                            <li>Echocardiograms</li>
                        </ul>

                    </div>
                    <div className="col-md-6">
                        <img src="https://praavahealth.com/wp-content/uploads/2020/12/PRAAVA-0165-10-09-2020-sujanmap.jpg" alt="" />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="https://praavahealth.com/wp-content/uploads/2020/12/PRAAVA-0119-10-09-2020-sujanmap.jpg" alt="" />
                    </div>
                    <div className="col-md-6 animate-right">

                        <h2> Praava Pharmacy</h2>
                        Our pharmacy stocks all the products you may need: from safe pharmaceuticals to baby products. And best of all, our pharmacy products are now available to order online.

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;