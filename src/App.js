import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import CtxUser from './context/CtxUser'
import Form from './components/Form'
import CtxToogle from './context/CtxToogle'

function App() {

  const [user, setUser] = useState({
    name : "",
    age: "",
    country: "",
    tribe: "",
    id: ""
  });
  const [toogle, setToogle] = useState(false)


  return (
    <div className="App">
      <CtxToogle.Provider value={[toogle, setToogle]}>
      <CtxUser.Provider value={[user, setUser]}>
        <Header/>
        <Title/>
        <Form/>
        <Section2/>
        <Section3/>
      </CtxUser.Provider>
      </CtxToogle.Provider>
    </div>
  );
}

export default App;
