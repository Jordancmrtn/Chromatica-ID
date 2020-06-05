import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import ProgressBar from '../components/progressBar'
import { useParams } from "react-router-dom";


export default function QuizzQuestion({ match }) {
  
  let {id} = useParams()

  return (
    <>
      <Header/>
      <Title title="Do you know Lady Gaga ?"/>
      <ProgressBar/>
      <Section2/>
      <Section3/>
    </>
  )
}