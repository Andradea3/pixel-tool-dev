import { useRef, createContext } from "react";
import { Link } from "react-router-dom";

import classes from "../components/layout/StandardClasses.module.css";
import ReactDayPicker from "../components/pixels/DatePicker";

function InfoPage(props) {
  const clientInputRef = useRef();
  const contextInputRef = useRef();
  const ticketInputRef = useRef();
  const descriptionInputRef = useRef();
  const domainsInputRef = useRef();

  function submitHandler(event) {
    console.log("handler");
    event.preventDefault();

    const enteredClient = clientInputRef.current.value;
    const enteredContext = contextInputRef.current.value;
    const enteredTicket = ticketInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDonain = domainsInputRef.current.value;

    const pixelInfo = createContext({
      client: enteredClient,
      context: enteredContext,
      ticket: enteredTicket,
      desc: enteredDescription,
      domain: enteredDonain,
    });

    console.log(pixelInfo);
    window.location.href = "http://localhost:3000/scope";
    // <Link to={{
    //             pathname: "/scope",
    //             info:[{client: enteredClient, context: '123'}]
    //           }}></Link>
    // <Link to={{
    //     pathname: "/scope",
    //     state: {client: enteredClient}
    // }}
    // />
    // window.open("/scope");
    // props.onNext(pixelInfo);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Request Info</h1>
      <div className={classes.control}>
        <label htmlFor="client">Requesting Client</label>
        <input type="text" required id="client" ref={clientInputRef} />

        <label htmlFor="context">Context ID</label>
        <input type="text" required id="context" ref={contextInputRef} />

        <label htmlFor="ticket">Ticket ID</label>
        <input
          type="text"
          placeholder=" PIX-500"
          required
          id="ticket"
          ref={ticketInputRef}
        />

        <label>End Date</label>
      </div>
      <ReactDayPicker />
      <br />
      <br />
      <div className={classes.control}>
        <label htmlFor="description">Brief Description</label>
        <input
          type="text"
          required
          id="description"
          ref={descriptionInputRef}
        />

        <label htmlFor="domains">Domain for Cross-Domain Tracking</label>
        <input
          type="text"
          placeholder=" nba.com"
          id="domains"
          ref={domainsInputRef}
        />
      </div>
      <div className={classes.actions}>
        <Link
          to={{
            pathname: "/scope",
            pixelStart: { client: {clientInputRef} },
          }}
        >
          <button onClick={submitHandler}>Next</button>
        </Link>
      </div>
    </form>
    
  );
}

export default InfoPage;
