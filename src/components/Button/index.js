import React from 'react'
import './button.css'

export default function Button({onClick, disabled, title}) {
  return (
    <button type="submit" className="submitButton" onClick={onClick} disabled={disabled}>{title}</button>
  )
}
