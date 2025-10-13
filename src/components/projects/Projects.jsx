import videosData from "../../assets/videos";
import Vidoes from "../utility/Vidoes";
import ReactPlayer from "react-player";
import { FacebookProvider, EmbeddedVideo } from "react-facebook";
import { gData } from "../../assets/other/data";

import "./projects.css";
import { FbVidData } from "../../data";
import { useState } from "react";

const Projects = () => {
  const [playing, setPlaying] = useState(Array(gData.length).fill(false));

  const handlePlay = (idx) => {
    setPlaying((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };
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

        {gData.map((data, idx) => {
          return (
            <div className="video_parent vidH" key={data.id}>
              {!playing[idx] ? (
                <div
                  className="video-thumbnail"
                  onClick={() => handlePlay(idx)}
                >
                  <img
                    src={data.poster}
                    alt={data.title}
                    style={{ width: "100%" }}
                  />
                  <button className="play-btn">▶</button>
                </div>
              ) : (
                <iframe
                  src={data.src}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
