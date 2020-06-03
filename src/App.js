import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import CtxUser from './context/CtxUser'
import Form from './components/Form'

function App() {

  const [user, setUser] = useState({
    name : null,
    age: null,
    country: null,
    tribe: null
  });


  return (
    <div className="App">
      <CtxUser.Provider value={user}>
        <Header/>
        <Title/>
        <Form/>
        <Section2/>
        <Section3/>
      </CtxUser.Provider>
    </div>
  );
}

export default App;
