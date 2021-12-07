import React, { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "../layout/StandardClasses.module.css";

const defaultState = {
  pixelID: ""
};

function Row({ onChange, onRemove, register, index, unregister}) {

  
  return (
    <>
      <Card>
          {
            index > 0 && (
              <button 
                type="button" 
                className={classes.btnDelete}
                onClick={() => {
                  onRemove();
                  unregister(`Pixel ${index + 1}`);
                }}
              ><i className="fas fa-times"></i></button>
            )
          }
        <div>
          <div className={classes.control}>
         
            <label>
              Type of pixel:
              <select 
                {...register(`Pixel ${index+1}.type`, { required: true})}
              >
                {/*}<option value=""></option> {*/}
                <option value="facebook">Facebook</option>
                <option value="googleads">Google Ads</option>
                <option value="ga">Google Analytics</option>
                <option value="tiktok">TikTok</option>
              </select>
              <br />
            </label>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="pixelid">Pixel ID</label>
        </div>

        <div className={classes.control}>
          <input
            type="text"
            id="pixelid"
            onChange={(e) => onChange("pixelID", e.target.value)}
            {...register(`Pixel ${index + 1}.id`, { required: true})}
          />
         

        </div> <br />
      </Card>
      <br></br>
    </>
  );
}

export default function PixelCard({register, unregister, formErrors}) {
  const [rows, setRows] = useState([defaultState]);


  const handleOnAdd = () => {
    // setRows(rows.concat(defaultState));
    setRows(prevRows => [...prevRows, defaultState])
    
  };

  const handleOnRemove = (index) => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);

  };
  const isEmpty = (obj) => {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }
  

  return (
    <>
      <div>
        {rows.map((row, index) => (
          <Row
            {...row}
            onRemove={() => handleOnRemove(index)}
            key={index}
            index={index}
            register={register}
            unregister={unregister}
          />
        ))}
        
        <div className={classes.actions}>
          <button 
          type="button"
          onClick={handleOnAdd}
          >+</button>

        </div>
      </div>
    </>
  );
}











