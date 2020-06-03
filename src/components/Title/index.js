import React, {useContext} from 'react'
import './title.css'
import Logo from '../../assets/logoAlbum.png'
import CtxToogle from '../../context/CtxToogle'


export default function Title() {

  const toogle = useContext(CtxToogle)

  const title = () =>{
    let title
    switch (toogle) {
      case false:
        title = "Generate your id card"
      case true:
        title = "Welcome to Chromatica"
      default:
        title = "Generate your id card"
      break;
    }
    return
  }


  return (
    <div className="titleContainer">
      <img src={Logo} alt="" className="logoRond"/>
      <img src={Logo} alt="" className="logoRond"/>
      <h1>{toogle[0] ? "Welcome to Chromatica" : "Generate your id card"}</h1>
      <img src={Logo} alt="" className="logoRond"/>
      <img src={Logo} alt="" className="logoRond"/>
    </div>
  )
}
