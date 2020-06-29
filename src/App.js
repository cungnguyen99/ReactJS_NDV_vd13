import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu'
import Header from './Components/Header'
import SectionClass from './Components/SectionClass'
import Section from './Components/Section'
import Footer from './Components/Footer'
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangThai:'khoitao'
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount dang chay');
    
  }

  componentDidMount() {
    console.log('componentDidMount dang chay')
  }
  
  render(){
    console.log("render dang chay")
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <Section order_1="order-lg-1" order_2="order-lg-2" src={img1} title="For those about to rock..."/>
        <Section src={img2} title="We salute you!"/>
        <SectionClass order_1="order-lg-1" order_2="order-lg-2" title="Let there be rock!" src={img3}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
