import React from 'react'

export default function Button() {
    return (
        <>
            <div class="btn-group justify-content-end" role="group" aria-label="Button group with nested dropdown">
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Department
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a onClick={()=>this.filterDep("Production")} class="dropdown-item" href="#">Production</a>
                        <a onClick={()=>this.filterDep("Devloper")} class="dropdown-item" href="#">Devloper</a>
                    </div>
                </div>
            </div>
        </>
    )
}
