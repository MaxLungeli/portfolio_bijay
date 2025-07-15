import { HomeDataVid } from "../../assets/other/data";
import Vidoes from "../utility/Vidoes";
import "./home.css";
// import ReactPlayer from "react-player";
import { FacebookProvider, EmbeddedVideo } from "react-facebook";

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
            {/* <a href="#contact">contact</a> */}
            Contact
          </button>
        </div>
      </div>
      <div className="video_list">
        {HomeDataVid.map((data) => {
          return (
            <div key={data.id} className="home_video">
              <Vidoes src={data.src} poster={data.poster} />
            </div>
          );
        })}
        <div className="youtube_vid">
          <iframe
            src="https://www.youtube.com/embed/ilEncZbbN20"
            title="सुख र दुःख त लेखेको हुन्छ/ PRABHU RUPESHWOR GAUR DAS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="youtube_frame"
          ></iframe>
        </div>

        {/* facebook url */}
        <div className="youtube_vid">
          <FacebookProvider appId="YOUR_FACEBOOK_APP_ID">
            <EmbeddedVideo href={fbUrl1} />
          </FacebookProvider>
        </div>
      </div>
    </section>
  );
};

export default Home;
