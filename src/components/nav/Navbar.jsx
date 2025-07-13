import "./navbar.css";
import { NavData } from "../../data";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header_main">
        <div className="title">
          <h2>
            <a href="#" className="title_link">
              Bijay
            </a>
          </h2>
        </div>
        <nav className="nav">
          <div className="nav_items">
            <ul className="nav_list">
              {NavData.map((data) => {
                return (
                  <li className="nav_li" key={data.id}>
                    <a href="#" className="nav_link">
                      {data.body}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="btn nav_button">book online</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
