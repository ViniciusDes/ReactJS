import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main'; 
import Product from './pages/product/index'

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            {/* de acordo com a rota retorna cada componente, e isso é passado para app.js para a pagina */}
            <Route exact path="/" component={Main} />{/*quando a rota for "vazia"-tela principal retorna o componente main */}
            {/*So é retornado o main se for exatamente esse path "/" */}
            <Route path="/Products/:id" component={Product}/> 
            
        </Switch>
    </BrowserRouter>
);


export default Routes;