import React from 'react'

export default function Section({order_1, order_2,src, title}) {
  return (
    <section>
    <div className="container">
      <div className="row align-items-center">
        <div className={`col-lg-6 ${order_2}`}>
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={src} alt="" />
          </div>
        </div>
        <div className={`col-lg-6 ${order_1}`}>
          <div className="p-5">
            <h2 className="display-4">{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
              esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
              adipisci, beatae obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
