import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import '../../Styles/card.scss'
import {FaHeart} from 'react-icons/fa'

import { addPokemonFav} from '../../actions/index.js'

export default function PokemonTiposCard({id,nombre,tipos,fuerza,img}){

    const dispatch=useDispatch()

    var obj={id,nombre,tipos,fuerza,img}

    if(nombre && img && tipos && fuerza) {

        return (
                <div className='pokemonContainer'>
                    <div className='cardheader'>
                        <button className='buttonfav' onClick={()=>dispatch(addPokemonFav(obj))}><FaHeart/></button>
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
