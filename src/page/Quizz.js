import React from 'react'
import { useHistory } from "react-router-dom";

import Header from '../components/Header'
import Title from '../components/Title'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Button from '../components/Button'



export default function Quizz() {

  const history = useHistory();

  const goToQuizz = () => {
    console.log("hello")
    history.push("/quizz/0")
  }

  return (
    <>
      <Header/>
      <Title title="Do you know Lady Gaga ?"/>

      <Button title="Let's Go" onClick={goToQuizz}/>
      <Section2/>
      <Section3/>
    </>
  )
}