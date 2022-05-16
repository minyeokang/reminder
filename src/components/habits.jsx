import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    return (
      <div >

        <ul className="habits">
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <HabitAddForm onAdd={this.props.onAdd} />
      </div>
    );
  }
}

export default Habits;
