import React from 'react'

 const Item = props => {
    return(
        <div>
            <h2>{props.item.title}</h2>
            <p>{props.item.type}</p>
            <p>{props.item.description}</p>
        
        </div>
    )
}

export default Item