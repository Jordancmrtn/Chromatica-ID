import React,  {useContext} from 'react'
import './form.css'
import InputMask from 'react-input-mask'
import CtxUser from '../../context/CtxUser'
import CIChromatica from '../../assets/CIchromatica.png'
import CtxToogle from '../../context/CtxToogle'
import Button from '../Button'

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

  const checkedform = () => {
    let enable = true;
    if (user.name.length > 0 && user.age.length > 0 && user.country.length > 0 && user.tribe.length > 0){ 
      enable = false
    }
    return enable
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
          <Button onClick={submituser} disabled={checkedform()} title="generate"/>
      </div>

      <div style={{display : toogle ? "block" : "none"}}>
        <p id="indicatorText">Your card is ready ! Take a screenshoot and share it</p>
        <div className="ciContainer" style={{backgroundImage: `url(${CIChromatica})`}}>
          <p id="nameP">{user.name}</p>
          <p id="ageP">{user.age}</p>
          <p id="countryP">{user.country}</p>
          <p id="tribeP">{user.tribe}</p>
          <p id="idP">{user.id}</p>
        </div>
      </div>
    </>
  )
}
