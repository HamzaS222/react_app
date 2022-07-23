import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layouts/textInputGroup';
import { v4 as uuidv4 } from 'uuid';


export default class AddContact extends Component {
  state = {
    title: '', 
    body: '',
    userid:''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e, dispatch) => {
    e.preventDefault();
    this.state.id = uuidv4(); 
    dispatch({ type: "ADD_CONTACT", payload: this.state });
    
    //clear inputs
    this.setState({
      title: '', 
      body: '',
      userid:''
    })
  }

  render() {
    const { title, body, userid } = this.state; 
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <h2 className="mt-3">CONTACTS</h2>
              <form onSubmit={e=>this.onSubmit(e,dispatch)}>
                <TextInputGroup
                  name="title"
                  type="text" 
                  placeholder="Enter Title..."
                  label="Title"
                  value={title}
                  onchange={this.onChange}
                />
                <TextInputGroup
                  name="body"
                  type="text" 
                  placeholder="Enter Body..."
                  label="Body"
                  value={body}
                  onchange={this.onChange}
                />
                <TextInputGroup
                  name="userid"
                  type="text" 
                  placeholder="Enter your ID..."
                  label="User ID"
                  value={userid}
                  onchange={this.onChange}
                />
                
                <div className="col-12">
                <button type="submit" className="btn btn-secondary">Add Contact</button>
              </div>
              </form>
            </div>
          )
        }}
        
      </Consumer>
    )
  }
}
