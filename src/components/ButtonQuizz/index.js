import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'

import CtxAnswer from '../../context/CtxAnswer'
import CtxWidth from '../../context/CtxWidth'

import './buttonQuizz.css'


export default function ButtonQuizz({title, id, index}) {

  const history = useHistory()
  const [answers, setAnswers] = useContext(CtxAnswer)
  const [width, setWidth] = useContext(CtxWidth)

  const getID = () => {

    //créé une copie du tableau et ajoute la derniere réponse choisi
    let test = [...answers, {title: title, id : parseInt(index)}]
    setAnswers(test)

    //Permet de faire progresser la progressBar
    if(index === "0"){
      setWidth(20) 
    } else if(index === "1"){
      setWidth(40) 
    } else if(index === "2"){
      setWidth(60) 
    } else if(index === "3"){
      setWidth(80) 
    } else if(index === "4"){
      setWidth(100) 
    }

    //Routing entre les questions
    if (index === "4"){
      history.push(`/quizz_end`)
    } else {
      let newID = parseInt(index) + 1
      history.push(`/quizz/${newID}`)
    }
  }

  return (
    <button type="submit" id={id} className="submitButton" onClick={getID}>{title}</button>
  )
}
