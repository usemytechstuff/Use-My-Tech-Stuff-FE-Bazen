import React from "react";

const Item = props => {
  return (
    <div className="item-card">
      <img src={props.item.imgURL} />
      <div className='item-info'>
      {/* <i class="far fa-times-circle" onClick={this.deleteItem}/> */}
        <h2>{props.item.title}</h2>
        <p>{props.item.type}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default Item;
