import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>AXS Pixel Tool</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/new-pixel-info">Add New Pixel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
