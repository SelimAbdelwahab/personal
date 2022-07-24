import './App.css';
import webImg from "./assets/web-img.jpg";
import drTN from "./assets/Dummy Royale Icon.png";
import cppTN from "./assets/Chess++ Icon.jpg";
import psTN from "./assets/Perspective Shift Icon.jpg";
import cmTN from "./assets/2D Conservation of Momentum Icon.jpg";
import inTN from "./assets/Infiltrator Icon.png";
import isTn from "./assets/Insertion Sort Icon.jpg";

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
// import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { VscExpandAll } from "react-icons/vsc";
import { AiOutlineMail, AiOutlineInstagram, AiOutlineinkedin, AiOutlineLinkedin } from "react-icons/ai";

import { useState, useEffect } from "react";

var updateCurrentProject;

var showAmount = 4;
var projects = [
  {
    id: 0,
    name: "Dummy Royale",
    thumbnail: drTN,
    desc: "Dummy Royale is a battle royale game I created using Python and the PyGames library. It is inspired by surviv.io. In Dummy Royale, the user spawns in against 99 AIs. The objective is to break crates and find weapons to shoot at enemies. The bots use a sort of state machine to determine what to do. They will start off by pathfinding to a crate. They will run to the shooter and begin punching them if they get shot at. Otherwise, they will get the weapon and pathfind to the closest enemy. Depending on their gun, they will wait until they are within range to begin firing.",
    links: [
      { name: "Github", link: "" },
      { name: "Itch.io", link: "" },
      { name: "Preview", link: "" },
    ],
  },

  {
    id: 1,
    name: "Chess++",
    thumbnail: cppTN,
    desc: "Chess++ is a collaborative summative project between my friend and me. We used Java and JavaFX to create a desirable UI and an enjoyable chess application. The game offers many features, including but not exclusive to the following: playing against a friend (pass and play). Play online against a random person, which is possible thanks to Firebase's RealTime Database and some backend magic to make it work efficiently. Play against a computer AI that uses a Mini-Max algorithm and recursive iterations to determine which is the best possible move. Our game also allows users to create an account to store all their statistics. Users gain points after winning a match and lose points if they leave a game or lose it.",
    links: [
      { name: "Github", link: "" },
      { name: "Itch.io", link: "" },
      { name: "Preview", link: "" },
    ],
  },

  {
    id: 2,
    name: "Perspective Shift",
    thumbnail: psTN,
    desc: "Perspective Shift is the first game I created using the Unity game engine. I wanted to utilize a unique mechanic that required players to think about the world from both a 2D and 3D perspective. In the game, you play as a sphere. The goal is to reach a green platform which is the finish line. However, some areas are inaccessible when playing the game from a 3D perspective, hence needing to shift to a 2D view.",
    links: [
      { name: "Github", link: "" },
      { name: "Itch.io", link: "" },
      { name: "Preview", link: "" },
    ],
  },

  {
    id: 3,
    name: "Conservation of Momentum",
    thumbnail: cmTN,
    desc: "For my physics class in my senior year of high school, we had to present one of the units we learned about in a video. Although, we had the option to create a computer simulation, and I am sure you can guess what route I went down. I ended up using JavaFX to make a simulation of the 2D conservation of momentum. In the simulation, exists two circles. As the user, you control the mass, speed, and direction. After, you can experiment with different collision angles to see different results.",
    links: [
      { name: "Github", link: "" },
      { name: "Itch.io", link: "" },
      { name: "Preview", link: "" },
    ],
  },
  {
    id: 4,
    name: "Insertion Sort",
    thumbnail: isTn,
    desc: "Envisioning can sometimes be very difficult to do for some. I started a journey of creating sort visualizers. This visualizer demonstrated an Insertion sort, which includes the following: animations for clarity, colour distinction, step-through, instant sorting, and reset abilities. The app also allows the user to control the number of entities and the speed of the sort.",
    links: [
      { name: "Github", link: "" },
      { name: "Itch.io", link: "" },
      { name: "Preview", link: "" },
    ]
  },

  {
    id: 5,
    name: "Infiltrator",
    thumbnail: inTN,
    desc: "While it may not be as interesting as other projects, Infiltrator, was my attempt at making an endless game using p5.js. It is an endless parkour game where the player is a ninja and has to traverse platforms eternally.",
    links: [
      { name: "Github", link: "" },
      { name: "Itch.io", link: "" },
      { name: "Preview", link: "" },
    ]
  }
];

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
      <AboutMe mode={mode} />
      <Projects
        mode={mode}
        showAllProjects={showAllProjects}
        setShowAllProjects={setShowAllProjects}
        currentProject={currentProject}
      />

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

      <Connect mode={mode}/>
    </div>
  );
}

