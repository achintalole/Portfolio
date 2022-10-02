import React, { useEffect } from "react";
import "./contact.css";
import { useState } from "react";
const s = {
  fontSize: "30px",
  padding: "5px",
};
const s1 = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "20px",
};
const s2 = {
  margin: "0 0 0 60px",
};
const hs = {
  margin: "0 0 0 60px",
};
const hs1 = {
  margin: "0 150px 0 0",
};
// above variable use for css styling
function hell() {
  alert("Email me!" + "\n" + "Call me!");
}
// above function use for button click for alert  massage

const Contact = () => {
  /* below useState use for save value in data base in future*/
  const [na, setNa] = useState("");
  const [na1, setNa1] = useState("");
  const [na2, setNa2] = useState("");
  const [na3, setNa3] = useState("");
  return (
    <div className="contact">
      <div className="contact1">
        <div className="hh">
          <h3 style={hs}>Contact us</h3>
        </div>

        <div className="cc1">
          <div className="i1" style={s2}>
            <span className="fa fa-map-marker" style={s}></span>
          </div>
          <div className="p1">
            <p>
              <span style={s1}>ADDRESS:</span>
              <br /> Near Gurudwara Road Akurdi,Pune
            </p>
          </div>
        </div>
        <div className="cc2">
          <div className="i2" style={s2}>
            <span className="fa fa-phone" style={s}></span>
          </div>
          <div className="p2">
            <p>
              <span style={s1}>PHONE:</span>
              <br /> +919422943590
              <br />
              +919834726038
            </p>
          </div>
        </div>
        <div className="cc3">
          <div className="i3" style={s2}>
            <span className="fa fa-paper-plane" style={s}></span>
          </div>
          <div className="p3">
            <p>
              <span style={s1}>EMAIL:</span>
              <br /> achintalole@gmail.com
            </p>
          </div>
        </div>
        <div className="cc4">
          <div className="i4" style={s2}>
            <span className="fa fa-globe" style={s}></span>
          </div>
          <div className="p4">
            <p>
              <span style={s1}>WEBSITE:</span>
              <br /> achintalolegithub
            </p>
          </div>
        </div>
      </div>
      <div className="contact2">
        <div className="hh1">
          <h3 style={hs1}>Get in touch</h3>
        </div>
        <form>
          <div className="contact3">
            <input
              type="text"
              value={na}
              onChange={(e) => setNa(e.target.value)}
              placeholder="Name"
            ></input>
          </div>
          <div className="contact4">
            <input
              type="text"
              value={na1}
              onChange={(e) => setNa1(e.target.value)}
              placeholder="Number"
            ></input>
          </div>
          <div className="contact5">
            <input
              type="email"
              value={na2}
              onChange={(e) => setNa2(e.target.value)}
              placeholder="Email"
            ></input>
          </div>
          <div className="contact6">
            <textarea
              name="message"
              value={na3}
              onChange={(e) => setNa3(e.target.value)}
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
        <div className="contact7">
          <button onClick={hell}>Send massage</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
