import React from 'react';
import './Review.css'
const Review = () => {
    return (
    <div className="r-main">
            <h2 style={{color:'white'}}> Our Customer Review</h2>
            <div className="row review-row">
                <div className="col-md-4 r">
                    <img src="review_1.jpg" alt="" />
                </div>
                <div className="col-md-4">
                    <img src="review_2.jpg" alt="" />
                </div>
                <div className="col-md-4">
                    <img src="review_3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Review;