import React, { Component } from 'react';
import './completedTodos.css';


class CompletedTodos extends Component {
      constructor() {
        super()
        this.state={

    }
  }

  render() {
      const showCompleted = this.props.completedTodos.map((todos, i) => {
        return (
            <div key={i}>
                <div className="clparent">
                    <div className="completedList">{todos}</div>
                    <div className='deleteComplete' onClick={() => {this.props.deleteComplete(todos, i)}}> X </div>
                </div>
            </div>
        )
      })

    return (
      <div className="list2">
          <div className="completedTitle">Completed</div>
          {showCompleted}
      </div>
    );
  }
}

export default CompletedTodos;