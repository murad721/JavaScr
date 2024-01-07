import React, { Component } from 'react';
import { FaTrashCan } from  "react-icons/fa6";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img_url} />
        <h2>
          {this.props.item.brand} {this.props.item.model}
        </h2>
        <p>{this.props.item.price}</p> 
        <FaTrashCan className='trash-btn' onClick={() => this.props.delete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order