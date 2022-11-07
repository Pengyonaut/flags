import React from 'react'

export default function DemographicsLabel({icon, label, result}) {


  return (
    <div>
        <div className='d-flex align-items-center'>
        <i style={{color:"#979797"}} className='material-icons small'>{icon}</i> 
        <p className='mb-0 d-inline ml-5 small' style={{color:"#979797", fontWeight:"700", marginLeft:".5rem"}}>{label}</p>
        </div>
        {result != undefined && <p className='mt-1 small' style={{fontWeight:"700", color:"#000"}}>{result}</p>}
    </div>
  )
}
