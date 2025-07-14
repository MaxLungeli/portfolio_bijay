import { HomeDataVid } from "../../assets/other/data";
import Vidoes from "../utility/Vidoes";
import "./home.css";
// import ReactPlayer from "react-player";
import { FacebookProvider, EmbeddedVideo } from "react-facebook";

const Home = () => {
  const fbUrl1 = `https://www.facebook.com/61566356101439/videos/1016401157147971/?rdid=g2o6biwCaF1y3mNc#`;

  return (
    <section className="container home" id="home">
      <div className="section_body">
        <div className="home_img">
          <img src="profile.png" alt="profile" className="img_profile" />
        </div>
        <h1 className="section_title">bijay lungeli</h1>
        <div className="section_paragraphs">
          <p className="first">
            Video Editor | Graphic Designer | Visual Creator
          </p>
          <p className="second">
            Hi, I'm Bijay Lungeli - a creative and passionate video editor based
            in Nepal, with over 5+ years of
          </p>
          <p className="third">
            experience crafting visually stunning and emotionally engaing video
            content
          </p>
          <button className="btn hero_btn">contact</button>
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="youtube_frame"
          ></iframe>
        </div>
        <div className="youtube_vid">
          <iframe
            src="https://www.youtube.com/embed/gck53fwf2b8"
            title="Yantra, Mantra, Tantra | Diptee Acharya | Rupeshwor Gaur Das | RETA WORLD ASK ME"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
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
