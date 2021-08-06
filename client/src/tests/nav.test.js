import React from 'react'
import {shallow} from 'enzyme'
import { NavLink } from 'react-router-dom'

import Nav from '../components/Nav/nav.js'

describe('Prueba en <Nav />', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper=shallow(<Nav />)
    });
    it('debe renderizar 4 <NavLink />', ()=>{
        expect(wrapper.find(NavLink)).toHaveLength(4);
    });
    it('el primer NavLink debe contener el texto "Home" y cambiar la ruta hacia "/pokemons".',()=>{
        expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/pokemons');
        expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
    });
    it('el tercer NavLink debe contener el texto "Tipos" y cambiar la ruta hacia "/pokemons/type".',()=>{
        expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/pokemons/type');
        expect(wrapper.find(NavLink).at(1).text()).toEqual('Tipos');
    });
    it('el tercer NavLink debe contener el texto "Add Pokemon" y cambiar la ruta hacia "/pokemons/add".',()=>{
        expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/pokemons/add');
        expect(wrapper.find(NavLink).at(2).text()).toEqual('Add Pokemon');
    });
    it('el tercer NavLink debe contener el texto "Favoritos" y cambiar la ruta hacia "/pokemons/favs".',()=>{
        expect(wrapper.find(NavLink).at(3).prop('to')).toEqual('/pokemons/favs');
        expect(wrapper.find(NavLink).at(3).text()).toEqual('Favoritos');
    });
});