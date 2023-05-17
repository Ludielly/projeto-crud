import { useState } from "react";
import FormInput from "./FormInput";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ onClose, registeredUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registeredUser({
      name,
      email,
      phone,
      image,
    });
    onClose();
  };

  return (
    <section className="bg-gray-800/20 w-screen left-0 top-0 h-screen absolute z-50">
      <div className="absolute top-1/2 left-1/2 -ml-40 -mt-36 shadow-2xl shadow-black-500 bg-gray-200 w-96 rounded-xl p-4 hover:">
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={handleSubmit}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            className="absolute top-2 right-3 text-red-700 cursor-pointer hover:text-red-900 ease-in-out duration-200"
            onClick={onClose}
          />
          <h2 className="font-bold tracking-wide">Adicionar Usuário</h2>
          <FormInput
            label="Nome"
            placeholder="Digite seu nome completo"
            inputValue={name}
            handleChange={(inputValue) => setName(inputValue)}
            required={true}
          />
          <FormInput
            label="E-mail"
            placeholder="Digite seu e-mail: exemplo@gmail.com"
            inputValue={email}
            handleChange={(inputValue) => setEmail(inputValue)}
            required={true}
          />
          <FormInput
            label="Telefone"
            placeholder="Digite seu telefone com DDD"
            inputValue={phone}
            handleChange={(inputValue) => setPhone(inputValue)}
            required={true}
          />
          <FormInput
            label="Image"
            placeholder="Insira o endereço da imagem"
            inputValue={image}
            handleChange={(inputValue) => setImage(inputValue)}
          />
          <div className="flex justify-center gap-2 w-full mt-2">
            <button
              className="border border-red-600 rounded text-red-600 hover:text-red-900 hover:bg-red-500 ease-in-out duration-300 py-1 px-2"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="text-green-900 bg-green-400 hover:text-green-700 hover:bg-green-300 rounded py-1 px-6 font-bold tracking-wide ease-in-out duration-300"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
