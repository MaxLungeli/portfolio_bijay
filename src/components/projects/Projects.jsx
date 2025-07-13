import videosData from "../../assets/videos";
import Vidoes from "../utility/Vidoes";

import "./projects.css";

const Projects = () => {
  console.log(videosData);
  return (
    <section className="projects">
      <div className="project_heading">
        <h2>Projects</h2>
      </div>
      <div className="vidoes">
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
