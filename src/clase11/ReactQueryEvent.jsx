import { useQuery } from "@tanstack/react-query";

export default function ReactQueryEvent() {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          return json;
        });
    },
    enabled: false,
  });

  function execute() {
    query.refetch();
  }

  return (
    <>
      <button onClick={execute}>Ejecutar !</button>
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
