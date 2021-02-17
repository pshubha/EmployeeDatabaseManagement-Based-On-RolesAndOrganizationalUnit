//Remove Employee

import React,{useState, useEffect} from 'react'

export const CrudContextEmp = React.createContext();

const RemoveEmp=(props)=>{
    const initialState = JSON.parse(localStorage.getItem('EmployeeList')) || []
    const [data, setData] = useState(initialState);
    

    useEffect(() => {
        localStorage.setItem('EmployeeList', JSON.stringify(data))
    }, [data])

    const removeData = (id) => {
        console.log(id)
        setData(data.filter(d => d.id !== id))
    }

    return (
        <div>
            <CrudContextEmp.Provider value={{ removeData }}>
                {props.children}
            </CrudContextEmp.Provider>
        </div>
    )
}

export default RemoveEmp
