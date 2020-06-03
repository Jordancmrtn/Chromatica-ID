import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import Section2 from './components/Section2'
import CtxUser from './Context/CtxUser'

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
        <Section2/>
      </CtxUser.Provider>
    </div>
  );
}

export default App;
