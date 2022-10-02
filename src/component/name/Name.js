import React from "react";
import "./Name.css";
import face from "./face-1.jpg";
const Name = () => {
  const sy = {
    width: "45px",
    borderRadius: "50%",
    margin: "15px",
  };
  const sy1 = {
    paddingTop: "10px",
  };
  const a1 = {
    color: "aqua",
  };
  const a2 = {
    listStyle: "none",
  };
  const a21 = { height: "80%" };
  const a3 = { height: "70%" };
  const a31 = { height: "60%" };
  const a32 = { height: "50%" };
  const a4 = { color: "lime", display: "contents" };

  /*above constant use for css style */
  return (
    <div className="name">
      <div className="personal">
        <div class="art-header">
          <div class="art-avatar">
            <img src={face} className="imga" alt="Logo" style={sy}></img>
          </div>

          <h5 class="art-name mb-10">
            <a>Achin Talole</a>
          </h5>

          <div class="art-sm-text" style={sy1}>
            <a style={a1}>Full-Stack Developer</a> <br />
          </div>
        </div>
      </div>
      <div class="city">
        <ul style={a2}>
          <li>
            <h3>Residence:India</h3>
          </li>

          <li>
            <h3>City:Pune</h3>
          </li>

          <li>
            <h3>Age:29</h3>
          </li>
          <li>Langauge:Marathi,Hindi,English</li>
        </ul>
      </div>
      <div className="prog">
        <div className="progress">
          <div className="progressbar">
            <div className="progress-value" style={a3}>
              <h5 style={a4}>
                70%<br></br>H
              </h5>
            </div>
          </div>
          <div className="progressbar1">
            <div className="progress-value1" style={a3}>
              <h5 style={a4}>
                70%<br></br>C
              </h5>
            </div>
          </div>

          <div className="progressbar2">
            <div className="progress-value2" style={a31}>
              <h5 style={a4}>
                60%<br></br>J
              </h5>
            </div>
          </div>
          <div className="progressbar3">
            <div className="progress-value3" style={a31}>
              <h5 style={a4}>
                60%<br></br>B
              </h5>
            </div>
          </div>
          <div className="progressbar4">
            <div className="progress-value4" style={a3}>
              <h5 style={a4}>
                70%<br></br>R
              </h5>
            </div>
          </div>
          <div className="progressbar5">
            <div className="progress-value5" style={a3}>
              <h5 style={a4}>
                70%<br></br>M
              </h5>
            </div>
          </div>
          <div className="progressbar6">
            <div className="progress-value6" style={a31}>
              <h5 style={a4}>
                60%<br></br>MD
              </h5>
            </div>
          </div>
          <div className="progressbar7">
            <div className="progress-value7" style={a21}>
              <h5 style={a4}>
                80%<br></br>P
              </h5>
            </div>
          </div>
          <div className="progressbar8">
            <div className="progress-value8" style={a31}>
              <h5 style={a4}>
                60%<br></br>E
              </h5>
            </div>
          </div>
          <div className="progressbar9">
            <div className="progress-value9" style={a32}>
              <h5 style={a4}>
                50%<br></br>S
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
