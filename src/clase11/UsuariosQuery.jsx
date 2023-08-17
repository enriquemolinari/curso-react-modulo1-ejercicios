//cacheTime: tiempo en el cache es garbage collected (default 5 minutos)
//intenta responder tan rapido como puede, aunque el cache sea invalido te muestra ese
//luego hace el request.
//staleTime: tiempo en el que el cache es invalido
//(default 0, siempre invalido, siempre hace un request)

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function UsuariosQuery() {
  const pageBy = 2;
  const [paginaActual, setPaginaActual] = useState(0);
  const totaPages = 5;

  const query = useQuery({
    queryKey: ["users", paginaActual],
    queryFn: () => {
      let start = paginaActual * pageBy;
      return fetch(
        "https://jsonplaceholder.typicode.com/users?_start=" +
          start +
          "&_limit=" +
          pageBy
      )
        .then((response) => response.json())
        .then((json) => {
          return json;
        });
    },
    //cacheTime: 0,
    //staleTime: 60000, //1 minuto
  });

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
        {query.data?.map((u) => (
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
