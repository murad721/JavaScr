import React, { Component } from 'react'

export class Selection extends Component {
    constructor(props) {
        super(props)
        this.state = {
             selection: [
                {
                    id: "all",
                    name: "Главная"
                },
                {
                    id: "phones",
                    name: "Смартфоны"
                },
                {
                    id: "tablets",
                    name: "Планшеты"
                },
                {
                    id: "laptop",
                    name: "Компьютеры"
                },
                {
                    id: "watch",
                    name: "Часы"
                }
             ]
        }
    }
  render() {
    return (
      <div className='selection'>
        {this.state.selection.map(obj => (
            <div key={obj.id} onClick={() => this.props.selectCategory(obj.id)}>{obj.name}</div>
        ))}
      </div>
    )
  }
}

export default Selection