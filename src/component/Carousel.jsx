let carouselImg = {
  height: "40vw",
  objectfite: "cover",
};

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="..."
              style={carouselImg}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="..."
              style={carouselImg}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/128234/pexels-photo-128234.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="..."
              style={carouselImg}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
