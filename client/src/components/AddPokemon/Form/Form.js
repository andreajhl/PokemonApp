import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import '../../../Styles/form.scss'
import swal from 'sweetalert';
import {addPokemon} from '../../../actions/index.js'

export default function Form(){

    const history= useHistory()
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
            swal("Good job!", "You created a new pokemon!", "success")
            const {nombre,vida,fuerza,defensa,velocidad,altura,peso,img}= state
            var obj={ nombre,vida,fuerza,defensa,velocidad,altura,peso,img,tipos:type }
            dispatch(addPokemon(obj))
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
            history.push('/pokemons')
        }
      
    return (
       
        <form  onSubmit = { (e) => handleSubmit(e) } >
            <div className='form'>
                <h3>Crea tu propio prokemon</h3>
                <div  className='divformName'>
                    <p>Nombre</p>
                    <input type='text' name='nombre' placeholder='Nombre' required autoComplete='off' value={state.nombre} onChange={(e) => handleChange(e)} style={{height:'20px'}} />
                </div>
                <div className='bloq'>
                    <div className="bloqs">
                        <div className='divform'>
                            <p>Vida</p>
                            <input type='number' name='vida' className='input' value={state.vida} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} style={{height:'20px', width:'60px'}} />
                        </div>
                        <div className='divform'>
                            <p>Fuerza</p>
                            <input type='number' name='fuerza' className='input' value={state.fuerza} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} style={{height:'20px', width:'60px'}}  />
                        </div>
                    </div>
                    <div className="bloqs">
                        <div className='divform'>
                            <p>Defensa</p>
                            <input type='number' name='defensa' className='input' value={state.defensa} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} style={{height:'20px', width:'60px'}}  />
                        </div>
                        <div className='divform'>
                            <p>Velocidad</p>
                            <input type='number' name='velocidad' className='input' value={state.velocidad} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} style={{height:'20px', width:'60px'}}  />                  
                        </div>
                    </div>
                    <div className='bloqs' >
                        <div className='divform'>
                            <p>Altura</p>
                            <input  type='number' name='altura' className='input' value={state.altura} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} style={{height:'20px', width:'60px'}}  />
                         </div>
                        <div className='divform'>
                            <p>Peso</p>
                            <input  type='number' name='peso' className='input' value={state.peso} required autoComplete='off' min='0' onChange={(e) => handleChange(e)} style={{height:'20px', width:'60px'}}  /> 
                        </div>
                    </div>
                </div>
                <div className='divformName'>
                    <p>imagen</p>
                    <input  type='url' name='img' placeholder='URL' value={state.img} required autoComplete='off' onChange={(e) => handleChange(e)} style={{height:'20px'}}  />
                </div>
                <h4>Elige un tipo de pokemon</h4>
                <div className='scrollDiv'>
                    {tipos.map(e=>(<div className='list' key={e}>
                                <label>{e}</label>   
                                <input type='checkbox' value={e} name='type' onChange={(e)=>handleTypes(e)}/>
                            </div>)
                    )}
                </div>
                    {state.nombre&&state.altura&&state.defensa&&state.fuerza&&state.img&&state.peso&&state.vida&&type.length> 0 && <button className='buttonForm' type='submit' >Submit</button>}
            </div>

        </form>
    )
}
