import React, { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "../layout/StandardClasses.module.css";

class PixelCard extends React.Component {
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
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log();
  }
  render() {
    return (
      <Card>
        <div className={classes.control}>
          <label>
            Type of pixel:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value=""></option>
              <option value="facebook">Facebook</option>
              <option value="googleads">Google Ads</option>
              <option value="ga">Google Analytics</option>
              <option value="tiktok">TikTok</option>
            </select>
            <br />
            <div className={classes.control}>
              <label htmlFor="pixelid">Pixel ID</label>
              <input type="text" required id="pixelid" />
            </div>
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </div>
      </Card>
    );
  }
}

export default PixelCard;
