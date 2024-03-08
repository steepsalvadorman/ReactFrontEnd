import slide1 from "./../assets/images/banner1.jpg";
import slide2 from "./../assets/images/banner2.jpg";
import slide3 from "./../assets/images/banner3.jpg";



function MainBanner() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MainBanner;
