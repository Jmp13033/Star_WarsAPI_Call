import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Form({onsubmithandler, form , changeHandler}) {

  return (
    <div>
    <form onSubmit={onsubmithandler}>
    Search For :
    
    <select name='category' onChange={changeHandler} value={form.category}>
    <option>------ </option>
    <option name="people" value="people" className='people'>  People </option>
    <option name="planets" value= "planets" className='starships'> Planets </option>
    <option name="films" value= "vehicles" className='vehicles'> Films </option>
    <option name="planets" value= "planets" className='planets'> Planets </option>
    </select>
    id: 
    <input name="id"  className='form-control'  onChange={changeHandler}  type="number" />
    <button className="m-5 form-auto btn btn-danger"> Submit </button>
    </form>
    </div>
  )
}
