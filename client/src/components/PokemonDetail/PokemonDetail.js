import React, { useEffect } from 'react'
import Nav from '../Nav/Nav';
import { useDispatch,useSelector } from 'react-redux';

import { getPokemonDetail } from '../../actions/index.js'
import '../../Styles/pokemonDetail.scss'



export default function PokemonDetail({match}){

    const dispatch=useDispatch()
    const detail=useSelector(state=>state.pokemonDetail)

    useEffect(()=>{
        dispatch(getPokemonDetail(match))
    },[dispatch,match])
    
    const {nombre,altura,defensa,fuerza,id,img,peso,tipos,velocidad,vida}=detail

    if(nombre){

    

        return (
            <div >
                <header>
                    <Nav/>
                </header>
                <div className='detailContiner' >
                    <div  className="pokemonContainerDetail" >
                        <div className='cardheaderDetail'>
                            <img src={img} alt="pokemon" className='cardimgDetail' />
                        </div>
                        <div className='pokemoncuerpo'>
                            <div className='pokemoncuerpo_inicio'>
                                <h2 >{nombre} </h2>
                                <p style={{fontSize:'20px', color:'rgb(51, 50, 50)'}} className="cardbodyID">ID:{id}</p>
                            </div>
                            <div className='pokemoncuerpo_cuerpo' >
                                <div >
                                    <p >HP:{vida}</p>
                                    <p >fuerza: {fuerza}</p>   
                                </div>
                                <div >
                                    <p >altura: {altura}</p>
                                    <p  >defensa: {defensa}</p>
                                </div>
                                <div>
                                    <p >peso: {peso}</p>
                                    <p  >velocidad:{velocidad}</p>
                                </div>
                            </div>
                            <p style={{fontSize:'20px',margin:'4px',color:'rgb(82, 78, 78)'}}>Tipo</p>
                            <div className='tiposmapDetail' >
                                {tipos.map(e=><div style={{fontSize:'20px'}} key={e}>{e}</div>)}
                            </div> 
                        </div>
                    </div> 
                </div>
                
            </div>
        );
    }else return null;
};
