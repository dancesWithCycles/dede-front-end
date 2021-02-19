/*
Front end for Dede passenger information system at dedriver.org
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
import { FormattedMessage } from 'react-intl';

const App=()=>
{
    return(
        <>
        <p>
            <FormattedMessage id="Aapp.text"/>
        </p>
        <p>
            <a href="http://dedriver.org/share/Dede_Android_App.apk" download>
                <FormattedMessage id="Aapp.link"/>
            </a>
        </p>
        </>
    ); 
}
export default App;
