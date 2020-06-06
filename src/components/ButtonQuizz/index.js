import React, {useContext} from 'react'
import { useHistory } from "react-router-dom"

import CtxAnswer from '../../context/CtxAnswer'

import './buttonQuizz.css'


export default function ButtonQuizz({title, id, index}) {

  const history = useHistory()
  const [answers, setAnswers] = useContext(CtxAnswer)

  const getID = () => {

    //créé une copie du tableau et ajoute la derniere réponse choisi
    let test = [...answers, title]
    setAnswers(test)

    //Routing entre les questions
    if (index === "4"){
      history.push(`/`)
    } else {
      let newID = parseInt(index) + 1
      history.push(`/quizz/${newID}`)
    }
  }

  return (
    <button type="submit" id={id} className="submitButton" onClick={getID}>{title}</button>
  )
}
