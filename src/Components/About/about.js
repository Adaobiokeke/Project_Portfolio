import React from 'react'
import Grid from "@material-ui/core/Grid";
import Ada from "../Assets/ada-trib.jpeg";
import './about.css'
import Nava from '../Nava/nava'
const about = () => {
  return (
    <div>
       <Nava/>
    <div classname="container">
        <Grid container spacing={1} >
          <Grid xs={12} sm={12} md={12} className="profile">
            <div className="certification">
            <p style={{color:'rgb(114, 48, 23)'}}>Professional Scrum Master </p>
            <p style={{color:'teal'}}>Front End Developer </p>
            <p style={{color:'rgb(216, 150, 100)'}}>Technical Support Specialst</p>
            <p style={{color:'rgb(35, 95, 119)p'}}>Business Analyst </p>
            <p style={{color:'rgb(86, 34, 102)'}}>Financial Expert</p>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={12} className="profile-pix">
            <div className="img-div">
            <img src={Ada} alt="ada's-pix" className="ada" />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={12} className="about-me">
            {/* <h1>About me</h1> */}
            <h1>Adaobi Okeke <span>(B.Sc, MBA, PSMI)</span></h1>
            <h4>
              I am an adaptable and quality-driven professional with experience in
              core/ enterprise banking, professional services systems, retail
              banking solutions, and digital transformation projects.
              </h4>
            <div className="profession">
              <br />
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
              <b>
              <u>Technical experience and skills include:</u>
              </b>
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
              </div>
          </Grid>
        </Grid>
        </div>
        </div>
  )
}

export default about