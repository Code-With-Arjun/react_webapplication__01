import React from 'react'

export default function Contact() {
  return (
   <>
   <div className="container ">
 {/* ----------------------instructor-section---------- */}


    <div className="row py-4">
  <div className="col-12">
    <div className="bg-info p-4 p-sm-5 rounded-3">
      <div className="row position-relative">
        {/* Svg decoration */}
        <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
          <svg width="141px" height="141px">
            <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
          </svg>
        </figure>
        {/* Action box */}
        <div className="col-11 mx-auto position-relative">
          <div className="row align-items-center">
            {/* Title */}
            <div className="col-lg-7">
              <h3 className="text-white">Become an Instructor!</h3>
              <p className="text-white mb-3 mb-lg-0">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
            </div>
            {/* Content and input */}
            <div className="col-lg-5 text-lg-end">
              <a href="#" className="btn btn-outline-warning mb-0">Start Teaching Today</a>
            </div>
          </div>
        </div>
      </div> {/* Row END */}
    </div>
  </div>
    </div>
{/* ---------instructor-section--------------- */}

  <div className="row">
 
    <div className="col-md-4">
      {/* -------------card--------- */}
      <div className="card h-100 " >
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1000}>
              <img src="images/1.jpg" className="d-block w-100 img-fluid img-about-section" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="images/2.jpg" className="d-block w-100 img-fluid img-about-section" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/3.jpg" className="d-block w-100 img-fluid img-about-section" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Consulting</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sed corrupti deserunt. </p>
        </div>
      </div>
    </div>
    <div className="col-md-8 form-section">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Rajasthan</option>
            <option>Madhyapradesh</option>
            <option>Gujrat</option>
            <option>Himachalpradesh</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>
   
   </>
  )
}
