import React, { useEffect, useState } from "react";
import "../../src/css/WhatsApp.css";
import SaveDate from "../pages/saveDate";
import GoogleMap from "../pages/googleMap";
import Head from "./Head";
import Confetti from "react-confetti";
import brideImg from "../picture/bride.jpeg";

import bridegroom from "../picture/bridegroom.jpeg";

import srikanthbro from "../picture/srikanthbro.jpeg";

const WhatsApp = (props) => {
  const [isalina, setAlin] = React.useState(true);
  const [canShowRemainingDay, setCanShowRemainingDay] = React.useState(false);
  const onLoadF = () => {
    console.log("isLoading");
    setAlin(false);
  };
  const alina = (
    <div className="set-background-image">
      <div className="msg-background-alina" id="alina">
        <img
          onLoad={onLoadF}
          alt="image not found"
          src={brideImg}
          style={{ width: "240px", height: "250px" }}
        />
        <p className="whats-app-pargraph" style={{ color: "white" }}>
          Hi I am Prashanthi !
        </p>
      </div>
    </div>
  );

  const eldhose = (
    <div className="set-background-image">
      <div className="msg-background-eldhose" id="eldhose">
        <img
          alt="image not found"
          src={srikanthbro}
          style={{ width: "180px", height: "250px" }}
        />
        <p className="whats-app-pargraph" style={{ color: "white" }}>
          Hi I am Srikanth !
        </p>
      </div>
    </div>
  );
  const we = (
    <div className="set-background-image">
      <div className="msg-background-we" id="we">
        <img
          alt="image not found"
          src={bridegroom}
          style={{ width: "250px", height: "225px" }}
        />
        <p className="whats-app-pargraph" style={{ color: "white" }}>
          "You're cordially invited to join us on our special day as we exchange
          vows and start our journey together as husband and wife. Please save
          the date and celebrate with us!"
        </p>
      </div>
    </div>
  );
  const saveDate = (
    <div className="msg-background-save-date" id="save-date">
      <SaveDate />
    </div>
  );

  const map = (
    <div className="msg-background-save-location" id="map">
      <GoogleMap />
    </div>
  );
  const confetti = (
    <div>
      <Confetti width={375} height={1000} numberOfPieces={400} gravity={0.2} />
    </div>
  );
  const array = [map, saveDate, we, eldhose, alina];

  const [displayChat, setDisplayChat] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const [arrayLenght, setArrayLenght] = useState(0);

  // React.useEffect(()=>{

  // //  setIsTyping(false)
  // },[displayChat])

  React.useEffect(() => {
    setTimeout(() => {
      let array = [alina];
      setDisplayChat(array);
      setIsTyping(false);
    }, 2000);

    setTimeout(() => {
      setIsTyping(true);
    }, 4000);

    setTimeout(() => {
      let array = [alina, eldhose];
      setDisplayChat(array);
      setIsTyping(false);
      document.getElementById("eldhose").scrollIntoView({ behavior: "smooth" });
    }, 6000);

    setTimeout(() => {
      setIsTyping(true);
    }, 8000);

    setTimeout(() => {
      let array = [alina, eldhose, we];
      setDisplayChat(array);
      setIsTyping(false);
      document.getElementById("we").scrollIntoView({ behavior: "smooth" });
    }, 10000);

    setTimeout(() => {
      setIsTyping(true);
    }, 10000);

    setTimeout(() => {
      let array = [alina, eldhose, we, saveDate, map, confetti];
      setDisplayChat(array);
      setIsTyping(false);
      setCanShowRemainingDay(true);
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }, 20000);
  }, []);

  return (
    <div className="containier">
      <Head isTyping={isTyping} canShowRemainingDay={canShowRemainingDay} />
      {displayChat.map((item) => item)}
    </div>
  );
};

export default WhatsApp;
