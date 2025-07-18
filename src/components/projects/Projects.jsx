import videosData from "../../assets/videos";
import Vidoes from "../utility/Vidoes";
// import ReactPlayer from "react-player";
import { FacebookProvider, EmbeddedVideo } from "react-facebook";

import "./projects.css";
import { FbVidData } from "../../data";

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <div className="project_heading">
        <h2>Projects</h2>
      </div>
      <div className="vidoes">
        {/* <div className="video_parent vidH">
          <iframe
            src="https://www.youtube.com/embed/47nIHxiBTtU"
            title="A Dad&#39;s Journey - Struggles of Father | Bhanu Paudel | Samrat Sthapit| Ep 29 - FULL PODCAST​"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_data"
          ></iframe>
        </div> */}

        <div className="video_parent vidH">
          {/* <ReactPlayer url={fbUrl1} controls /> */}
          <iframe
            src="https://www.youtube.com/embed/bvWd42AkSuU"
            title="What is Susan Boyle doing now?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_data"
          ></iframe>
        </div>

        {FbVidData.map((val) => {
          return (
            <div className="video_parent vidH" key={val.id}>
              <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
                <EmbeddedVideo href={val.data} />
              </FacebookProvider>
            </div>
          );
        })}

        {videosData.map((val) => {
          return (
            <div className="video_parent vidH" key={val.id}>
              <Vidoes
                className="video_data"
                src={val.src}
                poster={val.poster}
              />
            </div>
          );
        })}

        {/* <div className="video_parent vidH">
          <iframe
            src="https://www.youtube.com/embed/gck53fwf2b8"
            title="Yantra, Mantra, Tantra | Diptee Acharya | Rupeshwor Gaur Das | RETA WORLD ASK ME"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_data"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
