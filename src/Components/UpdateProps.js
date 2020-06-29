import React, { Component } from 'react'

export default class UpdateProps extends Component {

  componentWillReceiveProps(nextProps) {
    /**
     * Khi nhấn vào nút update state thì state thay đổi. mà props của component UpdateProps ta lại lấy theo
     * state bên App nên khi state thay đổi thì props cũng thay đổi theo (do ta đặt name={this.state.trangThai2})
     * Khi nhân được props mới rồi thì tự động gọi vào hàm này
     * Lấy ra props mới nhận được dùng nextProps.tenprops
     */
    console.log(`componentWillReceiveProps update props da chay ${nextProps.name}`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate update props da chay')
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate update props da chay')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate update props da chay')
  }
  
  render() {
    return (
      <div>
        <h4>Hi my name is {this.props.name}. I'm from Update Props</h4>
      </div>
    )
  }
}
