import React, { Component } from 'react';
import Habits from './components/habits';

class List extends Component {
    state = {
        habits: [
            { id: 1, name: '리액트 공부하기', count: 0 },
            { id: 2, name: '오후 미팅 참석', count: 0 },
            { id: 3, name: '프로젝트 만들기', count: 0 },
            { id: 4, name: '업무 보고하기', count: 0 },
        ],
    };
    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    };

    handleAdd = name => {
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        this.setState({ habits });
    };

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            habit.count = 0;
            return habit;
        });
        this.setState({ habits });
    };

    render() {
        return (
            <>

                <Habits
                    habits={this.state.habits}

                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default List;
