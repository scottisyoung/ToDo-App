import React, { Component } from 'react';
import './todoList.css';


class TodoLists extends Component {
      constructor() {
        super()
        this.state={

    }
  }

  render() {
        const displayList = this.props.todos.map((todos, i) => {
            return (
                <div className="listTodos" key={i}>
                    <div className="newTodo">{todos}</div>
                    <div className='completed' onClick={() => {this.props.completeTodo(todos, i)}}>Complete</div>
                    <div className='delete' onClick={() => {this.props.deleteTodo(todos, i)}}> X </div>
                </div>
            )
        })


    return (
      <div className="listParent">
          <div className="list">
          <div className="tasksTitle">Tasks</div>
            {displayList}
          </div>
      </div>
    );
  }
}

export default TodoLists;