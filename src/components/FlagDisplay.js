import React from 'react'
import { Container } from 'reactstrap'

export default function FlagDisplay({flagUrl, flagSize}) {
  return (
<Container className='d-flex justify-content-center'>
     <img src={flagUrl} style={{width: flagSize}} alt="icons" />
     </Container>
  )
}
