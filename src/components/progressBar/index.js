import React, {useContext} from 'react'

import CtxWidth from '../../context/CtxWidth'

import './progressBar.css'

export default function ProgressBar() {

  const [width, setWidth] = useContext(CtxWidth)

  return (
    <>
    <div id="progressBarContainer">
      <div id="progressBar" style={{width : width + "%"}}></div>
    </div>
    </>
  )
}
