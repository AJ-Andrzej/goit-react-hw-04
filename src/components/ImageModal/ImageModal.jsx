import Modal from 'react-modal';
import css from './ImageModal.module.css'
Modal.setAppElement('#root');

export default function ImageModal({isModalOpen, image, onCloseModal}) {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onCloseModal}
            shouldCloseOnEsc={true}
            schouldCloseOnOverlayClick={true}
            contentLabel="Example Modal"
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {isModalOpen && (<div className={css.content}>
                <img
                    src={image.urls.regular}
                    alt={image.urls.description} />
            </div>)}
      </Modal>
    )
}