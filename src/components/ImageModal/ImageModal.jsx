import style from "./ImageModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function ImageModal({ isOpen, onClose, selectedImage }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.modalContainer}
      overlayClassName={style.modalOverlay}
      bodyOpenClassName={style.bodyModalIsOpen}
    >
      {selectedImage && (
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </ReactModal>
  );
}

export default ImageModal;
