import React from 'react'
import {shallow} from 'enzyme'

import AddPokemon from '../components/AddPokemon/addPokemon.js'
import Nav from '../components/Nav/nav.js'
import Form from '../components/AddPokemon/Form/form.js'

describe('Prueba en <AddPokemon />', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper=shallow(<AddPokemon />)
    });
    it('renderiza un componente <Nav />',()=>{
        expect(wrapper.find(Nav)).toHaveLength(1)
    });
    it('renderiza un componente <Form />',()=>{
        expect(wrapper.find(Form)).toHaveLength(1)
    })
});