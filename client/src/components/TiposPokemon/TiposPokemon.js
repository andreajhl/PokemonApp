import React from 'react'
import Nav from '../Nav/Nav.js'
import { useDispatch, useSelector } from 'react-redux'

import {filtrarTipo} from '../../actions/index.js'
import PokemonCardTipo from './PokemonCardTipo.js'
import '../../Styles/tipos.scss'

export default function TiposPokemon() {

    const tipos=useSelector(state=>state.pokemonsTipos)
    const arrayFiltradoTipo=useSelector(state=>state.pokemonsFilter) 
    const dispatch=useDispatch()

    return (
        <div style={{width:'100%'}}>
            <header>
                <Nav />
            </header>
            <div className='container'>
                     <h3 className='tituloTipo'>Elige un Tipo</h3>
                    <form>
                        <div className='inputTipos'>
                            {tipos.map(e=>(<div className='itipos' key={e}>
                                <label>{e}</label>   
                                <input type='radio' name='type' value={e} onChange={(e)=>dispatch(filtrarTipo(e.target.value))} />
                            </div>))}
                        </div>
                    </form>
               <div className='cardTipos'> 
                   <div className='cardlist'>
                        {arrayFiltradoTipo.length>0 && arrayFiltradoTipo.map(e=><div key={e.id}> 
                            <PokemonCardTipo
                                id={e.id}
                                nombre={e.nombre}
                                img={e.img}
                                tipos={e.tipos}
                                fuerza={e.fuerza}
                            />
                        </div>)}
                    </div>
               </div>
            </div>
        </div>
    );
};

