import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Component2() {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide custom-carousel"
      data-bs-ride="true"
      data-bs-interval="1000"
      
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            
            src="https://media.istockphoto.com/id/1999671438/photo/yellow-of-the-luggage-with-plam-trees-on-the-beach-summer-travel-concept.jpg?s=1024x1024&w=is&k=20&c=KSXD7aM5EDFw_yk_x4R11uOLOGzJgQwKnKnHQwS4wNc="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/2155401293/photo/the-yellow-luggage-on-the-beach-summer-travel-concept.jpg?s=1024x1024&w=is&k=20&c=_BW9M8cSi0kETUKYDGoypY-LHi3M_orPN8oo1vraSn8="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1999671438/photo/yellow-of-the-luggage-with-plam-trees-on-the-beach-summer-travel-concept.jpg?s=1024x1024&w=is&k=20&c=KSXD7aM5EDFw_yk_x4R11uOLOGzJgQwKnKnHQwS4wNc="
          className="d-block w-100"
          alt="..."
        />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Component2;
