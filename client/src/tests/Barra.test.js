import React from 'react';
import {shallow} from 'enzyme';

import BarraOrdenamiento from '../components/PagInicial/BarraOrdenamiento/BarraOrdenamiento.js'





describe('<BarraOrdenamiento />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BarraOrdenamiento />)
  })
  it('deberai renderizar 8 botones en total para cada uno de sus filtrados',()=>{
    const buttonText = wrapper.find('button')
    expect(buttonText).toHaveLength(8)
  })
  it('deberia renderizar un "label" con el texto "Ordenar por Fuerza"', () => {
    expect(wrapper.contains(<label>Ordenar por Fuerza</label>)).toEqual(true)
  })
  it('deberia renderizar un "label" con el texto "Ordenar Alfabeticamente"', () => {
    expect(wrapper.contains(<label>Ordenar Alfabeticamente</label>)).toEqual(true)
  })
  it('deberia renderizar tres "label" con el texto "Filtrar"', () => {
    expect(wrapper.contains(<label>Filtrar</label>)).toEqual(true)
  })
  
  
});