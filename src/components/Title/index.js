import React from 'react'
import './title.css'
import Logo from '../../assets/logoAlbum.png'

export default function Title() {
  return (
    <div className="titleContainer">
      <img src={Logo} alt="" className="logoRond"/>
      <img src={Logo} alt="" className="logoRond"/>
      <h1>Generate your id card</h1>
      <img src={Logo} alt="" className="logoRond"/>
      <img src={Logo} alt="" className="logoRond"/>
    </div>
  )
}
