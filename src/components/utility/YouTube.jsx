const YouTube = ({ src, title }) => {
  return (
    <div>
      <div>
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="centered-video"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
      {/* <div className="video_container">
        <iframe
          style={{ width: "100%" }}
          src="https://www.youtube.com/embed/zsb5dl1isgI"
          title="Janiye kya hota hai &#39;Panchakshari Mantra&#39; #akshatguptapodcast #akshatgupta #lordshiva #shravanmaas"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="video_elem"
        ></iframe>
      </div> */}
    </div>
  );
};

export default YouTube;
