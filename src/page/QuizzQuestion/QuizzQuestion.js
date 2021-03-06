import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Title from '../../components/Title'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import ProgressBar from '../../components/progressBar'
import JSON from '../../data/questionsQuizz.json'

import './quizzQuestion.css'
import ButtonQuizz from '../../components/ButtonQuizz';


export default function QuizzQuestion() {

  let {id} = useParams()

  return (
    <>
      <Header id="quizz"/>
      <Title title="Do you know Lady Gaga ?"/>
      <ProgressBar/>
      <div className="questionContainer">
        <p>{JSON[id].question}</p>
      </div>
      <div className="answersContainer">
        <div className="buttonsContainer">
          <ButtonQuizz id={JSON[id].FindAnswer[0]} index={id} title={JSON[id].FindAnswer[0]}/>
          <ButtonQuizz id={JSON[id].FindAnswer[1]} index={id} title={JSON[id].FindAnswer[1]}/>
        </div>
        <div className="buttonsContainer">
          <ButtonQuizz id={JSON[id].FindAnswer[2]} index={id} title={JSON[id].FindAnswer[2]}/>
          <ButtonQuizz id={JSON[id].FindAnswer[3]} index={id} title={JSON[id].FindAnswer[3]}/>
        </div>
      </div>
      <Section2/>
      <Section3/>
    </>
  )
}