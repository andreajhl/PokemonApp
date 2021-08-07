import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../../pokemon.png'
import '../../Styles/nav.scss';

export default function Nav (){
    return (
        <div className="navbar">
            <img id="pokemon" src={img} height="60"  alt="" />
            <NavLink  exact to="/pokemons"  className='li'>
                <label className="link">Home</label>
           </NavLink>
            <NavLink to="/pokemons/type" className='li'>
                <label className="link">Tipos</label>
            </NavLink>
            <NavLink to="/pokemons/add" className='li'>
                <label className="link">Add Pokemon</label>
            </NavLink>
            <NavLink to='/pokemons/favs' className='li'>
                <label className="link">Favoritos</label>
            </NavLink>
        </div> 
    )
}
                     