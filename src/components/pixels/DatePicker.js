import React, { useRef, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default function ReactDayPicker({setValue, setError, watch}) {
  function handleChange(dateObject) {
      const formattedDate = `${dateObject.getFullYear()}-${dateObject.getMonth() + 1}-${dateObject.getDate()}`;
      setValue("endDate", formattedDate);
  }
  return (
    <>
      <DayPickerInput 
        onDayChange={handleChange}
        onBlur={() => {console.log("blurred?")}}
        inputProps={
          {
            readOnly: true,
            name: "endDate",
            autoComplete: "off",
          } 
        }
      />
    </>
  )
}
