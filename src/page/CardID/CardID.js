import React from 'react'

import { useHistory } from "react-router-dom"

import Header from '../../components/Header'
import Title from '../../components/Title'
import Form from '../../components/Form'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'

import './cardId.css'

export default function CardID() {

  const history = useHistory();

  const goToQuizz = () =>{
    history.push("/quizz")
  }

  return (
    <>
      <Header id="title"/>
      <p id="newsbanner">new new <span onClick={goToQuizz}>LADY GAGA QUIZZ</span> new new</p>
      <Title title="Welcome to Chromatica"/>
      <Form/>
      <Section2/>
      <Section3/>
    </>
  )
}
