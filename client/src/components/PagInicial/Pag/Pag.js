import React  from 'react';
import Pokemons from '../Pokemons/Pokemons.js'

export default function Pag({pokemonL}){
   return pokemonL && pokemonL.length>0 && <Pokemons items={pokemonL} /> 
}

