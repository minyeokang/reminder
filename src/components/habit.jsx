import React, { Component } from 'react';

class Habit extends Component {


  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>

        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          삭제
        </button>
      </li>
    );
  }
}

export default Habit;
