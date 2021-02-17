import React from 'react'
import RemoveOrg from './CrudContextOrg';
import Organization from './Organization';

function CrudMainOrg() {
    return (
        <div>
            <RemoveOrg>
                <Organization/>
            </RemoveOrg>
        </div>
    )
}

export default CrudMainOrg
