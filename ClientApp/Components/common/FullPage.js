import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Routes from '../../Routes'

class FullPage extends Component {
    render() {
       return (
           <div>         
                <h2>Page Top</h2>    
                <Routes/>
           </div>
       ); 
    }
}

FullPage.propTypes = {};
FullPage.defaultProps = {};

export default FullPage;