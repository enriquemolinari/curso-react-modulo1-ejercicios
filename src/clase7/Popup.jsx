import PropTypes from "prop-types";

Popup.propTypes = {
  mensaje: PropTypes.string,
  msgButton: PropTypes.string,
};

export default function Popup({ mensaje, msgButton = "Click Aquí" }) {
  function handleClick() {
    window.alert(mensaje);
  }

  return <button onClick={handleClick}>{msgButton}</button>;
}
