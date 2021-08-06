import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { getPokemonName} from '../../../actions/index.js'
import '../../../stylos/button.css'

export default function Search(){
    const dispatch=useDispatch()
    const[state,setState]=useState("")
    
    function handleChange({target}){
        setState(target.value)
        
    }
   function handleSubmit(e){
       e.preventDefault();
      dispatch(getPokemonName(state))
      setState('')
    }
    
    return (
        <div style={{alignItems:'center'}}>
            <button type="submit" className='buttonSeach' onClick={handleSubmit}>Buscar</button>
            <input type="text" style={{height:'27px',borderTopRightRadius:'8px', borderBottomRightRadius:'8px'}} onChange={handleChange} value={state}/>
        </div>
    )
}
