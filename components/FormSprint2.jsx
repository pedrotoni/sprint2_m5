import { useState } from "react";
import FirstStep from "../components/FirstStep.jsx";
import SecondStep from "../components/SecondStep.jsx";
import ThirdStep from "../components/ThirdStep.jsx";

function Form({ handleFormSubmit }) {
  const [step, setStep] = useState(0);
  const titles = [
    "Preencha suas informações nos campos abaixo!",
    "Você está quase lá...",
    "Só mais essas! Prometo! :)",
  ];

  const dataObject = {
    name: "",
    surname: "",
    email: "",
    telephone: "",
    cep: "",
    address1: "",
    address2: "",
    dateOfBirth: "",
    cpf: "",
    monthlyIncome: 0,
  };

  const [formData, setFormData] = useState(dataObject);

  return (
    <div className="form">
      <h4>{titles[step]}</h4>

      <div className="form-body">
        {step === 0 && (
          <FirstStep formData={formData} setFormData={setFormData} />
        )}
        {step === 1 && (
          <SecondStep formData={formData} setFormData={setFormData} />
        )}
        {step === 2 && (
          <ThirdStep formData={formData} setFormData={setFormData} />
        )}
      </div>

      {step != titles.length - 1 ? (
        <button onClick={() => setStep(step + 1)}>Próximo</button>
      ) : (
        <button onClick={() => {
          handleFormSubmit(formData)}}>Enviar</button>
      )}
    </div>
  );
}

export default Form;
