import React, { useState } from "react";

export default function Form() {
  const [message, setMessage] = useState("Hello");
  const [to, setTo] = useState("Alice");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`From ${to} Message is ${message}`);
    }, 2000);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Current message {message}</h1>
        <h1>Message {to}</h1>
        <section>
          <label>
            To :
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
              <option value="John">John</option>
            </select>
          </label>
        </section>

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <section>
          <button type="submit">Send</button>
        </section>
      </form>
    </div>
  );
}
