import React, { useEffect } from 'react'
import Nav from '../Nav/Nav';
import { useDispatch,useSelector } from 'react-redux';

import { getPokemonDetail } from '../../actions/index.js'
import './pokemonDetail.css'



export default function PokemonDetail({match}){

    const dispatch=useDispatch()
    const detail=useSelector(state=>state.pokemonDetail)

    useEffect(()=>{
        dispatch(getPokemonDetail(match))
    },[])
    
    const {nombre,altura,defensa,fuerza,id,img,peso,tipos,velocidad,vida}=detail

    if(nombre){

        return (
            <div>
                <header>
                    <Nav/>
                </header>
                <div style={{fontFamily:'cursive'}} className="pokemonContainerDetail" >
                    <div className='cardheader'>
                        <img src="https://i.pinimg.com/originals/61/9c/39/619c39799816bfeb2d99365b16bffea5.png" alt="header" className='header' />
                        <img src={img} alt="pokemon" className='cardimgDetail' />
                    </div>
                    <div>
                       <div >
                            <h2 style={{margin:'0px', color:'rgb(27, 25, 25)', fontSize:'30px'}}>{nombre} </h2>
                            <p style={{margin:'4px',fontSize:'25px', color:'rgb(51, 50, 50)'}} className="cardbodyID">ID:{id}</p>
                        </div> 
                    </div>
                    <div style={{display:'inline-flex',color:'rgb(82, 78, 78)',fontSize:'20px'}} >
                        <div style={{maxWidth:'120px', marginRight:'10px'}}>
                            <p style={{margin:'3px'}}>HP:{vida}</p>
                            <p style={{margin:'0px'}} >fuerza: {fuerza}</p>   
                        </div>
                        <div style={{maxWidth:'120px', marginRight:'10px'}}>
                            <p style={{margin:'3px'}}>altura: {altura}</p>
                            <p style={{margin:'0px'}} >defensa: {defensa}</p>
                        </div>
                        <div style={{maxWidth:'120px', marginRight:'10px'}}>
                            <p style={{margin:'3px'}}>peso: {peso}</p>
                            <p style={{margin:'0px'}} >velocidad:{velocidad}</p>
                        </div>
                    </div>
                    <p style={{fontSize:'20px',margin:'4px',color:'rgb(82, 78, 78)'}}>Tipo</p>
                    <div style={{marginBottom:'10px',display:'flex',justifyContent:'space-around',color:'rgb(104, 98, 98)'}} >
                        {tipos.map(e=><div style={{fontSize:'20px'}} key={e}>{e}</div>)}
                    </div> 
                </div> 
            </div>
        );
    }else return null;
};
