import React,  {useState, useContext} from 'react'
import './form.css'
import InputMask from 'react-input-mask'
import CtxUser from '../../context/CtxUser'
import CIChromatica from '../../assets/CIchromatica.png'
import CtxToogle from '../../context/CtxToogle'

export default function Form() {

  const [user, setUser] = useContext(CtxUser)
  const [toogle, setToogle] = useContext(CtxToogle)

  const submituser = () =>{
    setUser({...user, id : random(100000000, 900000000)})
    setToogle(true)
  }

  const random = (min, max) =>{
    return Math.round(Math.random() * (max - min) + min)
  }

  return (
    <>
      <div className="formContainer" style={{display : toogle ? "none" : "flex"}}>
          <input type="text" 
            value={user.name} 
            onChange={ (event) => setUser({...user, name : event.target.value}) }
            id="inputName" 
            placeholder="Name" 
          />
          <InputMask 
            mask="99 yo" 
            maskChar="_" 
            id="numerotel"
            value={user.age}
            onChange={ (event) => setUser({...user, age : event.target.value})}
            placeholder="Age"
          />
          <input type="text" 
            value={user.country} 
            onChange={ (event) => setUser({...user, country : event.target.value}) }
            id="inputCountry" 
            placeholder="Country" 
          />
          <select id="tribes" name="Tribes" onChange={ (event) => setUser({...user, tribe : event.target.value})}>
            <option value="" disabled selected>Select your Tribes</option>
            <option value="Kindness Punks" >Kindness Punks</option>
            <option value="Freedom Fighters">Freedom Fighters</option>
            <option value="Junkyard Scavengers">Junkyard Scavengers</option>
            <option value="Government Officials">Government Officials</option>
            <option value="Eco Warriors">Eco Warriors</option>
            <option value="Cyber Kids">Cyber Kids</option>
          </select>
          <button type="submit" className="submitButton" onClick={submituser}>GENERATE</button>
      </div>

      <div className="ciContainer" style={{display : toogle ? "block" : "none", backgroundImage: `url(${CIChromatica})`}}>
        {/* <img src={CIChromatica} alt="Chromatica ID"/> */}
        <p id="nameP">{user.name}</p>
        <p id="ageP">{user.age}</p>
        <p id="countryP">{user.country}</p>
        <p id="tribeP">{user.tribe}</p>
        <p id="idP">{user.id}</p>
      </div>
    </>
  )
}

///onClick={submituser} disabled={checkedform()} 