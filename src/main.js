/*
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';  
import NavBar from "./navBar"
import About from "./pages/about";
import App from './pages/app';
import Contact from "./pages/contact";
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import './main.css';
import LocaleDe from "./locales/de.json";
import LocaleEn from "./locales/en.json";

const messages = {
    'de': LocaleDe,
    'en': LocaleEn
};

const language = navigator.language.split(/[-_]/)[0];  // language without region code

const Main=()=>
{
    return(
    <IntlProvider locale={language} messages={messages[language]}>
        <Router>
            <NavBar
	className='nav-bar'/>
	    <div
	className='main'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/app" component={App} />
                <Route component={NoMatch} />
            </Switch>
	    </div>
        </Router>
    </IntlProvider>
    ); 
}
export default Main;

