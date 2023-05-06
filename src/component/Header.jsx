const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">
            Vaibhavi
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h2 className="nav-link active" aria-current="page" href="#">
                  Home
                </h2>
              </li>
              <li className="nav-item">
                <h2 className="nav-link" href="#">
                  About
                </h2>
              </li>
              <li className="nav-item">
                <h2 className="nav-link" href="#">
                  Service
                </h2>
              </li>
              <li className="nav-item">
                <h2 className="nav-link ">Contact us</h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
