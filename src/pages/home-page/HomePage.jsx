import React from "react";
import Directory from "../../components/directory/Directory";
import "./HomePage.scss";

export const HomePage = ({ history }) => {
  console.log(history);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
