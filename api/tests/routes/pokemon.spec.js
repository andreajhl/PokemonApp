/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true }))
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
  describe('GET /pokemons?name=pikachu', () => {
    it('responds with 200', () => agent.get('/pokemons?name=pikachu').expect(200));
    it('search for pokemons by their names', () =>
      agent.get('/pokemons?name=pikachu').expect({"id":25,"nombre":"pikachu","tipos":["electric"],"vida":35,"fuerza":55,"defensa":40,"velocidad":90,"peso":60,"altura":4,"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"})
    );
  });
  describe('GET /pokemons/:id', () => {
    it('responds with 200', () => agent.get('/pokemons/1').expect(200));
    it('search pokemons by their ID', () =>
      agent.get('/pokemons/1').expect({"id":1,"nombre":"bulbasaur","tipos":["grass","poison"],"vida":45,"fuerza":49,"defensa":49,"velocidad":45,"peso":69,"altura":7,"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"})
    );
  });
  describe('POST /pokemons', () => {
    it('Add a new Pokemon', () =>{
      const post={"nombre":"bulbasaur","tipos":["grass","poison"],"vida":45,"fuerza":49,"defensa":49,"velocidad":45,"peso":69,"altura":7,"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"}
      agent.post('/pokemons')
      .send(post)
      .then((res)=>{
        expect(res.body.results.nombre).to.be.equal("bulbasaur")
      })
    });
  });

});
