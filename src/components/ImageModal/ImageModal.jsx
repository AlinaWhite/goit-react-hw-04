import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoClose } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { RemoveScroll } from "react-remove-scroll";

Modal.setAppElement("#root");

const ImageModal = ({ isOpenModal, onClose, modalContent }) => {
  const getRandomCommentsNum = () => {
    return Math.floor(Math.random() * 1200);
  };
  return (
    <RemoveScroll enabled={isOpenModal}>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={{
          base: css.modalOverlay,
          afterOpen: css.modalOverlayOpen,
          beforeClose: css.modalOverlayClose,
        }}
        contentLabel={modalContent?.alt_description}
        closeTimeoutMS={350}
      >
        <button type="button" className={css.modalBtn} onClick={onClose}>
          <IoClose color={"#fff"} size={"1.5rem"} title="Close" />
        </button>
        <img
          src={modalContent?.urls?.regular}
          alt={modalContent?.alt_description}
        />
        <div className={css.imageStats} tabIndex={1}>
          <span>
            <FcLike />
            {modalContent?.likes}
          </span>
          <span>
            <FaComments />
            {getRandomCommentsNum()}
          </span>
          <span>
            <BsFillImageFill />
            {modalContent?.alt_description}
          </span>
        </div>
      </Modal>
    </RemoveScroll>
  );
};

export default ImageModal;
