import "./table.css";

export default function Personas() {
  const personas = [
    {
      id: 1,
      nombre: "Jorge",
      apellido: "echeverry",
      telefono: "265987",
      direccion: "San Martin 123",
    },
    {
      id: 2,
      nombre: "Julio",
      apellido: "Guevara",
      telefono: "69848",
      direccion: "Colon 3223",
    },
    {
      id: 3,
      nombre: "Jazmin",
      apellido: "Consi",
      telefono: "3658745",
      direccion: "Italia 188",
    },
    {
      id: 4,
      nombre: "Jazmin",
      apellido: "Consi",
      telefono: "3658745",
      direccion: "Italia 188",
    },
  ];

  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
      </tr>
      {personas.map((p, index) => (
        <tr
          className={index % 2 === 0 ? "coloreada" : "no-coloreada"}
          key={p.id}
        >
          <td>{p.nombre}</td>
          <td>{p.apellido}</td>
          <td>{p.telefono}</td>
          <td>{p.direccion}</td>
        </tr>
      ))}
    </table>
  );
}
