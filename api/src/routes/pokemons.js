const e = require('express');
const { Router } = require('express');

const fetch= require ('node-fetch');
const {Pokemon,Tipo}= require('../db.js')


const router = Router();

var file=[];

for(let i=1; i<=40; i++){
  file.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
};

router.get('/',async (req,res)=>{

    const{name}= req.query;

    if(!name){
       
        var p= file.map(e => fetch(e).then(e=>e.json()));

            p= await Promise.all(p);
    
        var todo= p.map( a =>{
            
            return {
                id:a.id,
                nombre:a.name,
                tipos:a.types.map(e=>e.type.name),   
                vida: a.stats[0].base_stat,
                fuerza: a.stats[1].base_stat,
                defensa: a.stats[2].base_stat,
                velocidad: a.stats[5].base_stat,
                peso: a.weight,
                altura: a.height,
                img:a.sprites.other.dream_world.front_default
            };
        });


       res.status(200).send(todo);

    }else {
        try {
            var a= await Pokemon.findOne({ where:{nombre: name}, include: Tipo});

            var obj={
                id: a.id,
                nombre:a.nombre,
                vida:a.vida,
                fuerza:a.fuerza,
                defensa:a.defensa,
                velocidad:a.velocidad,
                peso:a.peso,
                img:a.img,
                tipos:a.tipos.map(e=>e.dataValues.nombre)
            }

            if(a) return res.status(200).send(obj)
      } catch (error) {

          try{
                var p= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                p= await p.json();
        
                var obj={
                    id:p.id,
                    nombre:p.name,
                    tipos:p.types.map(e=>e.type.name),   
                    vida: p.stats[0].base_stat,
                    fuerza: p.stats[1].base_stat,
                    defensa: p.stats[2].base_stat,
                    velocidad: p.stats[5].base_stat,
                    peso: p.weight,
                    altura: p.height,
                    img: p.sprites.other.dream_world.front_default
                }
        
                res.status(200).send(obj);

            }catch(erro){
                res.status(404).send('pokemon no existe')
            }
        };
    };
});

router.get('/:id',async (req,res)=>{

    const {id} = req.params;


    try {

        if(id.length > 2){
            var p= await Pokemon.findOne({where: {id}, include: Tipo});
            var obj={
                id: p.id,
                nombre:p.nombre,
                vida:p.vida,
                fuerza:p.fuerza,
                defensa:p.defensa,
                velocidad:p.velocidad,
                peso:p.peso,
                img:p.img,
                tipos:p.tipos.map(e=>e.dataValues.nombre)
            }
            res.status(200).send(obj);

        }else{
            var num= parseInt(id)
            var p= await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);

            var a =await p.json();
            
            var pk={   
                id:a.id, 
                nombre:a.name,
                tipos:a.types.map(e=>e.type.name),    
                vida: a.stats[0].base_stat,
                fuerza: a.stats[1].base_stat,
                defensa: a.stats[2].base_stat,
                velocidad: a.stats[5].base_stat,
                peso: a.weight,
                altura: a.height,
                img:a.sprites.other.dream_world.front_default
            };
          
            res.status(200).send(pk);
        };   
    } catch (error) {

        res.status(404).send(error);
    }; 
});


router.post('/',async (req,res)=>{
    const {nombre, vida, fuerza, defensa, velocidad, altura, peso, tipos, img}= req.body;
   
    try {
        var createPokemon= await Pokemon.create({
        
            nombre, vida, fuerza, defensa, velocidad, altura, peso, img

        });
        var pk= tipos.map(async (e)=> await Tipo.findOne({ where:{ nombre:e} }));
      
            pk= await Promise.all(pk);
        
            pk.forEach(e=> createPokemon.setTipos(e));
        var pokemonCreado=await Pokemon.findOne({
            where:{
                id:createPokemon.dataValues.id
            }
        })
        var p=pokemonCreado.dataValues
        var obj={
            id: p.id,
            nombre:p.nombre,
            vida:p.vida,
            fuerza:p.fuerza,
            defensa:p.defensa,
            velocidad:p.velocidad,
            peso:p.peso,
            img:p.img,
            tipos
        }
        
        res.status(200).send(obj);
    } catch (error) {
        console.log('error');
    };
});

 module.exports = router;

