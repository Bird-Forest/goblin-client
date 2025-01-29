import React from "react";
import cl from "./overlay.module.scss";
import { FaXmark } from "react-icons/fa6";

export default function Overlay({ closeModal, content }) {
  return (
    <div className={cl.overlay}>
      {/* <div className={cl.wrapContent}> */}
      {/* <button className={cl.btnClose} onClick={closeModal}>
        <FaXmark />
      </button> */}
      {content}
      {/* <div className={cl.content}>{content}</div> */}
      {/* </div> */}
    </div>
  );
}

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
