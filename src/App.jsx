import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ModalEdit from "./components/ModalEdit";
import User from "./components/User";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [userEdit, setUserEdit] = useState({});
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "lud",
      email: "lud@gmail.com",
      phone: 987456321,
      image: "https://github.com/Ludielly.png",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = users.slice(firstIndex, lastIndex);
  const [totalPages, setTotalPages] = useState(1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const isPrevPageDisabled = currentPage === 1;
  const isNextPageDisabled = lastIndex >= users.length;

  const openModal = () => {
    setShowModal(true);
  };

  const openModalEdit = (index) => {
    setUserEdit(currentUsers[index]);
    setShowModalEdit(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalEdit = () => {
    setShowModalEdit(false);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    const newTotalPages = Math.ceil(users.length / usersPerPage);
    setTotalPages(newTotalPages);
  }, [users]);

  return (
    <>
      <div className="w-screen h-screen font-cairo">
        {showModal && (
          <Modal
            onClose={closeModal}
            registeredUser={(user) => handleAddUser(user)}
            users={users}
          />
        )}

        {showModalEdit && (
          <ModalEdit
            userEdit={userEdit}
            onClose={closeModalEdit}
            users={users}
          />
        )}

        <div className="flex flex-col border border-b-2 justify-center items-center w-full h-full">
          <div className="flex gap-20">
            <div
              className="flex items-center justify-center hover:opacity-70 cursor-pointer"
              onClick={() => openModal()}
            >
              <h1 className="text-center p-2 font-bold tracking-wide text-xl ">
                Usuários
              </h1>
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <input
              className="border border-slate-400 rounded w-full px-1 my-1 tracking-wide"
              placeholder="Filtrar email"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="bg-brown w-1200 h-5/6 rounded-xl flex gap-x-6 flex-wrap items-center justify-center">
            {currentUsers
              .filter((user) => {
                return search.toLowerCase() === ""
                  ? user
                  : user.email.toLocaleLowerCase().includes(search);
              })
              .map(({ id, name, email, phone, image }, index) => (
                <User
                  key={id}
                  index={index}
                  id={id}
                  name={name}
                  email={email}
                  phone={phone}
                  image={image}
                  users={users}
                  onHandleDeleteUser={handleDeleteUser}
                  openModalEdit={openModalEdit}
                />
              ))}
          </div>
          <div className="flex gap-9 py-5">
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="xl"
              className={`cursor-pointer ${
                isPrevPageDisabled
                  ? "opacity-30"
                  : "opacity-100 hover:opacity-70"
              }`}
              onClick={handlePrevPage}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              size="xl"
              className={`cursor-pointer ${
                isNextPageDisabled
                  ? "opacity-30"
                  : "opacity-100 hover:opacity-70"
              }`}
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
