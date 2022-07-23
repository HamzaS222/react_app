import React, { Component } from 'react'
import { Consumer } from '../../Context'
import Contact from './Contact'


export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value  => {
          const contacts = value.contacts;
          return(
          <React.Fragment>
              {
              contacts.map(contact =>
              <Contact
                key={contact.id}
                id={contact.id}
                title={contact.title}
                body={contact.body}
                userid={contact.userId}
              />
            )}              
          </React.Fragment>)
        }}
      </Consumer>
    )
  }
}
