import React from 'react'

import Pokemon from '../Pokemon/Pokemon.js'

export default function Pokemons({items}){
    
    return items && items.map(e=> <Pokemon 
                   key={e.id}
                   id={e.id}
                   nombre={e.nombre}
                   img={e.img}
                   tipos={e.tipos}
                   fuerza={e.fuerza}
                />)
    
};
