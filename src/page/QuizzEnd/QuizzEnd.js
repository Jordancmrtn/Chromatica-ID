import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import CtxAnswer from '../../context/CtxAnswer'

import Header from '../../components/Header'
import Title from '../../components/Title'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import ProgressBar from '../../components/progressBar'

import JSON from '../../data/questionsQuizz.json'


import './quizzEnd.css'


export default function QuizzEnd() {

  const [answers, setAnswers] = useContext(CtxAnswer)
  
  const getScore = () => {
    let scoreOk = 0

    {answers.map(answer => {
      if(answer.title === JSON[answer.id].rightAnswer){
        scoreOk ++
      }
    })
    return (`${scoreOk}/5`)
    }
  }

  return (
    <>
      <Header id="quizz"/>
      <Title title="Do you know Lady Gaga ?"/>
      <h1>The result</h1>
      <h2>Your score : {getScore()}</h2>
      <ProgressBar/>
      {answers.map(answer => {
        // console.log(answer.title)
        // console.log(JSON[answer.id].rightAnswer)
        if(answer.title === JSON[answer.id].rightAnswer){
          return (
            <div key={JSON[answer.id]} className="answerContainerFull">
              <h3>Question {parseInt(answer.id) + 1}</h3>
              <p className="question">{JSON[answer.id].question}</p>
              <div className="answerContainer">
                <p className="answerTitle">{answer.title}</p>
                <FontAwesomeIcon icon={faCheck}/>
              </div>
            </div>
          )
        } else {
          return (
            <div key={JSON[answer.id]} className="answerContainerFull">
              <h3>Question {parseInt(answer.id) + 1}</h3>
              <p className="question">{JSON[answer.id].question}</p>
              <div className="answerContainer">
                <p className="answerTitle">{answer.title}</p>
                <FontAwesomeIcon icon={faTimes}/>
              </div>
              <p>Right answer : {JSON[answer.id].rightAnswer}</p>
            </div>
          )
        }
        // console.log(JSON[answer.id].rightAnaswer)
        // console.log(typeof (answer.id))
      })}
      <Section2/>
      <Section3/>
    </>
  )
}