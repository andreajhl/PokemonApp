import React from 'react';
import { useSelector } from 'react-redux';

import PokemonFav from './PokemonFav';
import Nav from '../Nav/Nav.js'
import '../../Styles/fav.scss'


export default function Fav (){
    const favs=useSelector(state=>state.pokemonFavs)
    return (
        <div>
            <header>
                <Nav />
            </header>
            <div className='fav'>
                { favs.length > 0 && favs.map(e=> <PokemonFav 
                   key={e.id}
                   id={e.id}
                   nombre={e.nombre}
                   img={e.img}
                   tipos={e.tipos}
                   fuerza={e.fuerza}
                />)
                }{
                    favs.length ===0 && <p>No hay pokemons favoritos</p>
                }
            </div>
            
        </div>
    )
}
