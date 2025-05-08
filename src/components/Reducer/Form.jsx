import React, { useReducer } from 'react';
import { initialState, formReducer } from './Reducer';
import './Form.css';

function Form() {
    const[state, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (e) => {
        dispatch({type: 'SET_FIELD', field: e.target.name, value: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state.firstName){
            dispatch({type: 'SET_ERROR', field: 'firstName', error: 'First Name Required'})
        }

    }

  return (
    <form onSubmit={handleSubmit} className="form-container">
        <div className='form-group'>
        <input
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            placeholder='First Name'
            />
            {state.error.firstName && <span>{state.error.firstName}</span>}

        </div>
        <div className='form-group'>
        <input
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            />

        </div>
        
            
            <div className='form-group'>
            <input
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder='Email'
            />

            </div>
         
            <div className='form-group'>
            <button type="submit">Submit</button>
            <button type="button" onClick={()=>dispatch({type: 'RESET'})}>Reset</button>

            </div>
            

    </form>
  )
}

export default Form