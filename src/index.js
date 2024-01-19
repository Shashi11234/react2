import React from "react";
import ReactDOM from "react-dom";
import Part from "./Part";
import './index.css';
import array from "./Concept";
ReactDOM.render(
  <>
    <h1>Harry Potter All Series</h1>
    <Part
      img={array[0].img}
      Name={array[0].Name}
      series={array[0].series}
      year={array[0].year}
      collection={array[0].collection}
      star={array[0].star}
    />
    <Part
      img={array[1].img}
      Name={array[1].Name}
      series={array[1].series}
      year={array[1].year}
      collection={array[1].collection}
      star={array[1].star}
    />
    <Part
      img={array[2].img}
      Name={array[2].Name}
      series={array[2].series}
      year={array[2].year}
      collection={array[2].collection}
      star={array[2].star}
    />
    <Part
      img={array[3].img}
      Name={array[3].Name}
      series={array[3].series}
      year={array[3].year}
      collection={array[3].collection}
      star={array[3].star}
    />
    <Part
      img={array[4].img}
      Name={array[4].Name}
      series={array[4].series}
      year={array[4].year}
      collection={array[4].collection}
      star={array[4].star}
    />
    <Part
     img={array[5].img}
      Name={array[5].Name}
      series={array[5].series}
      year={array[5].year}
      collection={array[5].collection}
      star={array[5].star}
    />
    <Part
     img={array[6].img}
      Name={array[6].Name}
      series={array[6].series}
      year={array[6].year}
      collection={array[6].collection}
      star={array[6].star}
    />

    <Part
      img={array[7].img}
      Name={array[7].Name}
      series={array[7].series}
      year={array[7].year}
      collection={array[7].collection}
      star={array[7].star}
    />
  </>,
  document.getElementById("root")
);
