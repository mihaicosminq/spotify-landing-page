import "./spotify-content.css";

function SpotifyContent() {
  return (
    <section className="spotifyContentBackground">
      <article className="spotifyContentArticle">
        <header className="spotifyContentHeader">
          <div className="spotifyContentText">
            <div className="spotifyContenth1">
              <h1>Get premium free for one month</h1>
            </div>
            <div className="spotifyContenth2">
              <h2>Only 9.99$/month after. Cancel anytime.</h2>
            </div>
            <div className="spotifyContentButtons">
              <div className="button1">
                <a
                  href="/us/purchase/offer/default-trial-1m/?country=US"
                  tabIndex="0"
                  border="2px solid #191414"
                  aria-label="Checkout for Premium Individual plan"
                  className="Button-qlcn5g-0eJSmcN"
                >
                  <div className="ButtonInner-sc-14ud5tc-0eUyfdqsc-jrsJWtgNCnmwsc-kEqXSaexRBIa">
                    <span>Get started</span>
                  </div>
                  <div className="ButtonFocus-sc-2hq6ey-0 ixIjmW"></div>
                </a>
              </div>
              <div className="button2">
                <a
                  href="#plans"
                  tabIndex="0"
                  border="2px solid #ffffff"
                  aria-label="Scroll to list of all Spotify Premium plans"
                  className="Button-qlcn5g-0eJSmcN"
                >
                  <div className="ButtonInner-sc-14ud5tc-0jCySCSsc-jrsJWtgNCnmwsc-kEqXSafTvsDS">
                    <span>view plans</span>
                  </div>
                  <div className="ButtonFocus-sc-2hq6ey-0 ixIjmW"></div>
                </a>
              </div>
            </div>
          </div>
        </header>

        <footer className="spotifyContentFooter">
          <p className="spotifyFooterParagraph">
            Terms and conditions apply.1 month free not available for users who
            already have tried Premium
          </p>
        </footer>
      </article>
    </section>
  );
}


export default SpotifyContent;