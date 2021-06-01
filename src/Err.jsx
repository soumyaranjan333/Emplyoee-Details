import React from 'react'

export default function Err(props) {
    return (
        <div>
            
             <h5 className="position-absolute topleft text-dark fw-bold">{props.err}</h5>
             
        </div>
    )
}
