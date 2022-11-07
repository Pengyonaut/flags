import React,{useState, useEffect} from 'react'
import { Progress, Container } from 'reactstrap';

export default function QuizzProgress({questionNumb, questionTarget}) {


  const [progress,setProgress] = useState()

useEffect(() => {
  setProgress((((questionNumb) / questionTarget) * 100))
}, [questionNumb])


  return (
    <>
    <Container className={'mb-4'}>
      <p className='mb-0'>Question {questionNumb + 1} out of {questionTarget}</p>
    <Progress color="primary" value={progress} />
    </Container>

    </>
  )
}
