import React, { Component } from 'react'

export default class SectionClass extends Component {
  constructor(props) {
    super(props);
    
  }
  notification=()=>{alert("notification from website")}
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
                <button className="btn btn-outline-danger" onClick={()=>this.notification()}>VIEW ALL</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
