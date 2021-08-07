import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

import Nav from '../../Nav/Nav'
import Pag from '../Pag/Pag'
import BarraOrdenamiento from '../BarraOrdenamiento/BarraOrdenamiento'

import '../../../Styles/home.scss'




var cards=12;
export default function Home(){
   const pokemonL= useSelector(state=>state.pokemonsLoading)
   console.log(pokemonL)
   
    const [currentPag, setCurrentPag]= useState(0)
    const [items, setItems]=useState(null)

    useEffect(()=>{
        setItems([...pokemonL].splice(0,cards))
    },[pokemonL])

    const next=()=>{
       const totalElementos= pokemonL.length
       const next= currentPag +1
       const index= next * cards
       if(index>totalElementos) return;
       setItems([...pokemonL].splice(index,cards))
       setCurrentPag(next)
    };

    const prev=()=>{
        const prev= currentPag-1
        if(prev < 0) return;
        const index= prev * cards
        setItems([...pokemonL].splice(index,cards))
        setCurrentPag(prev)
    };

    const ordenarPokemonsAlf=(orden)=>{
        if(orden==='asc') {
            setItems([...items].sort((a,b)=>{
                if(a.nombre>b.nombre) return 1
                else if(a.nombre<b.nombre) return -1
                else return 0
            }));
        }else {
            setItems([...items].sort((a,b)=>{
            if(a.nombre<b.nombre) return 1
            else if(a.nombre>b.nombre) return -1
            else return 0
            }));
        };
    };
    
    const ordenarPokemonsNum = (orden) =>{
        if(orden==='asc') setItems([...items].sort((a,b)=>a.fuerza - b.fuerza)); 
        else  setItems([...items].sort((a,b)=>b.fuerza - a.fuerza));
    };

   const filtrarPokemonsPropios=()=>{
       setItems([...pokemonL].filter(e=>e.id.length>2))
   }
   const allPokemons=()=>{
       setItems([...pokemonL])
   }
    return (
            <div className='homecontainer'>
                    <Nav />
                <div className='cuerpo'>
                    <div className='cuerpo1'>
                        <BarraOrdenamiento allPokemons={allPokemons} filtrarPokemonsPropios={filtrarPokemonsPropios} currentPag={currentPag} prev={prev} next={next} ordenarPokemonsAlf={ordenarPokemonsAlf} ordenarPokemonsNum={ordenarPokemonsNum} /> 
                    </div> 
                    <div className='cuerpo2'>
                        <Pag pokemonL={items} />
                    </div> 
                </div>
            </div>
    )
}
