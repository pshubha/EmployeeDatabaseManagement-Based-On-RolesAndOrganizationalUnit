//

import React,{useState, useEffect} from 'react'

export const CrudContextOrg = React.createContext();

const RemoveOrg=(props)=>{
    const initialState = JSON.parse(localStorage.getItem('OrganizationList')) || []
    const [data, setData] = useState(initialState);
    

    useEffect(() => {
        localStorage.setItem('OrganizationList', JSON.stringify(data))
    }, [data])

    const removeData = (id) => {
        console.log(id)
        setData(data.filter(d => d.id !== id))
    }

    return (
        <div>
            <CrudContextOrg.Provider value={{ removeData }}>
                {props.children}
            </CrudContextOrg.Provider>
        </div>
    )
}

export default RemoveOrg