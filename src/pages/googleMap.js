import React from "react";
import "../css/google.css";
import MAP from "../picture/MAP.png";
function GoogleMap() {
  let googleMaps = (
    <div className="googleMap">
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.117830082085!2d76.126683!3d11.017647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa06c470ad135702d!2sHeavens%20Convention%20center!5e0!3m2!1sen!2sin!4v1577719067341!5m2!1sen!2sin"
        style={{
          width: "500px",
          height: "250px",
          frameborder: 0,
          border: 0,
          allowfullscreen: "",
        }}
      ></iframe>
    </div>
  );

  let Narkkilakkad = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.4993126127756!2d78.0277987741169!3d17.09712651110416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbd140828a58d7%3A0x40b8b756413b3d5f!2sGM%20PATEL%20GARDENS!5e0!3m2!1sen!2sin!4v1681674440701!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ width: "300px", height: "70px", border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  let Narkkilakkad2 = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.2459558972396!2d78.18448737468371!3d17.06061778377188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbcf67b126f045%3A0xa72dc317b7a7686c!2sAV%20Convention%20Shadnagar!5e0!3m2!1sen!2sin!4v1682165692112!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ width: "300px", height: "70px", border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  return (
    <div>
      {Narkkilakkad}
      <p className="whats-app-pargraph" style={{ color: "yellow" }}>
        <b>Marriage Location</b>
      </p>

      {Narkkilakkad2}
      <p className="whats-app-pargraph" style={{ color: "yellow" }}>
        <b>Reception Location</b>
      </p>
    </div>
  );
}

export default GoogleMap;
