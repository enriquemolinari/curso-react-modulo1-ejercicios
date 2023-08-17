import { useState } from "react";

export default function PruebasEstado() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  function handleClickPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }

  function handleClickBorrarPosts() {
    setPosts([]);
  }
  function handleClickBorrarUsers() {
    setUsers([]);
  }

  function handleClickUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  /* setUsers((previous) => {
    return [...previous, ...json];
  })
*/

  return (
    <>
      <button onClick={handleClickPosts}>Traer Posts</button>
      <button onClick={handleClickBorrarPosts}>Borrar Posts</button>
      <button onClick={handleClickUsers}>Traer Users</button>
      <button onClick={handleClickBorrarUsers}>Borrar Users</button>

      <br />

      {/* table para posts */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* table para users */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/*
      <HtmlTable
        columnas={[
          {
            texto: "ID",
            campo: "id",
          },
          {
            texto: "Titulo del Post",
            campo: "title",
          },
          {
            texto: "Cuerpo del Post",
            campo: "body",
          },
        ]}
        datos={posts}
      />
      */
