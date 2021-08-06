import React from 'react'
import '../../../stylos/button.css'


export default function BarraOrdenamiento ({allPokemons, filtrarPokemonsPropios, currentPag, next, prev, ordenarPokemonsAlf, ordenarPokemonsNum}) {

  return (
        <div className='camp'>
            <div className='camp1'>
                <label className='pag'>pag: {currentPag}</label>
                <div>
                    <button className='button' onClick={()=>prev()}>Prev</button>
                    <button className='button' onClick={()=>next()}>Next</button>
                </div>
            </div>
            <div className='camp2'>
                <div className='comandosOrdenamiento'>
                    <div className='fuerza'>
                        <label>Ordenar por Fuerza</label>
                        <div className='blockButton'>
                            <button className='button' onClick={()=>ordenarPokemonsNum('asc')}>Asc</button>
                            <button className='button' onClick={()=>ordenarPokemonsNum('desc')}>Desc</button>
                        </div>
                    </div> 
                    <div className='nombre'>
                        <label>Ordenar Alfabeticamente</label>
                        <div className='blockButtonOrden'>
                            <button className='button' onClick={()=>ordenarPokemonsAlf('asc')}>Asc</button>
                            <button className='button' onClick={()=>ordenarPokemonsAlf('desc')}>Desc</button>
                        </div>
                    <div>
                        <label>Filtrar</label>
                        <div className='blockButtonFiltrar'>
                            <button className='button' onClick={()=>filtrarPokemonsPropios()}>Mis Creaciones</button>
                            <button className='button' onClick={()=>allPokemons()}>Pokemons Totales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}