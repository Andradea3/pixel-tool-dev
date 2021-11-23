import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import classes from "../components/layout/StandardClasses.module.css";
import ScopeSelector from "../components/pixels/ScopeSelector";
import Card from "../components/ui/Card";
import pixelInfo from "./Info"

function ScopePage(props) {

  const ticketeventsInputRef = useRef();
  const contextInputRef = useRef();
  const location = useLocation()
  const client = props.pixelStart?.client //useContext(pixelInfo);
  const testing = props.info


  return (
    <form>
      {console.log("client"+{client})}
      <h1>Scope of the Rule {client}</h1>
      <br />
      <h1>{client}</h1>
      
      <label ></label>
      <ScopeSelector />
      <br />
      <Card>
         <div className={classes.control}>

          <label htmlFor="context">Context ID</label>
          <input type="text" required id="context" ref={contextInputRef} />

          <label htmlFor="ticketingevents">Ticketing Event IDs</label>
          <input type="text" placeholder=" 123,124,156..." required id="ticketingevents" ref={ticketeventsInputRef} />
        </div>
      </Card>
      <div className={classes.actions}>
        <Link to="/new-pixel-info">
          <button onClick={console.log("back")}>Back</button>
        </Link>
            
        <Link to="/pages">
          <button onClick={console.log("ops")}>Next</button>
        </Link>
      </div>
    </form>
  );
}

export default ScopePage;
