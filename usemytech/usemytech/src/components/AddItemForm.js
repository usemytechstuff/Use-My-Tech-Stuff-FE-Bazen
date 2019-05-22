import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";
import Loader from "react-loader-spinner";

class AddItemForm extends Component {
  state = {
    item: {
      owner: "",
      title: "",
      description: "",
      type: "",
      price: "",
      availability: ""
    }
  };

  handleItemChange = event => {
    this.setState({
      item: {
        ...this.state.item,
        [event.target.name]: event.target.value
      }
    });
  };

  addItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.item).then(() => {
      this.props.history.push("/protected");
    });
    this.setState({
      item: {
        owner: "",
        title: "",
        description: "",
        type: "",
        price: "",
        availability: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={this.state.item.title}
            onChange={this.handleItemChange}
          />
          Type:{" "}
          <input
            type="text"
            name="type"
            value={this.state.item.type}
            onChange={this.handleItemChange}
          />
          Price:{" "}
          <input
            type="integer"
            name="price"
            value={this.state.item.price}
            onChange={this.handleItemChange}
          />
          Description:{" "}
          <input
            type="text"
            name="description"
            value={this.state.item.description}
            onChange={this.handleItemChange}
          />
          Availability:{" "}
          <input
            type="boolean"
            name="availability"
            value={this.state.item.availability}
            onChange={this.handleItemChange}
          />
          Owner:{" "}
          <input
            type="integer"
            name="owner"
            value={this.state.item.owner}
            onChange={this.handleItemChange}
          />
          <button>
            {this.props.addingItem ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Add Item"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ addingItem }) => ({
  addingItem
});

// const mapStateToProps = state => ({
//   addingItem: state.addingItem,
//   error: state.error
// });

export default connect(
  mapStateToProps,
  { addItem }
)(AddItemForm);
