import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'

import CardID from './page/CardID'
import Quizz from './page/Quizz/Quizz'
import QuizzQuestion from './page/QuizzQuestion/QuizzQuestion'

import CtxUser from './context/CtxUser'
import CtxToogle from './context/CtxToogle'
import CtxAnswer from './context/CtxAnswer'

import './App.css'



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
      <CtxAnswer.Provider value={}>
        <Switch>
          <Route exact path="/" component={CardID} />
          <Route exact path="/quizz" component={Quizz} />
          <Route exact path="/quizz/:id" component={QuizzQuestion} />
        </Switch>
      </CtxAnswer.Provider>
      </CtxUser.Provider>
      </CtxToogle.Provider>

    </div>
  );
}

export default App;
