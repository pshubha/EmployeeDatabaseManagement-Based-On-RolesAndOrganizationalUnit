import React, { useState } from 'react'
import { Link , useHistory} from 'react-router-dom'
import { v1 as uuid } from 'uuid'


const AddOrganization = (props) => {
    const [orgName, setOrgName] = useState('');
    const [orgDesc, setOrgDesc] = useState('');

    const { newId } = props.location;
    // console.log(newId);
    const handleAddOrg = (e) => {
        e.preventDefault();
        console.log(orgName , orgDesc);
        let organization = JSON.parse(localStorage.getItem('OrganizationList'));
        if(organization == null){
            organization = []
        }
       let obj = {id:uuid(), Orgn : orgName, size: 0, desc: orgDesc};
       organization.push(obj)
        localStorage.setItem('OrganizationList', JSON.stringify(organization));
        setOrgName('');
        setOrgDesc('');
        
    }

    return (
        <div className='container' style={{ backgroundColor: '#e2e2e2', width: '50%', marginTop: '100px' }}>
            <form onSubmit={handleAddOrg}>
                <div style={{ padding: '20px' }}>
                    <Link to='/organization' style={{ float: 'right' }} className='btn btn-transporant'>&times;</Link>
                    <h3>New Organization</h3>
                </div>
                <hr></hr>
                <div>
                    <label className='form-label'>Name:</label>
                    <input type='text' className='form-control' placeholder='Name..' value={orgName} onChange={(e) => setOrgName(e.target.value)} required />
                    <label className='form-label'>Description:</label>
                    <textarea type='text' className='form-control' placeholder='Write description...' value={orgDesc} onChange={(e) => setOrgDesc(e.target.value)} />
                </div>
                <hr></hr>
                <div style={{ padding: '20px' }}>
                    <button type='submit' style={{ marginRight: '10px' }} className='btn btn-info'>Add</button>
                    <Link to='/organization' className='btn btn-secondary'>Close</Link>
                </div>
            </form>
        </div>
    )
}

export default AddOrganization
