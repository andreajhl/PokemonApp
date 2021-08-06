import React from 'react';

import Form from './Form/Form';
import Nav from '../Nav/Nav.js'

export default function AddPokemon (){
    return(
        <div>
            <header>
                <Nav/>
            </header>
            <div>
                <Form/>
            </div>
        </div>
    )
}

