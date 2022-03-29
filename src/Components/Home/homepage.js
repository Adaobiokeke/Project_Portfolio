import React from "react";
import "./homepage.css";
import Nav from "../Nav/navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Homepage = () => {
  return (
    <div class="homepage-body">
      <div className="homepage">
        <h1>Adaobi Okeke</h1>
        <h3>I design and build experiences that makes peoples lives simple.</h3>
        <Nav />
      </div>
        <div className="social-connect">
          <div className="linked">
            <a
              href="https://www.linkedin.com/in/adaobi-okeke-65025258/"
              rel="noreferrer"
              target="blank"
            >
              <LinkedInIcon src="" style={{ color: "blue", width: 30 }} />
            </a>
          </div>
          <div className="linked2">
            <a
            href="https://github.com/Adaobiokeke"
            rel="noreferrer"
            target="blank"
            >
          <GitHubIcon style={{ color: "white", width: 30 }} />
            </a>
        </div>
        </div>
    </div>
  );
};

export default Homepage;
