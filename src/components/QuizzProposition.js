import React, {useState} from 'react'
import { Button, Container } from 'reactstrap'

export default function QuizzProposition({data, click , state, alter, answerState}) {


  const selectButton = (e, val, index) => {
    click(e, val)
    alter(index)
  }



  return (
    <>
    <Container className='mt-3'>

      {answerState === 0 &&
      <>
        {data.map((x, index) => (
<div className='my-2' key={x.alpha3}>
  {state == index ?
<Button color="primary"  onClick={(e) => selectButton(e,x, index)} className='quizzButton  w-100 shadow-sm' size="lg">{x.en != undefined ? x.en : "error"}</Button>
:
<Button color="white"  onClick={(e) => selectButton(e,x, index)} className='quizzButton bg-white  w-100 shadow-sm'  size="lg">{x.en != undefined ? x.en : "error"}</Button>
}
</div>

        ))}
        </>
        }

        </Container>
    </>
  )
}
