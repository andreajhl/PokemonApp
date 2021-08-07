import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {removePokemonFav} from '../../actions/index.js'

import {IoHeartDislike} from 'react-icons/io5'



export default function Pokemon({id,nombre,tipos,fuerza,img}){
   
    const dispatch=useDispatch()

    if(nombre && img && tipos && fuerza) {
    
        return (
            <div className='pokemonContainer'>
            <div className='cardheader'>
                <button className='buttonremove' onClick={()=>dispatch(removePokemonFav(id))}><IoHeartDislike/></button>
                <img src={img} alt="pokemon" className='cardimg' />
            </div>
            <div className='card'>
                <div className='card_text'>
                    <NavLink to={`/pokemons/detail/${id}`} style={{textDecoration: 'none'}}><h2 style={{color:'rgb(20, 20, 20)'}}>{nombre} </h2></NavLink>
                    <p style={{margin:'1%'}}>fuerza: {fuerza}</p>
                </div>
                <div className='card_tipo'>
                    <p >Tipo</p>
                </div>
                <div className='card_tipos'>
                    {tipos.map(e=><div className='card_tipos_i' key={e}>{e}</div>)}
                </div> 
            </div>
        </div>                 
        )
    }else return null;
}
