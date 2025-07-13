export default function List({ heading, data }) {
  return (
    <div className="list">
      <h3>{heading}</h3>
      <ul></ul>
      {data.map((cont) => {
        return <li key={cont.id}>{cont.desc}</li>;
      })}
    </div>
  );
}
