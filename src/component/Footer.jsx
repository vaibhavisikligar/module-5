const Footer = () => {
  let footerCss = {
    color: "white",
  };
  return (
    <>
      <div className="container-fluid footer py-5 bg-dark" style={footerCss}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="address">
                <h2>Vaibhavi Sikligar</h2>
                <p>1602/6 Opp.Sahyog Printer, Kansaravad,Navsari </p>
                <p>
                  <span>Contact No:</span>8154801292
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link">
                <h4>
                  Quick <span>Links</span>
                </h4>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="help-link">
                <h4>Help Link</h4>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of uses</li>
                  <li>Sales and Refunds</li>
                  <li>Help</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div class="Subscribe">
                <h4>Subscribe</h4>
                <div class="Subscribe-input mb-3">
                  <input type="text" placeholder="Email Address" />
                  <button class="sub-btn">
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
                <p>
                  Subscribe to our mailing list and get updates to your email
                  inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
