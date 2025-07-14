export default function List({ heading, data }) {
  return (
    <div className="list">
      <h3>{heading}</h3>

      {data.map((cont) => {
        return (
          <li key={cont.id} className="list_item">
            {cont.desc}
          </li>
        );
      })}
    </div>
  );
}
