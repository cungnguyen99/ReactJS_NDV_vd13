import React, { Component } from 'react'

export default class SectionClass extends Component {
  constructor(props) {
    super(props);
    this.state={
      isCollapsed: false
    }
  }

  notification=()=>{this.setState({
    isCollapsed:!this.state.isCollapsed
  })}

  renderFooter=()=>(
    <footer className="footer text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Location</h4>
          <p className="lead mb-0">
            2215 John Daniel Drive
            <br />
            Clark, MO 65243
          </p>
        </div>
        <div className="col-lg-4">
          <h4 className="text-uppercase mb-4">About Freelancer</h4>
          <p className="lead mb-0">
            Freelance is a free to use, MIT licensed Bootstrap theme created by
            <a href="http://startbootstrap.com">Start Bootstrap</a>
            .
          </p>
        </div>
        <div className="col-lg-4">
          <button className="btn btn-success text-center" onClick={()=>this.notification()}>Edit</button>
        </div>
      </div>
    </div>
  </footer>
  )

  renderForm=()=>(
    <div className="row">
      <input className="form-control" type="text" placeholder="Edit"/>
      <button className="btn btn-success" onClick={()=>this.notification()}>Save</button>
    </div>
  )

  displayCheck=()=>{
    if(this.state.isCollapsed===false){
      return this.renderFooter()
    }else{
      return this.renderForm()
    }
  }
  render() {
    return (
      <section>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-6 ${this.props.order_2}`}>
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={this.props.src} alt="" />
            </div>
          </div>
          <div className={`col-lg-6 ${this.props.order_1}`}>
            <div className="p-5">
              <h2 className="display-4">{this.props.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
                adipisci, beatae obcaecati.</p>
                <p className={this.state.isCollapsed?"visible":"display"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                esse assumenda amet aperiam exercitationem</p>
                <button className="btn btn-outline-danger" onClick={()=>this.notification()}>VIEW ALL</button>
            </div>
          </div>
        </div>
        {this.displayCheck()}
      </div>
    </section>
    )
  }
}
