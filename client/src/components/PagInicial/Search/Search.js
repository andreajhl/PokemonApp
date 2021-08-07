import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { getPokemonName} from '../../../actions/index.js'
import '../../../Styles/search.scss'

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
        <div className='search'>
            <button type="submit" className='search_button' onClick={handleSubmit}>Buscar</button>
            <input type="text" className='search_input' onChange={handleChange} value={state}/>
        </div>
    )
}
