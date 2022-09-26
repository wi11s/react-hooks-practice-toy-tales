import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {



  return (
    <div id="toy-collection">{
      toys.map(toy => {
        return (
          <ToyCard key={toy.name} toy={toy}/>
        )
      })
      }</div>
  );
}

export default ToyContainer;
