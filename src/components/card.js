import "./card.css";
import React from "react";

function Card(props) {
  return (
    <section className="card-section">
      <React.Fragment>
        <div className="top-wrapper">
          <div className="blue-background">
            <span>{props.month}</span>
          </div>

          <div className="arrayPlan_individual">
            <span>{props.plan}</span>
          </div>
          <div className="array-payments">
            <span>{props.payments}</span>
          </div>
          <div className="array-accObject">
            <span>{props.accObject}</span>
          </div>
        </div>

        <div className="hr" />
        <ul className="premium-benefits">
          <li className="premiumList">
            <p>{props.benefits}</p>
          </li>
        </ul>
        <div className="button-wrapper">
          <div className="button">
            <div
              data-event-campaign-id="default"
              data-event-offer-type-id="trial-1m"
              data-component-name="STOREFRONT-PLAN"
              data-component-position="0"
              data-component-type="product"
              className="sc-kGVuwA sc-eVedaM gyERj hHCaHB"
            >
              <div>
                <a
                  href="/us/purchase/offer/default-trial-1m?country=US"
                  tabIndex="0"
                  aria-label="Checkout for Premium Individual plan"
                  className="Button-qlcn5g-0hZbPoZ"
                >
                  <div className="ButtonInner-sc-14ud5tc-0 ieulYK sc-jrsJWt gNCnmw sc-kEqXSa sc-iiBnNu drBNuz jFPctD">
                    <span>get started</span>
                  </div>
                  <div className="ButtonFocus-sc-2hq6ey-0 ixIjmW"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="premium-terms">
          <p>{props.premiumTerms}</p>
        </div>
      </React.Fragment>
    </section>
  );
}

export default Card;
