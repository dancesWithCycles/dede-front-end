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

const Contact=()=>
{
    return(
	    <div>

	    <h2><FormattedMessage id="Contact.heading.about"/></h2>

	    <p><FormattedMessage id="Contact.text.about"/> <a href="mailto:dialog@begerad.de">Stefan Begerad</a>.</p>

	    <p><FormattedMessage id="Contact.text.github"/> <a href="https://github.com/dancesWithCycles/dede-front-end" target="_blank">GitHub</a>.</p>

	    <h2><FormattedMessage id="Contact.heading.impressung"/></h2>

	    <address>
	    <strong>Stefan Begerad</strong><br />
	9259 Hobnail Court<br />
	Columbia, Maryland 21045<br />
	USA<br />
	</address>

	</div>
    );
}
export default Contact;
