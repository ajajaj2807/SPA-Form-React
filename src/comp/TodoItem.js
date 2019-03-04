import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return{
            background: '#e6efff',
            padding: '15px',
            marginBottom: '6px',
            marginTop: '6px',
            color: '#44e',
            borderRadius: '20px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {

    //Destructuring
    const { id,title } = this.props.todo;
    
    return (
    <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
    </div>
    )
  }
}


//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 9.5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem