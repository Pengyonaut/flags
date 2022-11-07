import React, { useEffect, useState } from "react";
import flagsList from "../assets/flagsList.json"
import {Container,Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import FlagDisplay from "./FlagDisplay"
import QuizzProposition from "./QuizzProposition"
import BottomNavigationQuizz from './BottomNavigationQuizz';
import CountryRecap from "./CountryRecap"
import TitleSection from "./TitleSection"


  
let config = {
  questionNumber: 10,
  defaultZoom: 5,
  defaultCenter: [0,0]
}

export default function Flags() {


  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }





const [userAnswer, setUserAnswer] = useState()
const [flag, setFlag] = useState();
const [prompt, setPrompt] = useState({response: [], answer: ""})
const [rightAnswer, setRightAnswer] = useState(0)
const [wrongAnswer, setWrongAnswer] = useState(0)
const [questionNumb, setQuestionNumb] = useState(0)
const [wikiDoc, setWikiDoc] = useState("")
const [btn, setBtn] = useState(null)
const [recap,setRecap] = useState(false)
const [answerState, setAnswerState] = useState(0)
const [quizzAnswer, setQuizzAnswer] = useState([])
const [modal, setModal] = useState(false)
const [demographics, setDemographics] = useState({
  capital:"",
  currencies: [],
  region:"",
  languages: [],
  population:"",
  lat: 0,
  lng: 0
})





const fetchImage = async (source) => {
  let init = flagsList[Math.round(Math.random() * flagsList.length)]
  const res = await fetch(`https://countryflagsapi.com/png/${init.alpha3}`);
  const imageBlob = await res.blob();
  const imageObjectURL = URL.createObjectURL(imageBlob);
  setFlag(imageObjectURL)
  promptCreation(init);
};



  const promptCreation = (init) => {
    let responses = []
    responses.push(init)
    for (let i = 0; i <= 3; i++) {
      responses.push(flagsList[Math.round(Math.random() * flagsList.length)])
    }
    shuffle(responses)
    setPrompt({ response: responses, answer: init })  
  }

  useEffect(() => {
      fetchImage()
    
  }, []);


  const queryWiki = async () => {
    fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + prompt.answer.en + "&origin=*").then(function(resp) {
      return resp.json()
  }).then(function(data) {
      setWikiDoc(Object.values(data.query.pages)[0].extract);
  })
}

const queryCountry = async () => {
  fetch("https://restcountries.com/v2/name/" + prompt.answer.en).then(function(resp) {
      return resp.json()
  }).then(function(data) {
    console.log(data)
    setDemographics({
      capital:data[0].capital,
      currencies: data[0].currencies,
      region:data[0].subregion,
      languages: data[0].languages,
      population: data[0].population,
      lat: data[0].latlng[0],
      lng: data[0].latlng[1]
     });

     console.log(demographics)
   
  })
}




const checkRemainingQuestions = () => {
  if(questionNumb == config.questionNumber - 1) {
    toggle()
  }  
}
 

  const submit = () => {
    if(userAnswer === prompt.answer.en) {
      setRightAnswer(rightAnswer +1)
    }
    
    else if(userAnswer != prompt.answer.en) {
      setWrongAnswer(wrongAnswer +1)
    }
    setQuestionNumb(questionNumb + 1)
    checkRemainingQuestions()
    handleCalls()
    setRecap(true)
  }


  const handleClick = (e, val) => {
    e.preventDefault()
    setUserAnswer(val.en)
  }

  const handleCalls = () => {
    queryCountry()
    queryWiki()
  }

  const restart = () => {
    setModal(false)
    fetchImage()
    setAnswerState(0)
    setRecap(false)
    setQuestionNumb(0)
    setRightAnswer(0)
    setWrongAnswer(0)
  }


  const toggle = () => setModal(!modal);



      
  return (
    <>
          <TitleSection ongoingQuizz={true} progress={questionNumb} target={config.questionNumber}/>

      <Container className="m-0 p-0">
        <FlagDisplay flagUrl={flag} flagSize={"60vw"}/>

{prompt  != undefined && 
<>
<QuizzProposition answerState={answerState} data={prompt.response} click={handleClick} state={btn} alter={setBtn}/>


   </>
}



{recap && <CountryRecap config={config} wikiDoc={wikiDoc} demographics={demographics}/>}



{!modal && <BottomNavigationQuizz answerState={answerState} changeAnswerState={setAnswerState} next={fetchImage} recap={setRecap} answer={[prompt.answer.en, userAnswer]} submit={submit} state={btn} alter={setBtn}/>}

<Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Your results</ModalHeader>
                <ModalBody>
                 <p>Right answers: {rightAnswer}</p>
                 <p>Wrong answers: {wrongAnswer}</p>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={restart}>Restart</Button>
                </ModalFooter>
            </Modal>

</Container>
</>
  )
}
