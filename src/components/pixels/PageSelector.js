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

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.isChecked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
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
      <div>
        <div className={classes.control}>
          <label>Page scope of the pixel: </label>
          <br />
          <Select
            options={PageOptions}
           // value={this.state.value}
            onChange={(values) => this.setValue(values)} 
          ></Select>

          <br />
          {/* <input type="submit" value="Submit" /> */}
        </div>
        <Card>
          <h3>Pages</h3>
          <div className={classes.control}>
            EDP:
            <input
              name="edp"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
            <br />
            Select Tickets:
            <input
              name="selecttickets"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
            <br />
            Method of Delivery:
            <input
              name="mod"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
            <br />
            Sign In:
            <input
              name="signin"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
            <br />
            Enter Payment:
            <input
              name="payment"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
            <br />
            Verify Purchase:
            <input
              name="verify"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
            <br />
            Confirmation
            <input
              name="confirmation"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default PageSelector;
