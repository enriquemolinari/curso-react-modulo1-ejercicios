// https://jsonplaceholder.typicode.com/guide/
// Creating a Resource

import { useState } from "react";
import "./form.css";

export default function PostForm() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: form.title,
        body: form.body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Título: </label>
      <input
        type="text"
        id="title"
        name="title"
        size="64"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="body">Artículo: </label>
      <textarea
        id="body"
        name="body"
        rows="4"
        cols="50"
        onChange={handleChange}
      />
      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>
  );
}
