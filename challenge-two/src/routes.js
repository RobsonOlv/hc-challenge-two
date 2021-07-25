import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Lista from './pages/lista';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Lista} />
                <Route path= "/cadastro/:name" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}