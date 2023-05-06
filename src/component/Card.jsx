const Card = () => {
  let cardCss = {
    width: "100%",
    height: "300px",
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card ">
              <img
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
                style={cardCss}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card ">
              <img
                src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
                style={cardCss}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card ">
              <img
                src="https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
                style={cardCss}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
