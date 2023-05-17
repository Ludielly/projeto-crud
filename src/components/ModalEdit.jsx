import { useState } from "react";
import FormInput from "./FormInput";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalEdit = ({ onClose, userEdit }) => {
  const [newName, setNewName] = useState(userEdit.name);
  const [newEmail, setNewEmail] = useState(userEdit.email);
  const [newPhone, setNewPhone] = useState(userEdit.phone);
  const [newImage, setNewImage] = useState(userEdit.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    userEdit.name = newName;
    userEdit.email = newEmail;
    userEdit.phone = newPhone;
    userEdit.image = newImage;
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
          <h2 className="font-bold tracking-wide">Editar Usuário</h2>
          <FormInput
            label="Nome"
            placeholder="Digite seu nome completo"
            handleChange={(inputValue) => setNewName(inputValue)}
            inputValue={newName}
          />
          <FormInput
            label="E-mail"
            placeholder="Digite seu e-mail: exemplo@gmail.com"
            handleChange={(inputValue) => setNewEmail(inputValue)}
            inputValue={newEmail}
          />
          <FormInput
            label="Telefone"
            placeholder="Digite seu telefone com DDD"
            handleChange={(inputValue) => setNewPhone(inputValue)}
            inputValue={newPhone}
          />
          <FormInput
            label="Image"
            placeholder="Insira o endereço da imagem"
            handleChange={(inputValue) => setNewImage(inputValue)}
            inputValue={newImage}
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

export default ModalEdit;
