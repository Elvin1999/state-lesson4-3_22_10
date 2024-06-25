import React, { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    name: "Tom Hardy",
    artwork: {
      title: "Revenant",
      city: "California",
      image: "https://cdn.mos.cms.futurecdn.net/s8snsQgZ99t2FogpoWyuhR.jpg",
    },
  });
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  return (
    <div>
      <section>
        <label>
          Name : <input value={person.name} onChange={handleNameChange} />
        </label>
      </section>
      <section>
        <label>
          Title :{" "}
          <input value={person.artwork.title} onChange={handleTitleChange} />
        </label>
      </section>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        located in {person.artwork.city}
      </p>
      <img src={person.artwork.image} alt={person.artwork.title}></img>
    </div>
  );
}
