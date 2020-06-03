import React from 'react'
import './banner.css'

export default function Banner({rotate}) {
  return (
    <div className="bannerContainer" style={{transform: rotate ? "rotate(3deg)": "rotate(-3deg)"}}>
      <p>CHROMATICA   GOVERNMENT  CHROMATICA   GOVERNMENT   CHROMATICA   GOVERNMENT    CHROMATICA   GOVERNMENT</p>
    </div>
  )
}
