
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <nav className="nav-footer">
          <div className="logo">
            <img
              className="logo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png&f=1&nofb=1&ipt=ceacceea7d409fd50399617dca737de23231fce32f765cf9dca4f082dfec8c9f&ipo=images"
            />
          </div>
          <div className="links">
            <dl className="sub-title">
              <dt className="grey-text">Company</dt>
              <dd className="list-item">About</dd>
              <dd className="list-item">Jobs</dd>
              <dd className="list-item">For the Record</dd>
            </dl>
            <dl className="sub-title">
              <dt className="grey-text">Communities</dt>
              <dd className="list-item">For Artists</dd>
              <dd className="list-item">Developers</dd>
              <dd className="list-item">Advertising</dd>
              <dd className="list-item">Investors</dd>
              <dd className="list-item">Vendors</dd>
            </dl>
            <dl className="sub-title">
              <dt className="grey-text">Useful Links</dt>
              <dd className="list-item">Support</dd>
              <dd className="list-item">Web Player</dd>
              <dd className="list-item">Free Mobile App</dd>
            </dl>
          </div>
          <div className="socials">
            <ul className="social-list">
              <li className="social-item">
                <img
                  className="social-icon"
                  src="https://icon-library.com/images/instagram-circle-icon-png/instagram-circle-icon-png-24.jpg"
                />
              </li>
              <li className="social-item">
                <img
                  className="social-icon"
                  src="https://www.pngkey.com/png/full/84-842567_twitter-logo-black-png.png"
                />{" "}
              </li>
              <li className="social-item">
                <img
                  className="social-icon"
                  src="https://i2.wp.com/www.transitionsta.org/wp-content/uploads/2016/12/facebook-black-round-icon.png"
                />
              </li>
            </ul>
          </div>
          <div className="bottom-links">
            <ul className="bottomlink-list">
              <li className="bottomlink-item">Legal</li>
              <li className="bottomlink-item">Privacy Center</li>
              <li className="bottomlink-item">Privacy Policy</li>
              <li className="bottomlink-item">Cookies</li>
              <li className="bottomlink-item">About Ads</li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
};


export default Footer;