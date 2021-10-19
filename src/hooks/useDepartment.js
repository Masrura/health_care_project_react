import { useEffect } from "react";
import { useState } from "react"

const useDepartment = () => {
    const [dept, setDept] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setDept(data));
    }, []);
    return [dept, setDept];
}

export default useDepartment;