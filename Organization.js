//List Of Organization
import React, { useState, useEffect, useMemo, useContext } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { CrudContextOrg } from './CrudContextOrg';


function Organization() {
    // const org =[{ Orgn: 'HR', size: 1, desc: 'Hiring' }, { Orgn: 'Finance', size: 3, desc: 'Everything you need to manage your operation and finance' }, { Orgn: 'Marketing', size: 2, desc: 'React to customer' }, { Orgn: 'Customer Support', size: 3, desc: 'Support remote customer instantly' }]
    const [datas, setData] = useState([])
    const {removeData} = useContext(CrudContextOrg)
    // const [add, setAdd] = useState('false');
    let user = JSON.parse(localStorage.getItem('EmployeeList')) || [];


    useEffect(() => {
        
        let Organization = JSON.parse(localStorage.getItem('OrganizationList'));
        if (Organization == null) {
            setData([])
        } else {
            setData(Organization);
        }
    }, [])


    return (
        <div className="container" style={{ backgroundColor: '#e2e2e2', width: '70%', marginTop: '80px' }}>
            <div>
                <h1 style={{ paddingTop: '30px', marginRight: '500px', fontFamily: ('Papyrus', 'Fantasy'), textDecoration: 'underline' }}>Organizational Unit :</h1>
            </div>
            <div style={{ padding: '10px', float: 'right' }}>
                <NavLink to='/main' className='btn btn-outline-dark'>Go Back</NavLink>
            </div>
            <div style={{ float: 'right', paddingTop: '10px' }}>
                <Link to={{ pathname: '/addOrganization', newId: datas.length }} className='btn btn-info'> + Add Organization</Link>
            </div>
            <hr></hr>
            <br></br>

            <div>
                <h3>List of Organization</h3>
            </div>
            <br></br>
            <div>
                {
                    datas.length ?
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name of Organization</th>
                                    <th>Size Of Organization Unit</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas.map((o, i) => {
                                        return (
                                            <tr key={o.id}>
                                                <td>{i + 1}</td>
                                                <td>{o.Orgn}</td>
                                                <td>{o.size}</td>
                                                <td>{o.desc}</td>
                                                <td><button className='btn btn-dark' onClick={()=>removeData(o.id)}><span aria-hidden="true">&times;</span></button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>


                        </table> : <div><br></br>
                            <h3>No current Organization to display.....</h3></div>
                }
            </div>
        </div>
    )
}

export default React.memo(Organization)
