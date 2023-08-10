import { PropTypes } from "prop-types";

Curso.propTypes = {
  nombreCurso: PropTypes.string,
  estudiantes: PropTypes.array,
};

export default function Curso({ nombreCurso, estudiantes }) {
  return (
    <>
      <p>{nombreCurso}</p>
      <ul>
        {estudiantes.map((e) => (
          <li key={e.id}>{e.nombre}</li>
        ))}
      </ul>
    </>
  );
}
