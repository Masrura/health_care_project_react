import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDepartment from '../../hooks/useDepartment';
import './Details.css'

const Details = () => {
    const { deptId } = useParams();
    const [dept, setDept] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});
    

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDept(data));
    }, [])

    console.log('anni1', dept);

    useEffect(() => {
        const foundDept = dept.find(d => d.id === parseInt(deptId));
        setSingleDetails(foundDept);
    }, [dept, deptId])

    return (
        <div className="details-box">
            <img src={singleDetails?.img} alt="" />
            <h2 className="p-3">{singleDetails?.name}</h2>
            {/* <h2>Department of {singleDetails?.department}</h2> */}

            <div>
                <h3 className="p-3" >Overview</h3>
                <p className="p-3">{singleDetails?.description}</p>
                <p className="details_text">{singleDetails?.details}</p>
            </div>
        </div>
    );
};

export default Details;
