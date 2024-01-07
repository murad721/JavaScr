import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(obj => (
            <Item key={obj.id} item={obj} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default Items