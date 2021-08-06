import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './pokemonCardTipo.css'
import { addPokemonFav} from '../../actions/index.js'

export default function PokemonTiposCard({id,nombre,tipos,fuerza,img}){

    const dispatch=useDispatch()

    var obj={id,nombre,tipos,fuerza,img}

    if(nombre && img && tipos && fuerza) {

        return (
            <div className='pokemonContainerTipos' style={{fontFamily:'cursive'}}>
                <div className='cardheader'>
                    <img src="https://i.pinimg.com/originals/61/9c/39/619c39799816bfeb2d99365b16bffea5.png" alt="header" className='headerTipos' />
                    <img src={img} alt="pokemon" className='cardimgTipos' />
                </div>
                <div className='cardbody'>
                    <button className='buttonfav' onClick={()=>dispatch(addPokemonFav(obj))}>Fav</button>
                    <NavLink to={`/pokemons/detail/${id}`} style={{textDecoration: 'none'}}><h1 style={{fontSize:'22px',color:'rgb(27, 25, 25)', margin:'4px' }}>{nombre} </h1></NavLink>
                    <p style={{margin:'4px',fontSize:'18px', color:'rgb(51, 50, 50)'}}>fuerza: {fuerza}</p>
                </div>
                <div className='cardtipo'>
                    <p style={{fontSize:'16px',margin:'4px',color:'rgb(82, 78, 78)'}}>Tipo</p>
                </div>
                <div style={{marginBottom:'14px',display:'flex',justifyContent:'space-around',color:'rgb(104, 98, 98)'}} >
                    {tipos.map(e=><div style={{fontSize:'12px',color:'rgb(104, 98, 98)'}} key={e}>{e}</div>)}
                </div>
            </div>  
        )
    }else return null;
}
