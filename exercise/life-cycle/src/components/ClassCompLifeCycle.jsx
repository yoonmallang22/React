import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  // 레거시
  componentWillMount() {
    // UNSAFE_componentWillMount()로 변경되었다. 버전 17까지는 사용 가능하다.
    // 컴포넌트가 생성될 때 실행된다 (렌더링 되기 이전)
    console.log("componentWillMount");
  }

  componentDidMount() {
    // 마운트가 완료되고 나서 실행된다 (렌더링 이후)
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더링 되기 전) 실행된다
    // 초기 렌더링에서 발생하지 않는다
    console.log("shouldComponentUpdate");
    return true;
  }

  // 레거시
  componentWillUpdate(nextProps, nextState) {
    // UNSAFE_componentWillUpdate()로 변경되었다. 버전 17까지는 사용 가능하다.
    // 초기 렌더링에서 발생하지 않고, 업데이트 되고 나서 발생한다
    console.log("componetWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
    // 업데이트가 되고 나서 실행된다
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // 컴포넌트가 제거되기 바로 직전에 실행된다
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        number: state.number + 1,
      };
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <div>Class component life cycle</div>
        <button onClick={this.handleClick}>Click me!</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}

export default ClassComp;
