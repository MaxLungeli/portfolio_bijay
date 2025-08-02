import { HomeDataVid } from "../../assets/other/data";
import Vidoes from "../utility/Vidoes";
import "./home.css";
import { youTubeData } from "../../assets/other/data";
import YouTube from "../utility/YouTube";

const Home = () => {
  const fbUrl1 = `https://www.facebook.com/61566356101439/videos/1016401157147971/?rdid=g2o6biwCaF1y3mNc#`;

  return (
    <section className=" home container" id="home">
      <div className="section_body">
        <div className="home_img">
          <img src="profile.png" alt="profile" className="img_profile" />
        </div>
        <h1 className="section_title">bijay lungeli</h1>
        <div className="section_paragraphs">
          <p className="first">
            Video Editor | Graphic Designer | Visual Creator
          </p>

          <button className="btn hero_btn">
            <a href="#contact" className="contact_li">
              Contact
            </a>
          </button>
        </div>
      </div>
      <div className="video_list">
        {youTubeData.map((data) => {
          return (
            <div className="video_container">
              <YouTube
                key={data.id}
                src={data.src}
                title={data.title}
                className="video_elem"
              ></YouTube>
            </div>
          );
        })}
        {HomeDataVid.map((data) => {
          return (
            <div key={data.id} className="video_container">
              <Vidoes
                src={data.src}
                poster={data.poster}
                className="video_elem"
              />
            </div>
          );
        })}
        <YouTube />

        {/* facebook url */}
        {/* <div className="video_container">
          <FacebookProvider appId="YOUR_FACEBOOK_APP_ID" className="face_vid">
            <EmbeddedVideo href={fbUrl1} />
          </FacebookProvider>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
