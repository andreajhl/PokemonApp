const initialState={
    pokemonsLoading:[],
    pokemonFavs:[],
    pokemonDetail:{},
    pokemonsTipos:[],
    pokemonsFilter:[]
}

export const rootReducer = (state= initialState, action)=>{
    var {type, payload}= action
   
    switch (type){
        case 'CREATE_POKEMON':
            return {
                ...state,
                pokemonsLoading:[payload,...state.pokemonsLoading]
            };
        case 'ADD_POKEMON_FAV':
            var buscarFav= state.pokemonFavs.filter(e=>e.nombre===payload.nombre)
            return {
                ...state,
                pokemonFavs: buscarFav.length>0 ? state.pokemonFavs : [payload,...state.pokemonFavs]
            };
        case 'REMOVE_POKEMON_FAV':
            return{
                ...state,
                pokemonFavs: state.pokemonFavs.filter((e)=>e.id !== payload)
            }
        case 'GET_POKEMON_NAME':
            
           if(payload.nombre) {
               var buscar= state.pokemonsLoading.filter(e=>e.nombre===payload.nombre)
               var newArray= state.pokemonsLoading.filter(e=>e.nombre !== payload.nombre)
            }
            return{
                ...state,
                pokemonsLoading: payload.nombre? buscar.length > 0 ?  buscar.concat(newArray) : [payload,...state.pokemonsLoading] : state.pokemonsLoading
            
            };
        case 'GET_POKEMON_DETAIL':
            return{
                ...state,
                pokemonDetail:payload
            };
        case 'GET_POKEMON_LOADING':
            return{
                ...state,
                pokemonsLoading:payload,
           
            };
        case 'POKEMON_FILTER_TYPE':
            return{
                ...state,
               pokemonsFilter:state.pokemonsLoading && state.pokemonsLoading.filter(e=> e.tipos.includes(payload))
            };
        case 'GET_POKEMONS_TIPOS':
            return {
                ...state,
                pokemonsTipos:payload
            };
        default :
            return state;
    }
}