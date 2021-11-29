import classes from "../layout/StandardClasses.module.css";
import ScopeSelector from "../pixels/ScopeSelector";
import Card from "../ui/Card";

function ScopePage({changeStep}) {
  
  const getBack = (event) => {
    event.preventDefault();
    changeStep(step => step - 1);
  }

  return (
    <>
      <h1>Scope of the Rule</h1>
      <br />
      <h1>client</h1>
      <label ></label>
      <ScopeSelector />
      <br />
      <Card>
        <div className={classes.control}>

          <label htmlFor="context">Context ID</label>
          <input type="text" required id="context" />

          <label htmlFor="ticketingevents">Ticketing Event IDs</label>
          <input type="text" placeholder=" 123,124,156..." required id="ticketingevents" />
        </div>
      </Card>
      <div className={classes.actions}>
        
          <button onClick={getBack}>Back</button>
        
        
          <button>Next</button>
        
      </div>
    </>
  )

  // const ticketeventsInputRef = useRef();
  // const contextInputRef = useRef();
  // const location = useLocation()
  // const client = props.pixelStart?.client //useContext(pixelInfo);
  // const testing = props.info


  // return (
  //   <form>
  //     {console.log("client"+{client})}
  //     <h1>Scope of the Rule {client}</h1>
  //     <br />
  //     <h1>{client}</h1>
      
  //     <label ></label>
  //     <ScopeSelector />
  //     <br />
  //     <Card>
  //        <div className={classes.control}>

  //         <label htmlFor="context">Context ID</label>
  //         <input type="text" required id="context" ref={contextInputRef} />

  //         <label htmlFor="ticketingevents">Ticketing Event IDs</label>
  //         <input type="text" placeholder=" 123,124,156..." required id="ticketingevents" ref={ticketeventsInputRef} />
  //       </div>
  //     </Card>
  //     <div className={classes.actions}>
  //       <Link to="/new-pixel-info">
  //         <button onClick={console.log("back")}>Back</button>
  //       </Link>
            
  //       <Link to="/pages">
  //         <button onClick={console.log("ops")}>Next</button>
  //       </Link>
  //     </div>
  //   </form>
  // );
}

export default ScopePage;
