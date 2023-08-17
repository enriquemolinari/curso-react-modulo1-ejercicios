import { useEffect, useState } from "react";

export default function UsersPaginacion1() {
  const [users, setUsers] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const cantidadPorPagina = 2;
  const totaPages = 5;

  useEffect(() => {
    //a partir de donde comienzo
    let start = paginaActual * cantidadPorPagina;
    //cuantos usuarios por pagina
    let limit = cantidadPorPagina;

    fetch(
      "https://jsonplaceholder.typicode.com/users?_start=" +
        start +
        "&_limit=" +
        limit
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [paginaActual]);

  function handleClickSiguienteUsers() {
    setPaginaActual((paginaActual) => paginaActual + 1);
  }

  function handleClickAnteriorUsers() {
    setPaginaActual((paginaActual) => paginaActual - 1);
  }

  return (
    <>
      <button disabled={paginaActual === 0} onClick={handleClickAnteriorUsers}>
        {" "}
        &lt; &lt; Anterior
      </button>
      <button
        disabled={paginaActual === totaPages - 1}
        onClick={handleClickSiguienteUsers}
      >
        Siguiente &gt; &gt;
      </button>

      <br />
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
