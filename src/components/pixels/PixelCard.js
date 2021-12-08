import React, { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "../layout/StandardClasses.module.css";


export default function Row({ onChange, register, unregister, watch}) {

  const [cards, setCards] = useState([{ id: 0, text: "" }]);


  const handleOnAdd = (index) => {

    console.log();

    if (watch(`Pixel ${index}.id`)=== "") {
      console.log("funcion");
      return;
    }

    setCards([...cards, { id: cards.length, text: "" }]);

  };

  const handleOnRemove = (index) => {
    const copyRows = [...cards];
    copyRows.splice(index, 1);
    setCards(copyRows);
  };

  const isEmpty = (obj) => {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  return (
    <>
      <>
        <div>
          {cards.map((card, index) => (
            <Card
            {...card}
              key={index}
              index={index}
              register={register}
              unregister={unregister}
            >
            {
              index > 0 && (
                <button
                  type="button"
                  className={classes.btnDelete}
                  onClick={() => {
                    handleOnRemove(index)
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
                    {...register(`Pixel ${index + 1}.type`, { required: true })}
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
                //----------------------------------
                //value={card.text}
                //onChange={handleChange(card.id)}
                {...register(`Pixel ${index + 1}.id`, { required: true })}
              />
    
    
            </div> <br />
          </Card>
            //---------------------------------------

          ))}
          
          <div className={classes.actions}>
            <button
              type="button"
              onClick={()=>{
                handleOnAdd((cards.length))
              }}
            >+</button>

          </div>
        </div>
      </>
      <br></br>
    </>
  );
}
