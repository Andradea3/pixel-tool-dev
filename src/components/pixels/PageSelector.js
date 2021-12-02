import React, { Component } from "react";
import Select from "react-dropdown-select";
import classes from "../layout/StandardClasses.module.css";
import Card from "../ui/Card";

const PageOptions = [
  { label: "Remarketing", value: "rmkScope" },
  { label: "Conversion", value: "convScope" },
  { label: "Full Flow", value: "fullScope" },
  { label: "Custom", value: "customScope" },
];

function PageSelector({setVal, watch}) {

  

  //Mientras el usuario no haya escogido ningun page scope checkboxes estarán deshabilitadas

  function setValue (values) {
    const pageScope = values[0].label;
    setVal("pixelPageScope", pageScope)
    console.log(values[0].label);
  };
  
  if (watch("pixelPageScope") === "Remarketing") {
    console.log("something");
  }
  
  return (
    <div>
      <div className={classes.control}>
        <label>Page scope of the pixel: </label>
        <br />
        <Select
          options={PageOptions}
          onChange={(values) => setValue(values)} 
        ></Select>

        <br />
      </div>
      <Card>
        <h3>Pages</h3>
        <div className={classes.control}>
          
          {!watch("pixelPageScope") && (
            <DisabledInputs />
          )}
          
          {watch("pixelPageScope") === "Remarketing" && (
            <RemarketingInputs />
          )}

          {watch("pixelPageScope") === "Conversion" && (
            <ConversionInputs />
          )}
          {watch("pixelPageScope") === "Full Flow" && (
            <FullFlowInputs />
          )}
          {watch("pixelPageScope") === "Custom" && (
            <CustomInputs />
          )}
        </div>
      </Card>
    </div>
  );

  function DisabledInputs() {
    
    return(
      <>
        <label htmlFor="edp">
          <span>EDP</span>
          <input 
          name="edp"  
          id="edp"
          type="checkbox"
          disabled
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            disabled
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            disabled
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            disabled
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
            disabled
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
            disabled
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            disabled
          />
        </label>
      </>
    )
  }
  function RemarketingInputs() {
    return (
      <>
       <label htmlFor="edp">
          <span>EDP</span>
          <input 
          name="edp"  
          id="edp"
          type="checkbox"
          
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            checked
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            checked
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
            
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
            
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            checked
          />
        </label>
        
      </>
    )
  }
  function ConversionInputs() {
    return(
      <>
       <label htmlFor="edp">
          <span>EDP</span>
          <input 
          name="edp"  
          id="edp"
          type="checkbox"
          
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
            
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            checked
          />
        </label>
      </>
    )
  }
  function FullFlowInputs() {
    return (
      <>
        
        <label htmlFor="edp">
          <span>EDP</span>
          <input 
          name="edp"  
          id="edp"
          type="checkbox"
          checked
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            checked
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            checked
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            checked
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
            checked
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
            checked
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            checked
          />
        </label>
      </>
    )
  }
  function CustomInputs() {
    return (
      <>
        
        <label htmlFor="edp">
          <span>EDP</span>
          <input 
          name="edp"  
          id="edp"
          type="checkbox"
          
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
            
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
            
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            
          />
        </label>
      </>
    )
  }
  
}


export default PageSelector;



// {
//   pageScopePixel: {
//     name: "Remarketing",
//     values: ["", "", "", "", ""]
//   }
// }


// pageScopePixel.values.push()