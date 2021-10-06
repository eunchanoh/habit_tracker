import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {}
  // UI상에 등록이 되었을때

  componentWillUnmount() {}
  // UI상에서 없어질때

  // state = {
  //   count: 0,
  //   // 하나의 습관을 보여줄 수 있는 가장 작은 단위의 컴포넌트
  //   // 자 이제는 부모 컴포넌트로부터 prop으로 전달 받은 습관의 데이터를 보여주기만 하는
  //   // 컴포넌트 이기 때문에 이 컴포넌트 안에 자체적으로 state를 가지고 있을 필요는 전혀 없다.
  // };

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함.
    // this.state.count+=1; 이렇게 오브젝트 안에 있는 데이터를 업데이트 하게 되면
    // 리액트는 업데이트 됐는지 안됐는지 모름 그렇기 때문에 리액에서 제공하는
    // 스테이트 업데이트 할때는 setState 쓰기
    // this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    // 0보다 작으면 그냥 0을 출력하고 아니면 그냥 출력해
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    // 이렇게 하게 되면 자동으로 여기 안에 있는 데이터가 name과 count라는
    // 대신에 동일한 이름을 써야돼요
    // habit 안에 있는 name과 count라는 이 각각의 데이터들이 여기로 옵니다
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete' onClick={this.handleDelete}>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
