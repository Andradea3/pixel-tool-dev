import React, { Component, useEffect } from "react";
import Select from "react-dropdown-select";
import classes from "../layout/StandardClasses.module.css";
import Card from "../ui/Card";

const PageOptions = [
  { label: "Remarketing", value: "rmkScope" },
  { label: "Conversion", value: "convScope" },
  { label: "Full Flow", value: "fullScope" },
  { label: "Custom", value: "customScope" },
];

function PageSelector({setVal, watch, validateCheckBoxes}) {

  function setValue (values) {
    const pageScope = values[0].label;
    setVal("pixelPageScope", pageScope)
  };

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
        <div className={classes.control} onClick={validateCheckBoxes}>
          
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
          disabled
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            checked
            readOnly
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            checked
            readOnly
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
            checked
            readOnly
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
            checked
            readOnly
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
          readOnly
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            checked
            readOnly
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            checked
            readOnly
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            checked
            readOnly
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
            checked
            readOnly
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
            checked
            readOnly
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            checked
            readOnly
          />
        </label>
      </>
    )
  }
  function CustomInputs() {

    //Convert watch() to arr
    // !TODO conditionally render defaultChecked elements
    const currentPagesToFire = watch("Pages") ;
    if (currentPagesToFire !== undefined) {
      
      var currentDataArr = Array.from(currentPagesToFire);
      
    }

    return (
      <>
        
        <label htmlFor="edp">
          <span>EDP</span>
          <input 
          name="edp"  
          id="edp"
          type="checkbox" 
         defaultChecked={currentPagesToFire ? currentDataArr.includes("EDP") : false}
        />
        </label>
        <label htmlFor="selectTickets">
          <span>Select Tickets</span>
          <input 
            name="selectTickets"  
            type="checkbox"
            id="selectTickets"
            defaultChecked={currentPagesToFire ? currentDataArr.includes("Select Tickets") : false}
          />
        </label>
        
        <label htmlFor="mod">
          <span>Method of Delivery</span>
          <input
            name="mod"
            type="checkbox"
            id="mod"
            defaultChecked={currentPagesToFire ? currentDataArr.includes("Method of Delivery") : false}
          />
        </label>

        <label htmlFor="signin">
          <span>Sign In</span>
          <input
            name="signin"
            type="checkbox"
            id="signin"
            defaultChecked={currentPagesToFire ? currentDataArr.includes("Sign In") : false}
          />
        </label>
        
        <label htmlFor="payment">
          <span>Enter Payment</span>
          <input
            name="payment"
            type="checkbox"
            id="payment"
           defaultChecked={currentPagesToFire ? currentDataArr.includes("Enter Payment") : false}
          />
        </label>
        
        <label htmlFor="verify">
          <span>Verify Purchase</span>
          <input
            name="verify"
            id="verify"
            type="checkbox"
            defaultChecked={currentPagesToFire ? currentDataArr.includes("Verify Purchase") : false}
          />
        </label>
        
        <label htmlFor="confirmation">
          <span>Confirmation</span>
          <input
            name="confirmation"
            type="checkbox"
            id="confimation"
            defaultChecked={currentPagesToFire ? currentDataArr.includes("Confirmation") : false}
          />
        </label>
      </>
    )
  }
  
}


export default PageSelector;
