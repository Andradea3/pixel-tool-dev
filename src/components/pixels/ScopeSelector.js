import React, {Component, useRef} from "react";
import Select from "react-dropdown-select";

import classes from "../layout/StandardClasses.module.css";

const ScopeOptions = [
  {label: "Context", value: "contextScope"},
  {label: "Event", value: "eventScope"}
];

class PixelDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const setting = event.target.value
    console.log({setting});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
  }
  
  setValue = value => {
    this.setState(prevState => ({
      select: {
        ...prevState.select,
        value
      }
    }));
    console.log(value)
  };

  render() {

    return (
      <div className={classes.control}>
        <div>
          <label>Business scope of the pixel:</label>
          <br />
          <Select options={ScopeOptions} value={this.state.value} onChange={(values) => this.setValue(values)} >
          </Select>
          <br />
        </div>
        {/* <input type="submit" value="Submit" /> */}
        this is supposed to be where?
      </div>
    );
  }
}

export default PixelDropdown;
