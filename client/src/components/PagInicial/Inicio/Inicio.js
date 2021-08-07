import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import {getPokemonLoading, getPokemonstipos} from '../../../actions/index.js'
import '../../../Styles/inicio.scss'


export default function Inicio (){
    const dispatch=useDispatch()
    let history = useHistory();

   function peticiones(){
        dispatch(getPokemonLoading())
        dispatch(getPokemonstipos())
        history.push("/pokemons")
    }

    return(
        <div className='inicio'>
           <button className='buttonInicio' onClick={()=>peticiones()}></button>
        </div>
    )
}
