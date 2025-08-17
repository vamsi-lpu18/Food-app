import React from 'react';
// import './Carousel.css'; // CSS to fix image size

const Carousel = () => {
  return (
    <div className="container mt-4">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">

          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?w=800"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2 w-50"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=800"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2 w-50"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=800"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2 w-50"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
