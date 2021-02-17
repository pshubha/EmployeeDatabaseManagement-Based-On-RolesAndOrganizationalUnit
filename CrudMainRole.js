import React from 'react'
import Roles from './Roles';
import RemoveRole from './CrudContextRole';

function CrudMainRole() {
    return (
        <div>
            <RemoveRole>
                <Roles/>
            </RemoveRole>
        </div>
    )
}

export default CrudMainRole
