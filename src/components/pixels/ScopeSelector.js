import React, {Component, useRef} from "react";
import Select from "react-dropdown-select";

import classes from "../layout/StandardClasses.module.css";

const ScopeOptions = [
  {label: "Context", value: "contextScope"},
  {label: "Event", value: "eventScope"}
];

function PixelDropdown({setValue, resetField, watch, unregister}) {
  
  function handleChange(newInput) {
    const currentScope = watch("scope");
    const newScope = newInput[0].label;
    
    if (currentScope === "Event" && newScope === "Context") {
      unregister("ticketingEvents");
    }
    setValue("scope", newScope);
  };

  return (
    <div className={classes.control}>
      <div>
        <label>Business scope of the pixel:</label>
        <br />
        <Select options={ScopeOptions} onChange={handleChange} placeholder="Pick a scope..." >
        </Select>
        <br />
      </div>
    </div>
  );
  
}

export default PixelDropdown;