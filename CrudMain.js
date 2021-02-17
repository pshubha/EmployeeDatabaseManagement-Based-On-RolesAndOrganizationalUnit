import React from 'react'
import RemoveEmp, { CrudContextEmp } from './CrudContextEmp';
import Employee from './Employee';

function CrudMainEmp() {
    return (
        <div>
            <RemoveEmp>
                <Employee/>
            </RemoveEmp>
        </div>
    )
}

export default CrudMainEmp
