import { PropTypes } from "prop-types";

HtmlTable.propTypes = {
  columnas: PropTypes.array,
  datos: PropTypes.array,
};

/*columnas = [
    {
        texto: "ID",
        campo: "id" 
    },
    {
        texto: "Nombre",
        campo: "name" 
    }
]
datos = [
    {
        id: 1,
        name: "Leanne"
    },
    {
        id: 2,
        name: "Ervin"
    },
]
*/
export default function HtmlTable({ columnas, datos }) {
  return (
    <table>
      <thead>
        <tr>
          {columnas.map((h) => (
            <th key={h.texto}>{h.texto}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((d) => (
          <tr key={d.id}>
            {columnas.map((c, index) => (
              <td key={index}>{d[c.campo]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
