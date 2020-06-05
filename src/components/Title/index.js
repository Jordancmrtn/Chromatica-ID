import React, {useContext} from 'react'
import './title.css'
import Logo from '../../assets/logoAlbum.png'
import CtxToogle from '../../context/CtxToogle'


export default function Title({title}) {

  const toogle = useContext(CtxToogle)

  const getTitle = () =>{
    if(title === "Welcome to Chromatica"){
      return toogle[0] ? "Welcome to Chromatica" : "Generate your id card"
    } else {
      return title
    }
  }

  return (
    <div className="titleContainer">
      <img src={Logo} alt="" className="logoRond"/>
      <img src={Logo} alt="" className="logoRond"/>
      <h1>{getTitle()}</h1>
      <img src={Logo} alt="" className="logoRond"/>
      <img src={Logo} alt="" className="logoRond"/>
    </div>
  )
}
