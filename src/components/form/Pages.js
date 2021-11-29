import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "../layout/StandardClasses.module.css";
import PageSelector from "../pixels/PageSelector";

function PagesPage(props) {
	return (
		<>
			<h1>Pages to Fire</h1>
			<PageSelector />
			<br />
			{/* <div className={classes.actions}>
				<Link to="/scope">
					<button>Back</button>
				</Link>

				<Link to="/pixels">
					<button>Next</button>
				</Link>
			</div> */}
		</>
	);

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
