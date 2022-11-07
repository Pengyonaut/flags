import React,{useState} from 'react'
import { Button, Container } from 'reactstrap'

export default function BottomNavigationQuizz({recap, next, submit, state, alter, answer, answerState, changeAnswerState }) {



  const handleSubmit = (e) => {
    submit()
    alter(null)
    changeAnswerState(1)
  }


  const handleNextQuestion = () => {
    next()
    changeAnswerState(0)
    recap(false)
  }



  return (
    <div className='bottom-navigation-quizz bg-white shadow-lg' >
      <Container className='h-100'> 

        {/* SUBMIT BUTTON  */}

        {/* MANAGE STATE AND HOVER  */}
        {answerState == 0 ? <>
        <div className='d-flex justify-content-center align-items-center h-100'>
       {state != null ?
        <Button onClick={(e) => handleSubmit(e)} color="primary" className='w-100' size="md">Submit</Button>
       :
       <Button color="secondary" className='w-100' size="md" disabled>Submit</Button>
       }
       </div>
       </>
    
       :
       
       <>

       {/* MANAGE RESPONSE STATE */}
        <div className='mt-1'>
       {answer[0] != answer[1] &&
       <>
        <div className='w-100 mt-2'>
           <h3 className='mt-3 mb-0'>Oh Oh!</h3>
           {answer[0] != undefined && <p className='mt-0'>The correct answer was {answer[0]}</p>}
           </div>
           <div className='d-flex justify-content-between'>
       <Button color="secondary"  size="md">Learn more</Button>
       <Button color="primary"  size="md" onClick={handleNextQuestion} >Next question</Button>
       </div>
           </>
       }

       {answer[0] === answer[1] &&
       <>
       <div className='w-100 mt-2'>
       <h3 className='mt-3 mb-0'>Great!</h3>
       {answer != undefined && <p>The answer was {answer[0]}</p>}
       </div>
       <div className='d-flex justify-content-between'>
       <Button color="secondary"  size="md" >Learn more</Button>
       <Button color="primary"   size="md" onClick={handleNextQuestion} >Next question</Button>
       </div>
     
       </>
      }
      
      </div>
        </>
        }

      </Container>
      </div>

  )
}
