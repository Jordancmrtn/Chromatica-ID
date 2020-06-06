import React from 'react'
import { useHistory } from "react-router-dom"

import './buttonQuizz.css'


export default function ButtonQuizz({title, id, index}) {

  const history = useHistory();

  const getID = () => {
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
