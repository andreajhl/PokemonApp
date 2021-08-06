
import {Route} from 'react-router';

import Inicio from './components/PagInicial/Inicio/Inicio.js'
import TiposPokemon from './components/TiposPokemon/TiposPokemon.js';
import Home from './components/PagInicial/Home/Home.js'
import Fav from './components/Fav/Fav.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js'
import AddPokemon from './components/AddPokemon/AddPokemon.js'

function App() {
  return (
    <> 
      <Route exact path='/' component={Inicio} />
      <Route path='/pokemons/type' component={TiposPokemon} />
      <Route exact path='/pokemons' component={Home} />
      <Route path='/pokemons/favs' component={Fav} />
      <Route path='/pokemons/detail/:id' render={({match})=> <PokemonDetail match={match.params.id} /> } />
      <Route path='/pokemons/add' component={AddPokemon} />
    </>

  );
}

export default App;
