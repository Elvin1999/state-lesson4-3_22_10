import React, { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;
  let item = sculptureList[index];

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }

  function handleShowMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <section>
        {hasPrev && <button onClick={handlePrevClick}>Prev</button>}
        {hasNext && <button onClick={handleNextClick}>Next</button>}
      </section>
      <h2>
        <i>{item.name}</i>
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <section>
        <button onClick={handleShowMoreClick}>
          {showMore ? "Hide" : "Show"}
        </button>
        {showMore && <p>{item.description}</p>}
      </section>
      <img src={item.url} alt={item.alt}></img>
    </div>
  );
}
