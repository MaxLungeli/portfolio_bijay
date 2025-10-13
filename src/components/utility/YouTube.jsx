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
    </div>
  );
};

export default YouTube;
