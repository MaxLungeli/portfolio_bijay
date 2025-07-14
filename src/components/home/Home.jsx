import { HomeDataVid } from "../../assets/other/data";
import Vidoes from "../utility/Vidoes";
import "./home.css";

const Home = () => {
  return (
    <section className="container home">
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
            in Nepal, with over 10+ years of
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
      </div>
    </section>
  );
};

export default Home;
