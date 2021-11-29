import classes from "../layout/StandardClasses.module.css"
import ReactDayPicker from "../pixels/DatePicker";

function InfoPage({handleChange, pixelFields, nextStep}) {
  
  const handleSubmit = (event)  => {
    event.preventDefault();
    nextStep(prevStep => prevStep + 1);
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Request Info</h1>
      <div className={classes.control}>
        <label htmlFor="client">Requesting Client</label>
        <input 
          type="text" 
          required 
          id="client" 
          name="requestingClient" 
          onChange={handleChange}
          autoComplete="off"
          value={pixelFields.requestingClient}
        />

        <label htmlFor="context">Context ID</label>
        <input 
          type="text" 
          required 
          id="context" 
          name="contextID"
          onChange={handleChange}
          autoComplete="off"
          value={pixelFields.contextID}
        />

        <label htmlFor="ticket">Ticket ID</label>
        <input
          type="text"
          placeholder=" PIX-500"
          required
          name="ticketID"
          id="ticket"
          onChange={handleChange}
          autoComplete="off"
          value={pixelFields.ticketID}
        />
        <label>
          End Date
        </label>
        <span id="alertRequiredDate" className="requiredDate">Please, fill out this field.</span>
      </div>
      <ReactDayPicker 
        handleChange={handleChange}
        value={pixelFields.endDate}
      />
      <br />
      <br />
      <div className={classes.control}>
        <label htmlFor="description">Brief Description</label>
        <input
          type="text"
          required
          name="briefDescription"
          id="description"
          onChange={handleChange}
          autoComplete="off"
          value={pixelFields.briefDescription}
        />

        <label htmlFor="domains">Domain for Cross-Domain Tracking</label>
        <input
          type="text"
          placeholder=" nba.com"
          id="domains"
          name="crossDomainTracking"
          onChange={handleChange}
          autoComplete="off"
          value={pixelFields.crossDomainTracking}
        />
      </div>
      <div className={classes.actions}>
        <button>Next</button>
      </div>
    </form>
    
  )
  // function submitHandler(event) {
  //   event.preventDefault();

  //   window.location.href = "http://localhost:3000/scope";
  //   // window.open("/scope");
  // }

  // return (
  //   <form  className={classes.form} onSubmit={submitHandler}>
  //     <h1>Request Info</h1>
  //     <div className={classes.control}>
  //       <label htmlFor="client">Requesting Client</label>
  //       <input 
  //         type="text" 
  //         required 
  //         id="client" 
  //         name="requestingClient" 
  //         onChange={handleChange}
  //         value={pixelFields.requestingClient}
  //         autoComplete="off"
  //       />

  //       <label htmlFor="context">Context ID</label>
  //       <input 
  //         type="text" 
  //         required 
  //         id="context" 
  //         name="contextID"
  //         onChange={handleChange}
  //         autoComplete="off"
  //       />

  //       <label htmlFor="ticket">Ticket ID</label>
  //       <input
  //         type="text"
  //         placeholder=" PIX-500"
  //         required
  //         name="ticketID"
  //         id="ticket"
  //         onChange={handleChange}
  //         autoComplete="off"

  //       />
  //       <label>
  //         End Date
  //       </label>
  //       <span id="alertRequiredDate" className="requiredDate">Please, fill out this field.</span>
  //     </div>
  //     <ReactDayPicker 
  //       handleChange={handleChange}
  //     />
  //     <br />
  //     <br />
  //     <div className={classes.control}>
  //       <label htmlFor="description">Brief Description</label>
  //       <input
  //         type="text"
  //         required
  //         name="briefDescription"
  //         id="description"
  //         onChange={handleChange}
  //         autoComplete="off"

  //       />

  //       <label htmlFor="domains">Domain for Cross-Domain Tracking</label>
  //       <input
  //         type="text"
  //         placeholder=" nba.com"
  //         id="domains"
  //         name="crossDomainTracking"
  //         onChange={handleChange}
  //         autoComplete="off"

  //       />
  //     </div>
      // <div className={classes.actions}>
      //   <button>Next</button>
      // </div>
  //   </form>
    
  // );
}

export default InfoPage;