const AboutMe = (mode) => (
  <div className="Body-Info About-Me">
    <img className='Showable' id="meMainImg" src={webImg} alt="" />

    <div className="Center Showable">
      <h2 style={{ textAlign: "center" }}>
        Hey, you found me! I am,
      </h2>
      <h1 style={{ textAlign: "center" }}><span className="Nav-Main-Text">Selim</span>.</h1>
      <br />
    </div>

    <p className={`Sub-Body-Text About-Me-Info Overlay ${mode}`}>
      A young and ambitious future Software Engineer devoting my free time to enhancing and expanding my software knowledge and capabilities. I am looking for a role on a software team working to bring innovative changes.

      <br />Over the years, I have worked on many personal projects, usually in the form of video games. But, with each game I create, I engage in a different challenge, from AI pathfinding to Networking in online games.

      <br />If you would like to see what I have worked on, scroll for more!
    </p>
  </div>

);

function generateProj(id, title, Thumbnail, desc, links, mode, currentProj) {
  if (currentProj === id)
    return (
      <div className='Project-Expanded' key={Math.random()}>
        <div className='Project-Background'>
          <img src={Thumbnail} alt="" />
        </div>

        <div id={`project-${id}`} className={`Showable Project-Container ${mode}`}>
          <div className="Main-Info">
            <h2 className='Project-Title Expanded'>{title}</h2>
          </div>

          <div className='Project-Body'>
            <p className='Sub-Body-Text Project-Desc'>
              {desc}
            </p>
            <div style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
              {links.map(item => <a className='App-link Coming-Soon' href={item.link} key={Math.random()}>{item.name}</a>)}
            </div>
            <p className='Text-Promt' onClick={() => handleProjectClick(-1, currentProj)}>Show less.</p>
          </div>
        </div>
      </div>
    )
  return (
    <div id={`project-${id}`} className={`Showable Project-Container ${mode} Shrunk`} key={Math.random()}>
      <div className="Main-Info">
        <img className={`Thumbnail ${mode}`} src={Thumbnail} alt="" />

        <h2 className='Project-Title'>{title}</h2>
      </div>

      <p className='Text-Promt' style={mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={() => handleProjectClick(id, currentProj)}>Show more!</p>
    </div>
  );
}

// const Projects = (props) => {
//   function generateProj(id, title, Thumbnail, desc, links) {
//     if (props?.currentProject === id)
//       return (
//         <div className='Project-Expanded' key={Math.random()}>
//           <div className='Project-Background'>
//             <img src={Thumbnail} alt="" />
//           </div>

//           <div id={`project-${id}`} className={`Showable Project-Container ${props?.mode}`}>
//             <div className="Main-Info">
//               <h2 className='Project-Title Expanded'>{title}</h2>
//             </div>

//             <div className='Project-Body'>
//               <p className='Sub-Body-Text Project-Desc'>
//                 {desc}
//               </p>
//               <div style={{ marginBottom: "3em" }} className='Sub-Body-Text Project-Links'>
//                 {links.map(item => <a className='App-link' href={item.link} key={Math.random()}>{item.name}</a>)}
//               </div>
//               <p className='Text-Promt' onClick={e => handleProjectClick(-1, props?.currentProject)}>Show less.</p>
//             </div>
//           </div>
//         </div>
//       )
//     return (
//       <div id={`project-${id}`} className={`Showable Project-Container ${props?.mode} Shrunk`} key={Math.random()}>
//         <div className="Main-Info">
//           <img className={`Thumbnail ${props?.mode}`} src={Thumbnail} alt="" />

//           <h2 className='Project-Title'>{title}</h2>
//         </div>

//         <p className='Text-Promt' style={props?.mode === "Dark" ? { color: "black" } : { color: "white" }} onClick={e => handleProjectClick(id, props?.currentProject)}>Show more!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="Body-Info Projects">
//       {[
//         generateProj(
//           0,
//           "Dummy Royale",
//           drTN,
//           "Dummy Royale is a battle royale game I created using Python and the PyGames library. It is inspired by surviv.io. In Dummy Royale, the user spawns in against 99 AIs. The objective is to break crates and find weapons to shoot at enemies. The bots use a sort of state machine to determine what to do. They will start off by pathfinding to a crate. They will run to the shooter and begin punching them if they get shot at. Otherwise, they will get the weapon and pathfind to the closest enemy. Depending on their gun, they will wait until they are within range to begin firing.",
//           [
//             { name: "Github", link: "" },
//             { name: "Itch.io", link: "" },
//             { name: "Preview", link: "" },
//           ]
//         ),

//         generateProj(
//           1,
//           "Chess++",
//           cppTN,
//           "Chess++ is a collaborative summative project between my friend and me. We used Java and JavaFX to create a desirable UI and an enjoyable chess application. The game offers many features, including but not exclusive to the following: playing against a friend (pass and play). Play online against a random person, which is possible thanks to Firebase's RealTime Database and some backend magic to make it work efficiently. Play against a computer AI that uses a Mini-Max algorithm and recursive iterations to determine which is the best possible move. Our game also allows users to create an account to store all their statistics. Users gain points after winning a match and lose points if they leave a game or lose it.",
//           [
//             { name: "Github", link: "" },
//             { name: "Itch.io", link: "" },
//             { name: "Preview", link: "" },
//           ]
//         ),

//         generateProj(
//           2,
//           "Perspective Shift",
//           psTN,
//           "Perspective Shift is the first game I created using the Unity game engine. I wanted to utilize a unique mechanic that required players to think about the world from both a 2D and 3D perspective. In the game, you play as a sphere. The goal is to reach a green platform which is the finish line. However, some areas are inaccessible when playing the game from a 3D perspective, hence needing to shift to a 2D view.",
//           [
//             { name: "Github", link: "" },
//             { name: "Itch.io", link: "" },
//             { name: "Preview", link: "" },
//           ]
//         ),

//         generateProj(
//           3,
//           "Conservation of Momentum",
//           cmTN,
//           "For my physics class in my senior year of high school, we had to present one of the units we learned about in a video. Although, we had the option to create a computer simulation, and I am sure you can guess what route I went down. I ended up using JavaFX to make a simulation of the 2D conservation of momentum. In the simulation, exists two circles. As the user, you control the mass, speed, and direction. After, you can experiment with different collision angles to see different results.",
//           [
//             { name: "Github", link: "" },
//             { name: "Itch.io", link: "" },
//             { name: "Preview", link: "" },
//           ]
//         )
//       ]}

//       {
//         (props?.showAllProjects) ? (
//           [
//             generateProj(
//               4,
//               "Insertion Sort",
//               isTn,
//               "Envisioning can sometimes be very difficult to do for some. I started a journey of creating sort visualizers. This visualizer demonstrated an Insertion sort, which includes the following: animations for clarity, colour distinction, step-through, instant sorting, and reset abilities. The app also allows the user to control the number of entities and the speed of the sort.",
//               [
//                 { name: "Github", link: "" },
//                 { name: "Itch.io", link: "" },
//                 { name: "Preview", link: "" },
//               ]
//             ),

//             generateProj(
//               5,
//               "Infiltrator",
//               inTN,
//               "While it may not be as interesting as other projects, Infiltrator, was my attempt at making an endless game using p5.js. It is an endless parkour game where the player is a ninja and has to traverse platforms eternally.",
//               [
//                 { name: "Github", link: "" },
//                 { name: "Itch.io", link: "" },
//                 { name: "Preview", link: "" },
//               ]
//             ),
//           ]
//         ) : (
//           <VscExpandAll style={{ margin: "0 50% 0 50%" }} className='Arrow Showable' onClick={() => {
//             props?.setShowAllProjects(true);
//           }} />
//         )
//       }
//     </div>
//   )
// };

const Projects = (props) => {
  return (
    <div className="Body-Info Projects">
      {
        projects.map((item, index) => {
          if (index < showAmount || props?.showAllProjects)
            return generateProj(item.id, item.name, item.thumbnail, item.desc, item.links, props?.mode, props?.currentProject)
          return ""
        })
      }

      {
        (!props?.showAllProjects) ? (
          <VscExpandAll style={{ margin: "0 50% 0 50%" }} className='Arrow Showable' onClick={() => {
            props?.setShowAllProjects(true);
          }} />
        ) : ("")
      }
    </div>
  )
};


const Connect = (props) => (
  <div className="Body-Info Showable">
    <div className="Center">
      <h1 className="Nav-Main-Text" style={{ textAlign: "center" }}>Contact Me Here!</h1>

      <AiOutlineMail className='Arrow Coming-Soon' id='svg_mail' title="Coming Soon"/>
      <a href="https://www.instagram.com/selim.280/" target={"_blank"} rel="noreferrer" title="Instagram"><AiOutlineInstagram className='Arrow' id='svg_instagram' style={props?.mode === "Dark" ? { color: "white" } : { color: "black" }}/></a>
      <a href="https://www.linkedin.com/in/selim-abdelwahab-63a733244/" rel='noreferrer' target={"_blank"} title="Linkedin"><AiOutlineLinkedin className='Arrow' id='svg_linkedin' style={props?.mode === "Dark" ? { color: "white" } : { color: "black" }}/></a>
      {
        //
      }
    </div>
  </div >
);

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
  // var projects = document.getElementsByClassName("Project-Container");
  // var parent = document.getElementsByClassName("Projects").item(0);

  // if (prev !== -1) {
  //   for (let i = 0; i < projects.length; i++) {
  //     var proj = projects.item(i);

  //     if (proj.id === "project-" + prev) {
  //       proj.style.flex = "0 0 calc(max(30%, 215px))";
  //       break;
  //     }
  //   }
  // }

  // // updateCurrentProject(id);
  // // forceUpdate();

  // if (id !== -1) {
  //   for (let i = 0; i < projects.length; i++) {
  //     let proj = projects.item(i);

  //     if (proj.id === "project-" + id) {
  //       proj.style.flex = "0 0 calc(max(90%, 215px))";
  //       proj.parentElement.insertBefore(proj, proj.parentElement.firstChild);
  //     } else {
  //       proj.style.flex = "1 0 calc(max(30%, 215px))";

  //     }
  //   }
  // }

  var arr = [];

  projects.forEach(proj => {
    proj.currentProj = id;
    arr[proj.id] = proj;
  })

  projects = arr;
  arr = [];

  if (id !== -1) {
    for (var i = 0; i < projects.length; i++) {
      projects[i].currentProj = id;

      // Shift everything down and make it appear at the start of the list
      if (id === i) {
        arr.push(projects[i]);

        for (var j = 0; j < projects.length; j++) {
          if (j === i)
            continue;

          arr.push(projects[j]);
        }
      }
    }

    projects = arr;
  }


  updateCurrentProject(id);
  window.scrollTo(0, document.getElementsByClassName("Body-Info").item(0).getBoundingClientRect().height);
}

export default App;
