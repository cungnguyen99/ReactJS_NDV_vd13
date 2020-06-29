import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu'
import Header from './Components/Header'
import SectionClass from './Components/SectionClass'
import Section from './Components/Section'
import Footer from './Components/Footer'
import UpdateProps from './Components/UpdateProps'
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangThai:'khoitao',
      trangThai2:'cungnv'
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount dang chay');
    
  }

  componentDidMount() {
    console.log('componentDidMount dang chay')
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Khi state thay đổi (hay khi gọi đến phương thức thay đổi state) thì sẽ chạy ngay vào hàm này.
     * Hàm này trả về 2 gtri true hoặc false. 
     * Nếu false thì dừng lại luôn không chạy 2 hàm componentWillUpdate và componentDidUpdate nữa
     * Nếu true thì chạy xuống 2 hàm đó
     */
    console.log('shouldComponentUpdate dang chay')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate dang chay')
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate dang chay')
  }
  
  updateState=()=>{
    this.setState({
      trangThai:'state updated',
      trangThai2:'cungnv 99'
    })
  }
  
  
  render(){
    console.log("render dang chay")
    console.log(this.state.trangThai)
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <Section order_1="order-lg-1" order_2="order-lg-2" src={img1} title="For those about to rock..."/>
        <Section src={img2} title="We salute you!"/>
        <SectionClass order_1="order-lg-1" order_2="order-lg-2" title="Let there be rock!" src={img3}/>
        <button className="btn btn-outline-primary" onClick={()=>{this.updateState()}}>Update state</button>
        <UpdateProps name={this.state.trangThai2}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
