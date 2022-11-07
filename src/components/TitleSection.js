import React from 'react'
import QuizzProgress from './QuizzProgress'
import { Container } from 'reactstrap'

export default function TitleSection({ongoingQuizz, progress, target}) {


  // j'ai 5 questions je vais à reculons 
  return (

        <Container className={"bg-white text-black mb-3 pb-1"}>
            {ongoingQuizz &&
            <div>
                    <QuizzProgress questionNumb={progress} questionTarget={target} val={5}/>
                    <h1 className='mx-2 h2 text-left'>What flag is it?</h1>
            </div>
            }

        </Container>

  )
}
