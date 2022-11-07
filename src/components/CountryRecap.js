import React, {useEffect} from 'react'
import Extract from "./Extract"
import {Container} from "reactstrap"
import Demographics from "./Demographics"
import Map from "./Map"


export default function CountryRecap({wikiDoc, demographics, config}) {


  return (
    <>

    <div className='bg-white w-100 px-0 mx-0'>
    <Container className='p-2'>
    <Extract wikiDoc={wikiDoc}/>

{demographics != "" && 
<>
<Demographics data={demographics}/>
{demographics.lat  != undefined && <Map config={config} demographics={demographics}/> }

</>
}
</Container>

</div>
    </>
    
 
       
  )
}
