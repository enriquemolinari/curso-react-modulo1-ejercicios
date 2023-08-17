import { useEffect, useState } from "react";

export default function PruebasEstado2() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  //el callback se ejecuta siempre despues de renderizar
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  function handleClickBorrarPosts() {
    setPosts([]);
  }
  function handleClickBorrarUsers() {
    setUsers([]);
  }

  return (
    <>
      <button onClick={handleClickBorrarPosts}>Borrar Posts</button>
      <button onClick={handleClickBorrarUsers}>Borrar Users</button>

      <br />

      <table>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {posts.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.body}</td>
          </tr>
        ))}
      </table>

      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
