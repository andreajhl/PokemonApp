import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {removePokemonFav} from '../../actions/index.js'
import '../../stylos/pokemonCard.css'


export default function Pokemon({id,nombre,tipos,fuerza,img}){
   
    const dispatch=useDispatch()

    if(nombre && img && tipos && fuerza) {
    
        return (
            <div className='pokemonContainer' style={{fontFamily:'cursive'}}>
                <div className='cardheader'>
                    <img src="https://i.pinimg.com/originals/61/9c/39/619c39799816bfeb2d99365b16bffea5.png" alt="header" className='header' />
                    <img src={img} alt="pokemon" className='cardimg' />
                </div>
                <div className='cardbody'>
                    <button className='buttonremove' onClick={()=>dispatch(removePokemonFav(id))}>X</button>
                    <NavLink to={`/pokemons/detail/${id}`} style={{textDecoration: 'none'}}><h1 style={{fontSize:'30px',color:'rgb(27, 25, 25)', margin:'4px' }}>{nombre} </h1></NavLink>
                    <p style={{margin:'4px',fontSize:'20px', color:'rgb(51, 50, 50)'}}>fuerza: {fuerza}</p>
                </div>
                <div className='cardtipo'>
                    <p style={{fontSize:'18px',margin:'4px',color:'rgb(82, 78, 78)'}}>Tipo</p>
                </div>
                <div style={{marginBottom:'10px',display:'flex',justifyContent:'space-around',color:'rgb(104, 98, 98)'}} >
                    {tipos.map(e=><div style={{fontSize:'20px',color:'rgb(104, 98, 98)'}} key={e}>{e}</div>)}
                </div>
            </div>   
        )
    }else return null;
}
