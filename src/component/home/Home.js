import React from "react";
import "./home.css";
import Typed from "react-typed";

const g = ["Achin Vijay Talole", "Fullstack Devloper"];
// variable g is use for Typed
const Home = () => {
  return (
    <div className="home">
      <div className="home1">
        <h1 className="text-white">Hi,I Am</h1>
      </div>
      <div className="home2">
        <h1 className="text-7xl text-secondary font-semibold">
          <Typed strings={g} typeSpeed={150} backSpeed={200} loop></Typed>
        </h1>
      </div>
      <div className="home3">
        <h1>
          I build things for the web.
          <br />
          Currently I am looking for the job.
        </h1>
      </div>
      <div className="home4">
        <h1>
          Decisions: If you can’t decide, the answer is no. If two equally
          difficult paths, choose the one more painful in the short term (pain
          avoidance is creating an illusion of equality).
        </h1>
      </div>
      <div className="home5">
        <h1 fontSize="20px">ADDITIONAL INFORMATION</h1>
        <br />
        <h1>
          Fast learner, Creative thinker and work with other engineers to gather
          requirements for new features.
          <br />
          Designing and developing new features for our users. <br /> Work
          independently as well as in a team to achieve goals. <br /> Good time
          management and coordination skills. <br />
          Identify complex problems and reviewing solution. <br />
          Knowledge of SQLite and Django and MERN.
        </h1>
      </div>
    </div>
  );
};

export default Home;
