import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'

import CardID from './page/CardID/CardID'
import Quizz from './page/Quizz/Quizz'
import QuizzQuestion from './page/QuizzQuestion/QuizzQuestion'
import QuizzEnd2 from './page/QuizzEnd/QuizzEnd'

import CtxUser from './context/CtxUser'
import CtxToogle from './context/CtxToogle'
import CtxAnswer from './context/CtxAnswer'

import './App.css'
import CtxWidth from './context/CtxWidth'


function App() {

  const [user, setUser] = useState({
    name : "",
    age: "",
    country: "",
    tribe: "",
    id: ""
  });
  const [toogle, setToogle] = useState(false)
  const [answers, setAnswers] = useState([])
  const [width, setWidth] = useState(0)

  return (
    <div className="App">
      <CtxWidth.Provider value={[width, setWidth]}>
      <CtxToogle.Provider value={[toogle, setToogle]}>
      <CtxUser.Provider value={[user, setUser]}>
      <CtxAnswer.Provider value={[answers, setAnswers]}>
        <Switch>
          <Route exact path="/" component={CardID} />
          <Route exact path="/quizz" component={Quizz} />
          <Route exact path="/quizz/:id" component={QuizzQuestion} />
          <Route exact path="/quizz_end" component={QuizzEnd2} />
        </Switch>
      </CtxAnswer.Provider>
      </CtxUser.Provider>
      </CtxToogle.Provider>
      </CtxWidth.Provider>

    </div>
  );
}

export default App;
