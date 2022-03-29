import React from "react";
import "./homepage.css";
import Grid from "@material-ui/core/Grid";
import Ada from "../Assets/ADA.jpeg";
import Nav from "../Nav/navbar"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const Homepage = () => {
  return (
    <div class="homepage-body">
      <div className="homepage">
        <h1>Adaobi Okeke</h1>
        <h3>I design and build experiences that makes peoples lives simple.</h3>
        <Nav/>
        {/* <Grid container spacing={1} classname="container">
          <Grid xs={12} sm={6} md={5} className="profile">
            <h1>Adaobi Okeke <span>(B.Sc, MBA, PSMI)</span></h1>
            <div className="certification">
            <ul>
            <li style={{color:'rgb(114, 48, 23)'}}>Professional Scrum Master </li>
            <li style={{color:'teal'}}>Front End Developer </li>
            <li style={{color:'rgb(216, 150, 100)'}}>Technical Support Specialist</li>
            <li style={{color:'rgb(35, 95, 119)p'}}>Business Analyst </li>
            <li style={{color:'rgb(86, 34, 102)'}}>Financial Expert</li>

            </ul>
            </div>
          </Grid>
          <Grid xs={2} sm={2} md={1}></Grid>
          <Grid xs={12} sm={6} md={6} className="profile-pix">
            <img src={Ada} alt="ada's-pix" className="ada" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={12} className="about-me">
            <h1>About me</h1>
            <h2>
              I am Adaobi okeke, an adaptable and quality-driven professional with experience in
              core/ enterprise banking, professional services systems, retail
              banking solutions, and digital transformation projects.
              </h2>
            <div className="profession">
              <br />
              <b>
            <ul>
              <li>Over 6 years of experience in supporting teams in Project
              Management, Business Analysis and Front-End Development for bank/
              retail application development and transformation.</li>
              <br />
              <li> Strong background in software development, requirements
              management, team leadership, client services delivery, change
              management, project management, implementation support, risk
              management, and reporting.</li>
              <br />
              <li> Demonstrated ability to drive design, development, construction,
              improvement, support, and implementation of application software
              and user interfaces for banking/ retail applications.</li>
              <br />
              <li> Proven people leader with a track record of success in fostering
              high-performing, client-centric, and quality-driven work
              environments.</li>
              <br />
              <li>Core competencies include requirements development/
              documentation, employee training/ performance management, process
              improvement, team collaboration, stakeholder management, client
              relationship management, and troubleshooting.</li> 
              <br />
              <li>Proficient communication and interpersonal skills, with in-depth
              experience building relationships with clients, project teams,
              employees, and subcontractors.</li>
              <br />
              <br />
              <li> Advanced user of Microsoft Office Suite, as well as specialized
              software and applications, including Click Up and Trello.</li>
              <br/>
              <u>Technical experience and skills include:</u>
              <br />
              <li>Programming Languages: JavaScript</li> 
              <br />
              <li>Frameworks/ Libraries: React.Js, Next.Js</li>
              <br />
              <li> Source Code Control: Git</li>
              <br />
              <li> Markup Languages/Libraries: HTML, CSS, SCSS/SASS, Bootstrap,
              Material UI</li>
              <br />
              <li>Collaboration Tools: Jira, Click up, Trello, Microsoft
              teams, Microsoft Outlook</li>
              </ul>
              </b>
              </div>
          </Grid>
        </Grid> */}
      <div className="social-connect">
        <div className="linked">
        <a href='https://www.linkedin.com/in/adaobi-okeke-65025258/' rel= "noreferrer" target= "blank">
        <LinkedInIcon  src= ''style={{color:'blue', width:30}}/>
        </a>
        </div>
        < GitHubIcon style={{color:'white', width:30}}/>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
