import React from "react";
import cl from "./overlay.module.scss";
// import { FaTimes } from "react-icons/fa";
// import { BsX } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

export default function Overlay({ closeModal, content }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  //   document.body.classList.add("modal-open");
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  //   document.body.classList.remove("modal-open");
  // };

  //  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  //   document.body.classList.add('modal-open');
  // };
  return (
    <div className={cl.overlay}>
      <div className={cl.wrapContent}>
        <button className={cl.btnClose} onClick={closeModal}>
          <FaXmark />
        </button>
        <div className={cl.content}>{content}</div>
      </div>
    </div>
  );
}
