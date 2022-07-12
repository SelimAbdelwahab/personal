import './App.css';
import bg from "./assets/template.jpg";
import drTN from "./assets/Dummy Royale Icon.png";
import cppTN from "./assets/Chess++ Icon.jpg";
import psTN from "./assets/Perspective Shift Icon.jpg";
import cmTN from "./assets/2D Conservation of Momentum Icon.jpg";
import inTn from "./assets/Infiltrator Icon.png";
import isTn from "./assets/Insertion Sort Icon.jpg";

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { VscExpandAll } from "react-icons/vsc";
import { AiFillMail, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { useState, useEffect } from "react";

var updateCurrentProject;

function App() {
  const [mode, setMode] = useState("Dark");
  const [currentProject, setCurrentProject] = useState(-1);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    updateCurrentProject = setCurrentProject;

    if (localStorage.getItem("displayMode") != null) {
      setMode(localStorage.getItem("displayMode"));
    }

    window.onscroll = function (e) {
      var bodies = document.getElementsByClassName("Showable");
      for (var i = 0; i < bodies.length; i++) {
        if (toggleBody(bodies.item(i).getBoundingClientRect())) {
          if (bodies.item(i).classList.contains("Fade")) {
            bodies.item(i).classList.toggle("Fade");
          }
        } else if (!bodies.item(i).classList.contains("Fade")) {
          bodies.item(i).classList.toggle("Fade");
        }
      }
    }
  }, [mode])

  document.getElementById("body").className = mode;
  return (
    <div className={`App ${mode}`}>
      <div className="Sub">

        <div className="Body-Info">
          <img className='Showable' id="meMainImg" src={bg} alt="" style={mode === "Dark" ? { border: "1vmin", borderColor: "white", borderStyle: "solid" } : { border: "1vmin", borderColor: "black", borderStyle: "solid" }} />

          <div className="Center">
            <div className="Text-Container Showable">
              <h2 style={{ textAlign: "center" }}>
                Hey, you found me! I am,
              </h2>
              <h1 style={{ textAlign: "center" }}><span className="Nav-Main-Text">Selim</span>.</h1>
              <br />
              <p className='Sub-Body-Text'>
                A young and ambitious future Software Engineer devoting my free time to enhancing and expanding my software knowledge and capabilities. I am looking for a role on a software team working to create products or services to benefit humanity.

                <br />Over the years, I have worked on many personal projects, usually in the form of video games. But, with each game I create, I engage in a different challenge, from AI pathfinding to Networking in online games.

                <br />If you would like to see what I have worked on, scroll for more!
              </p>
            </div>

          </div>
        </div>

        <div className="Body-Info Projects">
          {/* <BiLeftArrow className='Arrow Showable' style={mode === "Dark" ? { color: "white" } : { color: "black" }} onClick={() => {
            cycleGallary(-1, currentGame);
          }} /> */}

          {/* <div className="Gallary"> */}
          <div id="project-0" className={`Showable Project-Container ${mode}`}>
            <div className="Main-Info">
              <img className={`Thumbnail ${mode}`} src={drTN} alt="" />

              <h2 className='Project-Title'>Dummy Royale</h2>
            </div>

            {
              (currentProject === 0) ? (
                <div className='Project-Body'>
                  <p className='Sub-Body-Text Project-Desc' style={mode === "Dark" ? { color: "black", marginBottom: "2em" } : { color: "white", marginBottom: "2em" }}>
                    Dummy Royale is a battle royale game I created using Python and the PyGames library. It is inspired by <a target={"_blank"} href="https://surviv.io/" className='App-link' rel="noreferrer">surviv.io</a>. In Dummy Royale, the user spawns in against 99 AIs. The objective is to break crates and find weapons to shoot at enemies. The bots use a sort of state machine to determine what to do. They will start off by pathfinding to a crate. They will run to the shooter and begin punching them if they get shot at. Otherwise, they will get the weapon and pathfind to the closest enemy. Depending on their gun, they will wait until they are within range to begin firing.
                  </p>
                  <ul style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
                    <li><a href="" className='App-link'>Github</a></li>
                    <li><a href="" className='App-link'>Itch.IO</a></li>
                    <li><a href="" className='App-link'>Preview</a></li>
                  </ul>
                  <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(-1, currentProject)}>Show less.</p>
                </div>) : (
                <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(0, currentProject)}>Show more!</p>
              )
            }
          </div>

          <div id="project-1" className={`Showable Project-Container ${mode}`}>
            <div className="Main-Info">
              <img className={`Thumbnail ${mode}`} src={cppTN} alt="" />
              <h2 className='Project-Title'>Chess++</h2>
            </div>

            {
              (currentProject === 1) ? (
                <div className='Project-Body'>
                  <p className='Sub-Body-Text Project-Desc' style={mode === "Dark" ? { color: "black", marginBottom: "2em" } : { color: "white", marginBottom: "2em" }}>
                    Chess++ is a collaborative summative project between my friend and me. We used Java and JavaFX to create a desirable UI and an enjoyable chess match. The game offers many features, including but not exclusive to the following: playing against a friend (pass and play). Play online against a random person, which is possible thanks to Firebase's RealTime Database and some backend magic to make it work efficiently. Play against a computer AI that uses a Mini-Max algorithm and recursive iterations to determine which is the best possible move. Our game also allows users to create an account to store all their statistics. Users gain points after winning a match and lose points if they leave a game or lose it.
                  </p>
                  <ul style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
                    <li><a href="" className='App-link'>Github</a></li>
                    <li><a href="" className='App-link'>Itch.IO</a></li>
                    <li><a href="" className='App-link'>Preview</a></li>
                  </ul>
                  <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(-1, currentProject)}>Show less.</p>
                </div>) : (
                <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(1, currentProject)}>Show more!</p>
              )
            }
          </div>

          <div id="project-2" className={`Showable Project-Container ${mode}`}>
            <div className="Main-Info">
              <img className={`Thumbnail ${mode}`} src={psTN} alt="" />
              <h2 className='Project-Title'>Perspective Shift</h2>
            </div>

            {
              (currentProject === 2) ? (
                <div className='Project-Body'>
                  <p className='Sub-Body-Text Project-Desc' style={mode === "Dark" ? { color: "black", marginBottom: "2em" } : { color: "white", marginBottom: "2em" }}>
                    Perspective Shift is the first game I created using the Unity game engine. I wanted to utilize a unique mechanic that required players to think about the world from both a 2D and 3D perspective. In the game, you play as a sphere. The goal is to reach a green platform which is the finish line. However, some areas are inaccessible when playing the game from a 3D perspective, hence needing to shift to a 2D view.            </p>
                  <ul style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
                    <li><a href="" className='App-link'>Github</a></li>
                    <li><a href="" className='App-link'>Itch.IO</a></li>
                    <li><a href="" className='App-link'>Preview</a></li>
                  </ul>
                  <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(-1, currentProject)}>Show less.</p>
                </div>) : (
                <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(2, currentProject)}>Show more!</p>
              )
            }
          </div>

          <div id="project-3" className={`Showable Project-Container ${mode}`}>
            <div className="Main-Info">
              <img className={`Thumbnail ${mode}`} src={cmTN} alt="" />
              <h2 className='Project-Title'>Conservation of Momentum</h2>
            </div>
            {
              (currentProject === 3) ? (
                <div className='Project-Body'>
                  <p className='Sub-Body-Text Project-Desc' style={mode === "Dark" ? { color: "black", marginBottom: "2em" } : { color: "white", marginBottom: "2em" }}>
                    For my physics class in my senior year of high school, we had to present one of the units we learned about in a video. Although, we had the option to create a computer simulation, and I am sure you can guess what route I went down. I ended up using JavaFX to make a simulation of the 2D conservation of momentum. In the simulation, exists two circles. As the user, you control the mass, speed, and direction. After, you can experiment with different collision angles to see different results.                  </p>
                  <ul style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
                    <li><a href="" className='App-link'>Github</a></li>
                    <li><a href="" className='App-link'>Itch.IO</a></li>
                    <li><a href="" className='App-link'>Preview</a></li>
                  </ul>
                  <p className='Text-Promt' style={mode === "Dark" ? { color: "black", marginBottom: 0 } : { color: "white", marginBottom: 0 }} onClick={e => handleProjectClick(-1, currentProject)}>Show less.</p>
                </div>) : (
                <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(3, currentProject)}>Show more!</p>
              )
            }
          </div>

          {
            (showAllProjects) ? (
              <>
                <div id="project-4" className={`Showable Project-Container ${mode}`}>
                  <div className="Main-Info">
                    <img className={`Thumbnail ${mode}`} src={isTn} alt="" />
                    <h2 className='Project-Title'>Insertion Sort</h2>
                  </div>
                  {
                    (currentProject === 4) ? (
                      <div className='Project-Body'>
                        <p className='Sub-Body-Text Project-Desc' style={mode === "Dark" ? { color: "black", marginBottom: "2em" } : { color: "white", marginBottom: "2em" }}>
                          Envisioning can sometimes be very difficult to do for some. I started a journey of creating sort visualizers. This visualizer demonstrated an Insertion sort, which includes the following: animations for clarity, colour distinction, step-through, instant sorting, and reset abilities. The app also allows the user to control the number of entities and the speed of the sort.                          </p>
                        <ul style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
                          <li><a href="" className='App-link'>Github</a></li>
                          <li><a href="" className='App-link'>Itch.IO</a></li>
                          <li><a href="" className='App-link'>Preview</a></li>
                        </ul>
                        <p className='Text-Promt' style={mode === "Dark" ? { color: "black", marginBottom: 0 } : { color: "white", marginBottom: 0 }} onClick={e => handleProjectClick(-1, currentProject)}>Show less.</p>
                      </div>) : (
                      <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(4, currentProject)}>Show more!</p>
                    )
                  }
                </div>

                <div id="project-5" className={`Showable Project-Container ${mode}`}>
                  <div className="Main-Info">
                    <img className={`Thumbnail ${mode}`} src={inTn} alt="" />
                    <h2 className='Project-Title'>Infiltrator</h2>
                  </div>
                  {
                    (currentProject === 5) ? (
                      <div className='Project-Body'>
                        <p className='Sub-Body-Text Project-Desc' style={mode === "Dark" ? { color: "black", marginBottom: "2em" } : { color: "white", marginBottom: "2em" }}>
                          While it may not be as interesting as other projects, Infiltrator, was my attempt at making an endless game using p5.js. It is an endless parkour game where the player is a ninja and has to traverse platforms eternally.                        </p>
                        <ul style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
                          <li><a href="" className='App-link'>Github</a></li>
                          <li><a href="" className='App-link'>Itch.IO</a></li>
                          <li><a href="" className='App-link'>Preview</a></li>
                        </ul>
                        <p className='Text-Promt' style={mode === "Dark" ? { color: "black", marginBottom: 0 } : { color: "white", marginBottom: 0 }} onClick={e => handleProjectClick(-1, currentProject)}>Show less.</p>
                      </div>) : (
                      <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(5, currentProject)}>Show more!</p>
                    )
                  }
                </div>
              </>
            ) : (
              <VscExpandAll style={{ margin: "0 50% 0 50%" }} className='Arrow Showable' onClick={() => {
                setShowAllProjects(true);
              }} />
            )
          }
        </div>
      </div>

      <div className="Body-Info Showable">
        <div className="Center">
          <h1 className="Nav-Main-Text" style={{textAlign: "center"}}>Contact Me Here!</h1>
          <div className='Socials'>
            <AiFillMail className='Arrow' style={mode === "Dark" ? { color: "white" } : { color: "black" }} />
            <AiFillInstagram className='Arrow' style={mode === "Dark" ? { color: "white" } : { color: "black" }} />
            <AiFillLinkedin className='Arrow' style={mode === "Dark" ? { color: "white" } : { color: "black" }} />
          </div>

        </div>
      </div>

      {
        (mode === "Dark") ?
          <BsFillSunFill id="mode" style={{ color: "white" }} onClick={() => {
            setMode("Light");
            localStorage.setItem("displayMode", "Light");
          }} /> :
          <BsFillMoonFill id="mode" style={{ color: "black" }} onClick={() => {
            setMode("Dark");
            localStorage.setItem("displayMode", "Dark");
          }} />
      }
    </div>
  );
}

function toggleBody(rect1) {
  var rect2 = document.body.getBoundingClientRect();

  if ((rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < window.innerHeight &&
    rect1.height + rect1.y > 0 && (rect1.top + Math.min(rect1.height * 0.9, window.innerHeight / 2)) / window.innerHeight < 1) || rect1.top < 0) {
    return true;
  } else {
    return false;
  }
}

function handleProjectClick(id, prev) {
  var projects = document.getElementsByClassName("Project-Container");

  if (prev !== -1) {
    for (let i = 0; i < projects.length; i++) {
      let proj = projects.item(i);

      if (proj.id === "project-" + prev) {
        proj.style.flex = "0 0 calc(max(30%, 215px))";
        break;
      }
    }
  }

  if (id !== -1) {
    for (let i = 0; i < projects.length; i++) {
      let proj = projects.item(i);

      if (proj.id === "project-" + id) {
        proj.style.flex = "0 0 calc(max(30%, 215px))";
        proj.parentElement.insertBefore(proj, proj.parentElement.firstChild);
      }

    }
  }

  updateCurrentProject(id);

  window.scrollTo(0, document.getElementsByClassName("Body-Info").item(0).getBoundingClientRect().height);
}

export default App;
