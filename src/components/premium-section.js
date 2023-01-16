import React from "react";
import "./premium-section.css";

const PremiumSection = () => {
  return (
    <React.Fragment>
      <section className="containerwhypremium">
        <article className="whypremiumarticle">
          <header className="whypremiumh2">
            <h2 className="whypremium">Why go Premium?</h2>
          </header>
          <ul className="premiumlist">
            <li className="img1">
              <div className="img1div">
                <img
                  className="img1src"
                  src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f"
                />
              </div>
              <div className="img1paragraphs">
                <p className="download">Download music.</p>
                <p className="listen">Listen anywhere.</p>
              </div>
            </li>
            <li className="img2">
              <div className="img2div">
                <img
                  className="img2src"
                  src="https://i.ibb.co/yNcXRjZ/index.png"
                />
              </div>
              <div className="img2paragraphs">
                <p className="playany">Ad-free music listening.</p>
                <p className="evenonmob">Enjoy nonstop music.</p>
              </div>
            </li>
            <li className="img3">
              <div className="img3div">
                <img
                  className="img3src"
                  src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"
                />
              </div>
              <div className="img3paragraphs">
                <p className="playany">Play any song.</p>
                <p className="evenonmob">Even on mobile.</p>
              </div>
            </li>
            <li className="img4">
              <div className="img4div">
                <img
                  className="img4div"
                  src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"
                />
              </div>
              <div className="img4paragraphs">
                <p className="unlimited">Unlimited skips.</p>
                <p className="justhit">Just hit next.</p>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </React.Fragment>
  );
};



export default PremiumSection;