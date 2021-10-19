import React from 'react';
import useDepartment from '../../hooks/useDepartment';
import Department from '../Department/Department';
import './Departments.css'
const Departments = () => {
    const [dept, setDept] = useDepartment();
    return (
        <div>
            <h2 style={{paddingTop:"3%"}}> Our Departments</h2>
            <div className="row dept-main">
                {
                    dept.map(d =>
                        <div className="col-md-4 justify-content-center dept-box">
                            <Department
                                key={d.id}
                                dept={d}
                            ></Department>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Departments;