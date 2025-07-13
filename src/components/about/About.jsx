import List from "../utility/List";
import "./about.css";
import { AboutWhat, ToolsData, WorkData } from "../../data";

function About() {
  return (
    <section className="about section">
      <div className="about_main">
        <h2 className="about_heading">Meet Bijay Lungeli</h2>
        <div className="about_img">
          <img src="profile.png" alt="profile" className="img_profile" />
        </div>

        <div className="about_sub">
          <p className="about_paragraph">
            From YouTube documentries and cinematic short films to social media
            reels, ads, and event hightlights. I bring stories to life with
            precision editing, thoughtful pacing, and a strong sense of visual
            storytelling. Over the years, I've worked with content creators,
            brands, entrepreneurs, and agencies worldwide - helping them
            transform raw footage into meaningful, high-impact videos.
          </p>
        </div>
      </div>
      <div className="about_subsection">
        <List heading="What I Do" data={AboutWhat} />
        <List heading="Tools I Use" data={ToolsData} />
        <List heading="Why Works With Me?" data={WorkData} />
      </div>
    </section>
  );
}

export default About;
