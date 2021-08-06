const { Pokemon, conn } = require('../../src/db.js');


describe('Pokemon model', () => {
  before(() => conn.authenticate()
    );
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' })
      });
      it('their ID are unique',(done)=>{
        var pokemonCreado1=  Pokemon.create({name: 'Pikachu'})
        var pokemonCreado2=  Pokemon.create({name: 'Parchu'})
        done(pokemonCreado1.id !== pokemonCreado2.id)

      });
    });
  });
});
