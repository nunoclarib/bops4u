import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Code } from "react-content-loader";
import Paper from "@mui/material/Paper";
import Icon from '@mdi/react';
import { mdiMusicNoteEighth } from '@mdi/js';


import Author from "../img/nuno.jpeg";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <div className="container">
        <div style={{ marginTop: "7%", width: "100%" }}>
        <div className="row">
            <div className="twelve columns">
              <h1 className="title">Here's some <span style={{color:"#84E1F5"}}>Bops 4 U</span></h1>
              <h4><Icon path={mdiMusicNoteEighth} size={1} aria-hidden="true"/>click as many times as u like and get a little taste of the tracks</h4>
            </div>
            <div className="twelve columns">
             <Modal/>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <h1 className="title"><span style={{color:"#84E1F5"}}>Hey there!</span> Wanna know all about B4U?</h1>
            </div>
          </div>
          <div className="row ">
            <div className="twelve columns" style={{marginBottom:"3rem"}}>
              <p>
                {""}
                Bops 4 You is a platform where you can explore for yourself what are the best bops, masterpieces of audio work and collections of tracks on planet earth!
                Yes. All of this in one website, can you believe it?</p>
              <p> I take full responsibility for the music I recommend to u, don't u worry...
                as is the sickest of all time!... At least in my eyes :)
              </p>
              <p>So be ready to experience the best audio journey of your life, go ahead explore more!</p>
            </div>
            <div className="row ">
              <div className="twelve columns m-0">
                <h1 className="title"><span style={{textDecoration:"underline"}}>The creator</span> of B4U</h1>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="twelve columns">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <img
                  src={Author}
                  alt="fotografia do nuno, autor do site"
                  className="img-fluid mb-3 avatar"
                />
                <h4>Nuno Ribeiro</h4>
                <h5>Web Developer To Be</h5>
                <h6>Student @ mctw</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
