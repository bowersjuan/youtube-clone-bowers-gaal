import jonathanGaal from "../assets/jonathan_gaal.jpeg";
import juanBowers from "../assets/juan_bowers.jpeg";
import "./About.css";

const About = ({ setVideos }) => {
  return (
    <div>
      <h2>About</h2>
      <strong style={{ display: "block" }}>Meet the Devs:</strong>
      <div className="devsInfo">
        <img
          className="devsPhoto"
          alt="App Dev Juan Bowers"
          src={juanBowers}></img>
        <img
          className="devsPhoto"
          alt="App Dev Jonathan Gaal"
          src={jonathanGaal}></img>

        <div className="juanLinks">
          <a
            className="devsEmail"
            target="blank"
            href={`mailto: bowersjuan@gmail.com`}>
            Juan Bowers{" -- "}
          </a>
          <a
            className="devsGitHub"
            target="blank"
            href="https://github.com/bowersjuan">
            https://github.com/bowersjuan
          </a>{" "}
          <p className="bio">
            Bio: Software Dev in the making currently enrolled in Pursuit.org’s
            12-Month Full-Stack Dev course. If you don’t catch him coding you
            can find him playing piano with salsa bands throughout New York
            City.{" "}
          </p>
        </div>

        <div className="jonLinks">
          <a
            className="devsEmail"
            target="blank"
            href={`mailto: jonathangaal@pursuit.org`}>
            Jonathan Gaal{" -- "}
          </a>

          <a
            className="devsGitHub"
            target="blank"
            href="https://github.com/Jonathan-Gaal">
            https://github.com/Jonathan-Gaal
          </a>
          <p className="bio">
            Bio: I am a growth-oriented Pursuit Fellow (Pursuit Fellowship is an
            intense 12-month software engineering program with a 9% acceptance
            rate) with an interest in full-stack web development.{" "}
          </p>
        </div>
      </div>

      <div className="description">
        <h3>About Youtube Clone</h3>
        <p>
          Youtube Clone is just what it sounds like, an attempt to replicate the
          basic functionality of Youtube. It allows users to seamlessly enter a
          search query, recieve a list of thumbnails, and click one to see the
          video of their heart's desire! This brainchild of Devs Juan Bowers &
          Jonathan Gaal was built using React.js leveraging knowledge of React
          Components, State Hooks, Fetch Calls, CSS and deployment to Netlify.
          The app also implements an efficiency feature to minimize the number
          of fetch calls made to the Youtube API by saving previous searches to
          local-storage. Fresh fetches are made for new searches and are in turn
          saved to local storage etc. The process of making the app is
          accurately captured in the oh so corny phrase "edu-tainment", both a
          fun and intensive learning experience. One of the primary lessons
          learned was thst of managing a collective workflow, a true push and
          pull sort of thing. Everytime a change to code was made, a push was
          made, and a pull, thats the secret to avoiding merge conflicts
          *shudder*. We hope that you enjoy using Youtube Clone for hours of
          YouTube video viewing fun!
        </p>
      </div>
    </div>
  );
};

export default About;
