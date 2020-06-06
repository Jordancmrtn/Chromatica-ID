import React from 'react'
import './buttonQuizz.css'

export default function ButtonQuizz({title, id}) {

  const getID = () => {
    console.log(id)
  }
  return (
    <button type="submit" id={id} className="submitButton" onClick={getID}>{title}</button>
  )
}
