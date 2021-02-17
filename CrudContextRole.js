//

import React,{useState, useEffect} from 'react'

export const CrudContextRole = React.createContext();

const RemoveRole=(props)=>{
    const initialState = JSON.parse(localStorage.getItem('RolesList')) || []
    const [data, setData] = useState(initialState);
    

    useEffect(() => {
        localStorage.setItem('RolesList', JSON.stringify(data))
    }, [data])

    const removeData = (id) => {
        console.log(id)
        setData(data.filter(d => d.id !== id))
    }

    return (
        <div>
            <CrudContextRole.Provider value={{ removeData }}>
                {props.children}
            </CrudContextRole.Provider>
        </div>
    )
}

export default RemoveRole