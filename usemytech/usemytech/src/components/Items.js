import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../actions';

import Item from './Item';

class Items extends Component {
    


componentDidMount() {
    this.props.fetchItems();
}

render(){
    return(
        <div className='item-list'>
        
            {this.props.error && <p>{this.props.error}</p>}
        {this.props.items.map(item => {
            return <Item key={item.id} item={item} />
        })}
            </div>
    )
}

}


const mapStateToProps = state => ({ 
    fetchingItems: state.fetchingItems,
    error: state.error,
    items: state.items  
})

export default connect(mapStateToProps, {fetchItems}) (Items)