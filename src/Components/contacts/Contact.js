import React, { Component } from 'react'
import { Consumer } from '../../Context'

export default class Contact extends Component {
  state = {
    isVisibleConatct: false
  }
  deleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  }
  render() {
    return(
    <Consumer>
      {value => {
        const { dispatch } = value; 
        return (
        <React.Fragment>
          <div className="card text-bg-primary  mb-3 mt-3" style={{ maxWidth: '80%', margin: 'auto' }} >
            <div className="card-header" >{this.props.title.toUpperCase()}
              <i className="fas fa-times" style={{ float: 'right', cursor: 'pointer' }} onClick={this.deleteContact.bind(this, this.props.id, dispatch)}></i>
              <i className="fas fa-solid fa-arrow-down" style={{  cursor: 'pointer', width: '2rem'}}
                onClick={(e) => {
                  this.setState({ isVisibleConatct: !this.state.isVisibleConatct });
                }}
              ></i>
            
            </div>
            {this.state.isVisibleConatct ?
              (<div className="card-body">
                <h5 className="card-title">{this.props.body}</h5>
                  <p className="card-text">
                    <strong>"{this.props.userid}"</strong>
                    </p>
              </div>)
              : null}
          
          </div>
        </React.Fragment>
      )
      }
      }
    </Consumer>)
  }
}
