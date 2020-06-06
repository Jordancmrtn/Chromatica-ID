import React from 'react'
import { useHistory } from "react-router-dom";

import Header from '../../components/Header'
import Title from '../../components/Title'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import Button from '../../components/Button'

import './quizz.css'


export default function Quizz() {

  const history = useHistory();

  const goToQuizz = () => {
    history.push("/quizz/0")
  }

  return (
    <>
      <Header/>
      <Title title="Do you know Lady Gaga ?"/>
      <div className="section1Container">
        <p>Answer the <span>5</span> questions that arrive...</p>
        <Button title="Let's Go" onClick={goToQuizz}/>
      </div>
      <Section2/>
      <Section3/>
    </>
  )
}
