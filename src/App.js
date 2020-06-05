import React, {useState} from 'react'
import './App.css'
import CardID from './components/page/cardID.js'
import CtxUser from './context/CtxUser'
import CtxToogle from './context/CtxToogle'
import { Switch, Route } from 'react-router-dom';


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
        <Switch>
          <Route exact path="/" component={CardID} />
        </Switch>
      </CtxUser.Provider>
      </CtxToogle.Provider>
    </div>
  );
}

export default App;
