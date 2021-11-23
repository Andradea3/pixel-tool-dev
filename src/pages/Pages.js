import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "../components/layout/StandardClasses.module.css";
import PageSelector from "../components/pixels/PageSelector";

function PagesPage(props) {
    return (
      <form>
        <h1>Pages to Fire</h1>
        <PageSelector />
        <br />
        <div className={classes.actions}>
          <Link to="/scope">
            <button onClick={console.log("back")}>Back</button>
          </Link>
              
          <Link to="/pixels">
            <button onClick={console.log("ops")}>Next</button>
          </Link>
        </div>
      </form>
    );
  }
  
  export default PagesPage;
  