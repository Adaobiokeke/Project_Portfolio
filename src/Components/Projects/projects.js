import React, { useState } from "react";
import "./projects.css";
import Grid from "@material-ui/core/Grid";
import { Divdatas } from "../Projects/projectDatas";
import Modal from "react-modal";
import Tooltip from "@mui/material/Tooltip";



const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false),
    [content, setContent] = useState({});
  const handleOpen = (item) => {
    setContent(item);
    setModalIsOpen(true);
  };
  return (
    <div className="project">
      <Modal
        isOpen={modalIsOpen}
        ShouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "grey",
            marginTop: "20px",
            padding: 50,
            width: "70%",
            height: "85%",
            margin: "auto",
            borderRadius: 15,
          },
          content: {
            color: "black",
            alignItems: "center",
          },
        }}
      >
        <h2 style={{ textAlign: "center", marginButton: "30px" }}>
          {content.title}
        </h2>
        <img
          src={content.image}
          alt="modimg"
          style={{
            width: "50%",
            marginLeft: "28%",
            border: "10px solid grey",
            borderRadius: 7,
          }}
        />
        <h2 style={{ textAlign: "center" }}>Description</h2>
        <h5>{content.content}</h5>
        <div className="modalbtn1">
          <button onClick={() => setModalIsOpen(false)} className="modalbtn">
            Close
          </button>
        </div>
      </Modal>
      <Grid container spacing={1}>
        {Divdatas &&
          Divdatas.map((box, index) => (
            <Grid xs={12} sm={6} md={3} style={{ marginTop: "20px" }}>
              <div className="card">
                <h2>{box.title}</h2>
                <div className="link-div">
                  <Tooltip title="Click me!" arrow>
                    <a href={box.link} target="_blank" rel="noreferrer">
                      <button>{box.link}</button>
                    </a>
                  </Tooltip>
                </div>
                <div className="btn-div">
                  <button className="card-btn" onClick={() => handleOpen(box)}>
                    Read me...
                  </button>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Projects;
