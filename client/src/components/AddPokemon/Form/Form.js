import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';

import './form.css'
import {addPokemon} from '../../../actions/index.js'

export default function Form(){

    const tipos=useSelector(state=>state.pokemonsTipos)
    const dispatch=useDispatch()

    const[state,setState]=useState({
        nombre:'',
        vida:'',
        fuerza:'',
        defensa:'',
        velocidad:'',
        altura:'',
        peso:'',
        img:'',
    })

    const [type,setTypes]= useState([])
    
    function handleTypes(e){
        setTypes([
            ...type,
            [e.target.name] = e.target.value
            
        ])
    }
    function handleChange(e){
    
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
      }
    
        function handleSubmit(e) {
            e.preventDefault()
            const {nombre,vida,fuerza,defensa,velocidad,altura,peso,img}= state
            var obj={ nombre,vida,fuerza,defensa,velocidad,altura,peso,img,tipos:type }
            dispatch(addPokemon(obj))
            alert('pokemon creado')
            setState({ 
                nombre:'',
                vida:'',
                fuerza:'',
                defensa:'',
                velocidad:'',
                altura:'',
                peso:'',
                img:''
            });
            setTypes([])
        }
      
    return (
       
            <form className='form' onSubmit = { (e) => handleSubmit(e) } >
                <div style={{marginTop: '-10px'}}>
                    <h3>Crea tu propio prokemon</h3>
                    <label>Nombre</label>
                    <input type='text' name='nombre' placeholder='Nombre' required autoComplete='off' value={state.nombre} onChange={(e) => handleChange(e)} />
                </div>
                <div className='bloq'>
                <div className="bloq1">
                    <label>Vida</label>
                    <input type='number' name='vida' className='input' value={state.vida} required autoComplete='off' min='0' onChange={(e) => handleChange(e)}></input>
                    <label>Fuerza</label>
                    <input type='number' name='fuerza' className='input' value={state.fuerza} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} />
               </div>
                <div className="bloq2">
                    <label>Defensa</label>
                    <input type='number' name='defensa' className='input' value={state.defensa} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} />
                    <label>Velocidad</label>
                    <input type='number' name='velocidad' className='input' value={state.velocidad} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} />
                   </div>
                <div className='bloq3' >
                     <label>Altura</label>
                    <input  type='number' name='altura' className='input' value={state.altura} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} />
                    <label>Peso</label>
                    <input  type='number' name='peso' className='input' value={state.peso} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} /> 
                </div>
                </div>
                <div className='img'>
                    <label>imagen</label>
                    <input  type='url' name='img' placeholder='URL' value={state.img} required autoComplete='off' onChange={(e) => handleChange(e)} />
                </div>
                <h4>Elige un tipo de pokemon</h4>
                <div className='scrollDiv'>
                    {tipos.map(e=>(<div className='list' key={e}>
                                <label>{e}</label>   
                                <input type='checkbox' value={e} name='type' onChange={(e)=>handleTypes(e)}/>
                            </div>)
                    )}
                </div>
                    {state.nombre&&state.altura&&state.defensa&&state.fuerza&&state.img&&state.peso&&state.vida&&type.length> 0 && <button className='button' type='submit' >Submit</button>}
                
            </form>
    
    )
}
