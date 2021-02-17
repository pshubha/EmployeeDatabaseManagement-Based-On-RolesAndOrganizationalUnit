import React, { useState, useEffect, useContext } from 'react'
import { NavLink , Link} from 'react-router-dom';
import { CrudContextRole } from './CrudContextRole';


function Roles() {
    const {removeData} = useContext(CrudContextRole)
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        let roles = JSON.parse(localStorage.getItem('RolesList')) || [];
        setRoles(roles);
    }, [])

    return (
        <div className="container" style={{ backgroundColor: '#e2e2e2', width: '70%', marginTop: '80px' }}>
            <div>
                <h1 style={{ paddingTop: '30px', marginRight: '600px', fontFamily: ('Papyrus', 'Fantasy'), textDecoration: 'underline' }}>Roles :</h1>
            </div>
            <div style={{ padding: '10px', float: 'right' }}>
                    <NavLink to='/main' className='btn btn-outline-dark'>Go Back</NavLink>
            </div>
            <div style={{ float: 'right', paddingTop: '10px' }}>
                <Link to={{pathname:'/addRole'}} className='btn btn-info'> + Add Roles</Link>
            </div>
            <hr></hr>
            <br></br>
            <div>
                <h3>List of Roles</h3>
            </div>
            <br></br>
            <div>
                {
                    roles.length?
                <table className="table table-striped">
                <thead>
                        <tr>
                            <th></th>
                            <th>Name of Role</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.map((r,i)=>{
                                return(
                                    <tr key={r.id}>
                                        <td>{i+1}</td>
                                        <td>{r.Name}</td>
                                        <td>{r.Desc}</td>
                                        <td><button className='btn btn-dark' onClick={()=>removeData(r.id)} ><span aria-hidden="true">&times;</span></button></td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>:<div><br></br>
                <h3>No current role to display.....</h3></div>
                }
            </div>            
        </div>
    )
}

export default Roles
