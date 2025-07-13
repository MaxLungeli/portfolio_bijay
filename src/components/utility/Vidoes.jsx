export default function Vidoes({ src, poster }) {
  // console.log(poster);
  return (
    <video controls style={{ width: "100%" }} poster={poster}>
      <source className="video_src" src={src} type="video/mp4" />
    </video>
  );
}
