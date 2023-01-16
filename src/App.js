import Card from "./components/card";
import Footer from "./components/footer";
import SpotifyContent from "./components/spotify-content";
import PremiumSection from "./components/premium-section";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

function App(props) {
  const arrayMonths = [
    {
      obiect1: "1 month free",
    },
    {
      obiect2: "3 months free",
    },
  ];
  const arrayPlan = [
    {
      arrayPlan__obj1: "Individual",
    },
    {
      arrayPlan__obj2: "Duo",
    },
    {
      arrayPlan__obj3: "Family",
    },
    {
      arrayPlan__obj4: "Student",
    },
  ];
  const arrayPayments = [
    {
      arrayPayments_obj1: "$9.99/month after offer period ",
    },
    {
      arrayPayments_obj2: "$12.99/month after offer period",
    },
    {
      arrayPayments_obj3: "$15.99/month after offer period",
    },
    {
      arrayPayments_obj4: "$4.99/month after offer period",
    },
  ];
  const accObject = [
    {
      accObject1: "1 account",
    },
    {
      accObject2: "2 accounts",
    },
    {
      accObject3: "6 accounts",
    },
  ];
  const premiumBenefits = [
    "Ad-free music listening",
    "Play anywhere - even offline",
    "On-demand playback",
  ];
  const premiumBenefitsduo = [
    "2 Premium accounts for a couple under one roof",
    "        Ad-free music listening, play offline, on-demand playback",
  ];
  const premiumBenefitsFamily = [
    "6 Premium accounts for family members living under one roof",
    "        Block explicit music",
    "Ad-free music listening, play offline, on-demand playback",
    "Spotify Kids: a separate app made just for kids",
  ];
  const premiumBenefitsStudent = [
    "Hulu (With Ads) plan",
    "SHOWTIME",
    "Ad-free music listening",
    "Play anywhere - even offline",
    "On-demand playback",
  ];

  const premiumTerms = [
    {
      premiumTerms_obj1:
        "Terms and conditions apply. 1 month free not available for users who have already tried Premium.",
      premiumTerms_obj2:
        "Offer currently includes access to Hulu (With Ads) plan and SHOWTIME Streaming Service, subject to eligibility. Available only to students at an accredited higher education institution. 1 month free only open to higher education students who haven't already tried Premium. Terms and conditions apply.",
    },
  ];

  let newarray = premiumBenefits.splice(0).map((x) => (
    <div stroke-width="1" aria-hidden="true" className="sc-iqAclLgFwbga">
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-label=""
        className="Svg-ytk21e-0fJEWJR"
      >
        <polyline
          points="3.32 12.86 8.9 19.4 20.99 5.26"
          fill="none"
          stroke="#181818"
        ></polyline>
      </svg>
      {x}
    </div>
  ));
  let newarray1 = premiumBenefitsduo.splice(0).map((y) => (
    <div stroke-width="1" aria-hidden="true" className="sc-iqAclLgFwbga">
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-label=""
        className="Svg-ytk21e-0fJEWJR"
      >
        <polyline
          points="3.32 12.86 8.9 19.4 20.99 5.26"
          fill="none"
          stroke="#181818"
        ></polyline>
      </svg>
      {y}
    </div>
  ));
  let newarray2 = premiumBenefitsFamily.splice(0).map((x) => (
    <div stroke-width="1" aria-hidden="true" className="sc-iqAclLgFwbga">
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-label=""
        className="Svg-ytk21e-0fJEWJR"
      >
        <polyline
          points="3.32 12.86 8.9 19.4 20.99 5.26"
          fill="none"
          stroke="#181818"
        ></polyline>
      </svg>
      {x}
    </div>
  ));
  let newarray3 = premiumBenefitsStudent.splice(0).map((x) => (
    <div stroke-width="1" aria-hidden="true" className="sc-iqAclLgFwbga">
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-label=""
        className="Svg-ytk21e-0fJEWJR"
      >
        <polyline
          points="3.32 12.86 8.9 19.4 20.99 5.26"
          fill="none"
          stroke="#181818"
        ></polyline>
      </svg>
      {x}
    </div>
  ));

  return (
    <React.Fragment>
      <Navbar />
      <SpotifyContent />
      <PremiumSection />
      <section className="background">
        <h2 className="card-title">Pick your premium</h2>
        <h3 className="card-subtitle">
          Listen without limits on your phone, speaker, and other devices.
        </h3>
        <div className="App">
          <Card
            month={arrayMonths[0].obiect1}
            plan={arrayPlan[0].arrayPlan__obj1}
            payments={arrayPayments[0].arrayPayments_obj1}
            accObject={accObject[0].accObject1}
            premiumTerms={premiumTerms[0].premiumTerms_obj1}
            benefits={newarray}
          />
          <Card
            month={arrayMonths[0].obiect1}
            plan={arrayPlan[1].arrayPlan__obj2}
            accObject={accObject[1].accObject2}
            payments={arrayPayments[1].arrayPayments_obj2}
            premiumTerms={premiumTerms[0].premiumTerms_obj1}
            benefits={newarray1}
          />
          <Card
            month={arrayMonths[0].obiect1}
            plan={arrayPlan[2].arrayPlan__obj3}
            payments={arrayPayments[2].arrayPayments_obj3}
            accObject={accObject[2].accObject3}
            premiumTerms={premiumTerms[0].premiumTerms_obj1}
            benefits={newarray2}
          />
          <Card
            month={arrayMonths[0].obiect1}
            plan={arrayPlan[3].arrayPlan__obj4}
            accObject={accObject[0].accObject1}
            payments={arrayPayments[3].arrayPayments_obj4}
            premiumTerms={premiumTerms[0].premiumTerms_obj1}
            benefits={newarray3}
          />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
