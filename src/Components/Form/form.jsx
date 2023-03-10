import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [record, setRecord] = useState("");
  const [showError, setShowError] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleRecord = (e) => {
    setRecord(e.target.value);
  };

  const regex = /^\s/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = name.length < 3 || regex.test(name) || record.length < 6;
    setShowError(hasError);
    setSubmitCard(!hasError);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={handleName}
          placeholder="Ingresa tu nombre aqui"
        />
        <label>Disco</label>
        <input
          type="text"
          name="disco"
          onChange={handleRecord}
          placeholder="Ingresa tu disco favorito aqui"
        />
        <button type="submit">Enviar</button>
      </form>

      {showError && (
        <div className="error">
          Por favor, chequea que toda la información sea correcta: tu nombre
          debe tener al menos 3 caracteres y no contener espacios; y el disco un
          minimo de 6 caracteres.
        </div>
      )}

      {submitCard && <Card name={name} record={record} />}
    </div>
  );
};

export default Form;
