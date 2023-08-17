import { useEffect, useState } from "react";

export default function UsersPaginacion2() {
  const [users, setUsers] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const cantidadPorPagina = 2;
  const totaPages = 5;

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users?_start=0&_limit=" +
        cantidadPorPagina
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  function handleClickSiguienteUsers() {
    //porque de esta forma no funciona?
    //React no actualiza el estado ni bien cambia,
    //lo hace luego de que el handle haya terminado de ejecutar
    //para acumular varios cambios y realizar todos juntos

    /*setPaginaActual((paginaActual) => paginaActual + 1);
    getUsers(paginaActual);*/

    setPaginaActual((paginaActual) => {
      paginaActual += 1;
      getUsers(paginaActual);
      return paginaActual;
    });
  }

  function getUsers(pagina) {
    //a partir de donde comienzo
    let start = pagina * cantidadPorPagina;
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
  }

  function handleClickAnteriorUsers() {
    setPaginaActual((paginaActual) => {
      paginaActual -= 1;
      getUsers(paginaActual);
      return paginaActual;
    });
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
