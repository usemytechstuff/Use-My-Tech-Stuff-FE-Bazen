import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
    render(){
        return <h2>Protected Route</h2>
    }
}

export default connect(null, {})(ItemList);