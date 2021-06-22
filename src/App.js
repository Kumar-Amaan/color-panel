// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  var colors = [
    {
      value: 1,
      label: "blue",
    },
    {
      value: 2,
      label: "red",
    },
    {
      value: 3,
      label: "black",
    },
    {
      value: 4,
      label: "#0000ff",
    },
    {
      value: 5,
      label: "#36F01F ",
    },
    {
      value: 6,
      label: "#FFA07A",
    },
    {
      value: 7,
      label: "#E9967A",
    },
    {
      value: 8,
      label: "#FA8072",
    },
    {
      value: 9,
      label: "#F08080",
    },
    {
      value: 10,
      label: "#CD5C5C",
    },
  ];
  var [setbgcolor, bgcolor] = useState(colors.label);

  var handle = (e) => {
    bgcolor(e.label);
  };
  return (
    <>
      <div className="left">
        <div className="textbox">
          <label>Select HEXCODE :🖌️</label>
        </div>
        <Select className="select" options={colors} onChange={handle}></Select>
      </div>
      <div className="right">
        <style>{".right {background-color:" + setbgcolor + "}"}</style>
        <center>
          <b className="txtcolor">The bgColor id: {setbgcolor}</b>
        </center>
      </div>
    </>
  );
}

export default App;
