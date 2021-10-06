import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
    // 습관들이라는 배열을 가지고 있고 각각의 습관들을 아래에
  };
  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    // spread operator
    // 이 habits라는 배열안에 있는 아이템들을 하나하나씩
    // 새로운 배열 안으로 복사해 오는 것을 말합니다!
    this.setState({ habits: habits });
    // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함.
    // this.state.count+=1; 이렇게 오브젝트 안에 있는 데이터를 업데이트 하게 되면
    // 리액트는 업데이트 됐는지 안됐는지 모름 그렇기 때문에 리액에서 제공하는
    // 스테이트 업데이트 할때는 setState 쓰기
    // this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    // 0보다 작으면 그냥 0을 출력하고 아니면 그냥 출력해
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
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
