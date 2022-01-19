import React from 'react'

export default function Track({name, index, url}) {

    return (<div>
        <a href={url} target="_blank" rel="noreferrer">
        <h3><span style={{
                fontSize:"1.5rem", marginRight:"2rem"
            }}>{index+1}</span> {name}</h3>
            </a>
            <hr/>
            </div>
    )
}
