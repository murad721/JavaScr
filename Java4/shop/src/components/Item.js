import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img_url} />
        <h2>
          {this.props.item.brand} {this.props.item.model}
        </h2>
        <p>{this.props.item.price}</p>
        <div className='add-to' onClick={() => this.props.onAdd(this.props.item)}>Купить</div>
      </div>
    )
  }
}

export default Item