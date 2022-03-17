
import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import People from './views/People';
import Planets from './views/Planets';





function App() {
  const history = useHistory()

  const [form, setForm] = useState({
    category:"people",
  id: ""

}) 




  



const onsubmithandler = e => 
  {
    e.preventDefault()
    const {category,id} = form
    history.push(`/${category}/${id}`)

  }

  const changeHandler = e => 
  {
    setForm({
      ... form,
      [e.target.name]: e.target.value


    })
    console.log("^^^^^^^^^^^^^^^^^",e.target)

  }
  return (
 
    <div className="App">
      <Form form = {form} onsubmithandler = {onsubmithandler} changeHandler = {changeHandler} />
      <Switch>
        <Route exact path="/people/:id">
          <People/>
        </Route>
        <Route exact path="/planets/:id">
        <Planets/>
      </Route>
      </Switch>
    </div>
    
  );
}

export default App;
