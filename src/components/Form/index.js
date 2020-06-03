import React, {useState} from 'react'
import './form.css'
import InputMask from 'react-input-mask'

export default function Form() {

  const [form, setForm] = useState({
    name : '',
    age : '',
    country : '',
    tribe : '',
  })

  return (
    <div className="formContainer">
        <input type="text" 
          value={form.name} 
          onChange={ (event) => setForm({...form, name : event.target.value}) }
          //className="form-control" 
          id="inputName" 
          placeholder="Name" 
        />
        <InputMask 
          mask="99 yo" 
          maskChar="_" 
          id="numerotel"
          value={form.age}
          onChange={ (event) => setForm({...form, age : event.target.value})}
          placeholder="Age"
        />
        <input type="text" 
          value={form.country} 
          onChange={ (event) => setForm({...form, country : event.target.value}) }
          //className="form-control" 
          id="inputCountry" 
          placeholder="Country" 
        />
        <select id="tribes" name="Tribes" onChange={ (event) => setForm({...form, tribe : event.target.value})}>
          <option value="" disabled selected>Select your Tribes</option>
          <option value="Kindness Punks" >Kindness Punks</option>
          <option value="Freedom Fighters">Freedom Fighters</option>
          <option value="Junkyard Scavengers">Junkyard Scavengers</option>
          <option value="Government Officials">Government Officials</option>
          <option value="Eco Warriors">Eco Warriors</option>
          <option value="Cyber Kids">Cyber Kids</option>
        </select>
        <button type="submit" className="submitButton" >GENERATE</button>
    </div>
  )
}

///onClick={submitForm} disabled={checkedform()} 