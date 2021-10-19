import React from 'react';
import './Department.css'
import { useHistory } from 'react-router';

const Department = (props) => {
    const { id,name, img, description, details } = props.dept;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/department/${id}`);
    }
    
    return (
        <div className="dept">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
            <button className="btn-success" onClick={handleClick}> Learn More </button>
        </div>
    );
};

export default Department;