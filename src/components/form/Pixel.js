import classes from "../layout/StandardClasses.module.css";
import PixelCard from "../pixels/PixelCard";

function PixelPage() {

  return (
    <>
      <h1>Pixels to be Placed</h1>
       <PixelCard />
       <br />
       <div className={classes.actions}>
         <button>+</button>
       </div>
       {/* <div className={classes.actions}>
         <Link to="/pages">
           <button>Back</button>
         </Link>
         <button>Preview</button>
       </div> */}
    </>
  );

  // return (
  //   <form>
  //     <h1>Pixels to be Placed</h1>
  //     <PixelCard />
  //     <br />
  //     <div className={classes.actions}>
  //       <button onClick={console.log("click +")}>+</button>
  //     </div>
  //     <div className={classes.actions}>
  //       <Link to="/pages">
  //         <button onClick={console.log("back")}>Back</button>
  //       </Link>
  //       <button onClick={console.log("click preview")}>Preview</button>
  //     </div>
  //   </form>
  // );
}

export default PixelPage;
