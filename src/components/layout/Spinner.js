import React from 'react'
import spinner from './download.png'

function Spinner() {
    return (
        <div>
            <img
            src={spinner}
            style={{width: '100px', margin:'auto', display:'block'}}
            alt="Loading...">
            </img>    
        </div>
    )
}

export default Spinner
