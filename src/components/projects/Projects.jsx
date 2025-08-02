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
        {FbVidData.map((val) => {
          return (
            <div className="video_container vidH" key={val.id}>
              <FacebookProvider
                appId="YOUR_FACEBOOK_APP_ID"
                className="face_vid"
              >
                <EmbeddedVideo href={val.data} />
              </FacebookProvider>
            </div>
          );
        })}

        {videosData.map((val) => {
          return (
            <div className="video_container vidH" key={val.id}>
              <Vidoes className="face_vid" src={val.src} poster={val.poster} />
            </div>
          );
        })}

        <div className="video_parent vidH">
          {/* <ReactPlayer url={fbUrl1} controls /> */}
          <iframe
            src="https://www.youtube.com/embed/bvWd42AkSuU"
            title="What is Susan Boyle doing now?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Projects;
