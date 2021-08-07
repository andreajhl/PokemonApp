import React from 'react'

import Search from '../Search/Search.js'

import '../../../Styles/button.scss'
import '../../../Styles/barraOrdenamiento.scss'
import {FaArrowAltCircleUp, FaArrowAltCircleDown,FaAngleLeft, FaAngleRight} from 'react-icons/fa'


export default function BarraOrdenamiento ({allPokemons, filtrarPokemonsPropios, currentPag, next, prev, ordenarPokemonsAlf, ordenarPokemonsNum}) {

  return (
        <div className='camp'>
            <div className='search'>
                <Search />
            </div>
            <div className='camp_i'>
                <button className='buttonOrder' onClick={()=>prev()}><FaAngleLeft/></button>
                <label className='camp_i_pag'>page: {currentPag}</label>
                <button className='buttonOrder' onClick={()=>next()}><FaAngleRight/></button>
           
            </div>
            <div className='camp_d'>
                    <div className='block'>
                        <label>Ordenar por Fuerza</label>
                        <div>
                            <button className='buttonOrder' onClick={()=>ordenarPokemonsNum('asc')}> <FaArrowAltCircleUp /> </button>
                            <button className='buttonOrder' onClick={()=>ordenarPokemonsNum('desc')}><FaArrowAltCircleDown/></button>
                        </div>
                    </div> 
                    <div className='block'>
                        <label>Ordenar Alfabeticamente</label>
                        <div>
                            <button className='buttonOrder' onClick={()=>ordenarPokemonsAlf('asc')}><FaArrowAltCircleUp /></button>
                            <button className='buttonOrder' onClick={()=>ordenarPokemonsAlf('desc')}><FaArrowAltCircleDown/></button>
                        </div>
                        <div className='filtrar'>
                            <label>Filtrar</label>
                            <div>
                                <button className='button' onClick={()=>filtrarPokemonsPropios()}>my cards</button>
                                <button className='button' onClick={()=>allPokemons()}>all cards</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}