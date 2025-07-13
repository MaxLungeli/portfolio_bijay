export default function Vidoes({ src }) {
  return (
    <video controls style={{ width: "100%" }}>
      <source className="video_src" src={src} type="video/mp4" />
    </video>
  );
}
