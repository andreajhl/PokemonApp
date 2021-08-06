const { Router } = require('express');

const fetch= require ('node-fetch');
const {Tipo}= require('../db.js')

const router = Router();

router.get('/', async (req,res)=>{

   var p=await Tipo.findOne({

       where:{
           nombre:'normal'
       }
   });
 
    if(!p){

        try {

           var p=await fetch(`https://pokeapi.co/api/v2/type`);

               p=await p.json()

           var tipos= p.results.map(e=> e.name);
         
                p=tipos.map(async e=> await Tipo.create({ nombre:e}));
      
           res.status(200).send(tipos);

        } catch (error) {

            res.status(404).send('error');
        };
    }else{
            var p= await Tipo.findAll()
            
                p= p.map(e=>e.nombre)
                
           return  res.status(200).send(p)
   };
});

module.exports = router;
