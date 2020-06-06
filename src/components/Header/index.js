import React from 'react'
import './header.css'
import HeaderImg from '../../assets/ChromaticaLogoID.png'
import HeaderImg2 from '../../assets/ChromaticaLogoQUIZZ.png'


export default function Header({id}) {

  const getHeader = () => {
    if (id === "title"){
      return <img src={HeaderImg} alt="Chromatica Logo Header" id="headerLogo" />
    } else {
      return <img src={HeaderImg2} alt="Chromatica Logo Header" id="headerLogo" />
    }
  }

  return (
    <>
      {getHeader()}
    </>
  )
}
