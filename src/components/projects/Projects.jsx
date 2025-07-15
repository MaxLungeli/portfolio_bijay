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
        <div className="video_parent">
          <iframe
            src="https://www.youtube.com/embed/47nIHxiBTtU"
            title="A Dad&#39;s Journey - Struggles of Father | Bhanu Paudel | Samrat Sthapit| Ep 29 - FULL PODCAST​"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_data"
          ></iframe>
        </div>

        <div className="video_parent">
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
            <div className="video_parent" key={val.id}>
              <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
                <EmbeddedVideo href={val.data} />
              </FacebookProvider>
            </div>
          );
        })}
        {/* <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
            <EmbeddedVideo href={data1} />
          </FacebookProvider>
        </div>
        <div className="video_parent">
          <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
            <EmbeddedVideo href={data2} />
          </FacebookProvider>
        </div>
        <div className="video_parent">
          <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
            <EmbeddedVideo href={data3} />
          </FacebookProvider>
        </div>
        <div className="video_parent">
          <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
            <EmbeddedVideo href={data4} />
          </FacebookProvider>
        </div>
        <div className="video_parent">
          <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
            <EmbeddedVideo href={data5} />
          </FacebookProvider>
        </div> */}
        {videosData.map((val) => {
          return (
            <div className="video_parent" key={val.id}>
              <Vidoes
                className="video_data"
                src={val.src}
                poster={val.poster}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
