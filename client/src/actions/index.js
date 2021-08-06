    
export function addPokemon(payload){
     
    return async function (dispatch){
        var p= await fetch(`http://localhost:3001/pokemons`,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });
        const res= await p.json();
        return dispatch({type:'CREATE_POKEMON', payload: res});
    };
};


export function addPokemonFav (payload){
    return {
        type: 'ADD_POKEMON_FAV',
        payload
    };
};

export function removePokemonFav (id){
    return{
        type: 'REMOVE_POKEMON_FAV',
        payload: id
    };
};

export function getPokemonName(name){
    return async function(dispatch){
        let p= await fetch(`http://localhost:3001/pokemons?name=${name}`)
            p=await p.json()
        return dispatch({type:'GET_POKEMON_NAME', payload: p});
    };
};

export function getPokemonDetail (id){
    return async function(dispatch){
        let p= await fetch(`http://localhost:3001/pokemons/${id}`)
            p=await p.json()
        return dispatch({type: 'GET_POKEMON_DETAIL', payload:p});   
    }; 
};

export function getPokemonLoading (){
    return async function(dispatch){
        var p= await fetch (`http://localhost:3001/pokemons`)
            p= await p.json()
        return dispatch({type:'GET_POKEMON_LOADING', payload:p})
    };
};
 
export function filtrarTipo(type){
    return {
        type: 'POKEMON_FILTER_TYPE',
        payload:type
    };
};

export function getPokemonstipos (){
    return async function (dispatch){
        var p= await fetch(`http://localhost:3001/types`)
            p=await p.json();
            return dispatch({type:'GET_POKEMONS_TIPOS', payload:p})
    }
};
export function ordenarPokemon(payload){
    return {
        type: 'ORDENAR_POKEMON_ALFAVETICAMENTE',
        payload
    }
}