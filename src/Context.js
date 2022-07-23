import React, { Component } from 'react'

const Context = React.createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default: return state; 
  }
}

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(reducer(this.state, action))
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json(); 
      this.setState({ contacts: data })
    } catch (error) {
      console.log(`There was an eroor: `);
      this.setState({ contacts: [{ 'id': 456, 'title': 'title', 'body': 'body', 'userId': 'userId' }] })
    }

  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer; 