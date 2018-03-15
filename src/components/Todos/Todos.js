import React, { Component } from 'react';
import './todos.css';


class Todos extends Component {
      constructor(props) {
        super(props)
        this.state={
            userInput: ''
    }
  }



  render() {
    return (
      <div>
             <div className ="inputParent">
                <div className="bgTodos">
                      <div className="todoTitle">I've got things <span>to do!</span></div>
                      <form onSubmit={e => {this.props.handleSubmit(e, this.state.userInput); this.setState({userInput: ''})}}>
                      <input className="inputBox" 
                             placeholder="Add a Task" 
                             onChange={(e) => {this.setState({userInput: e.target.value})}} 
                             value={this.state.userInput}
                             type="text"
                             />
                      <div className="addbtn"
                           onClick={e => {this.props.handleSubmit(e, this.state.userInput); this.setState({userInput: ""})}}>Add Item
                      </div>
                      </form>
                </div>
            </div>

      </div>
    );
  }
}

export default Todos;