import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultUser from "../default-user.png";

const User = ({
  index,
  id,
  name,
  email,
  phone,
  image,
  openModalEdit,
  onHandleDeleteUser,
}) => {
  const onImageError = (e) => {
    e.target.src = defaultUser;
  };

  return (
    <div className="w-52">
      <div className="bg-light-brown rounded-t">
        <img
          src={image}
          alt={name}
          onError={onImageError}
          className="w-17 rounded-full relative -bottom-9 left-17 bg-slate-200"
        />
      </div>
      <div className="bg-zinc-100	 shadow-2xl shadow-black-500 pt-10 pb-3 rounded-b flex flex-col items-center">
        <span className="font-bold mb-1">{name}</span>
        <span className="px-1 pb-1 ">{email}</span>
        <span className="px-1 pb-1">{phone}</span>
        <div className="flex gap-2 mt-2">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="cursor-pointer hover:opacity-70"
            onClick={() => openModalEdit(index)}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer hover:text-red-900 text-red-700"
            onClick={() => onHandleDeleteUser(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
