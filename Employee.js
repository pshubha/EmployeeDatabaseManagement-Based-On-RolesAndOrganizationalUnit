//Employee Page

import React,{useState, useEffect, useContext} from 'react'
import { NavLink , Link} from 'react-router-dom';
import { CrudContextEmp } from './CrudContextEmp';


const Employee=()=> {
    const { removeData } = useContext(CrudContextEmp);
    const [user, setUser] = useState([]);
    // let userList =  JSON.parse(localStorage.getItem('EmployeeList')) || [];
    // setUser(userList);

    useEffect(() => {
       let userList = JSON.parse(localStorage.getItem('EmployeeList')) || [];
        setUser(userList)
    }, [])


    return (
        <div className="container" style={{ backgroundColor: '#e2e2e2', width: '70%', marginTop: '80px' }}>
        <div>
                <h1 style={{ paddingTop: '30px', marginRight: '600px', fontFamily: ('Papyrus', 'Fantasy'), textDecoration: 'underline' }}>Employees :</h1>
            </div>
            <div style={{ padding: '10px', float: 'right' }}>
                    <NavLink to='/main' className='btn btn-outline-dark'>Go Back</NavLink>
            </div>
            <div style={{ float: 'right', paddingTop: '10px' }}>
                <Link to={{pathname:'/addEmployee'}} className='btn btn-info'> + Add Employee</Link>
            </div>
            <hr></hr>
            <br></br>

            <div>
                <h3>List of Employee</h3>
            </div>
            <br></br>
            <div>
                {
                    user.length?
                <table className="table table-striped">
                <thead>
                        <tr>
                            <th></th>
                            <th>Name of Employee</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Organization</th>                            
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((u,i)=>{
                                return(
                                    <tr key={u.id}>
                                        <td>{i+1}</td>
                                        <td>{u.Name}</td>
                                        <td>{u.Email}</td>
                                        <td>{u.Role}</td>
                                        <td>{u.Orgn}</td>                                        
                                        <td><button className='btn btn-dark' onClick={()=>removeData(u.id)}><span aria-hidden="true">&times;</span></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>:<div><br></br>
                <h3>No employees to display.....</h3></div>
                }
            </div>            
            
        </div>
    )
}

export default Employee
