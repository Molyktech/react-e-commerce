import React, { Component } from "react";
import "./Directory.scss";
import { SECTIONS } from "./directory.data";
import { MenuItem } from "../menu-item/MenuItem";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
        })}
      </div>
    );
  }
}
