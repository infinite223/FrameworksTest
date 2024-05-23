import {Link, Outlet} from "react-router-dom";
import "./homeStyles.css";
import reactSvg from "../../assets/react.svg";

const Home = () => {
  return (
    <div className="main">
      <nav>
        <img src={reactSvg} className="icon" />
        <h1>React Test App</h1>
        <div className="options">
          <div className="option">
            <Link to="/microComponents">Micro components</Link>
          </div>
          <div className="option">
            <Link to="/SvgRender">SVG render</Link>
          </div>
          <div className="option">
            <Link to="/FibGenerator">Fib Generator</Link>
          </div>
        </div>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
