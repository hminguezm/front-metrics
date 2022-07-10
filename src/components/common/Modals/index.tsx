import {FC, useState} from 'react';
import c from 'classnames';

// @ts-ignore
import alertIcon from '../../../assets/images/icons/alert-circle.svg';
// @ts-ignore
import closeIcon from '../../../assets/images/icons/close.svg';

// @ts-ignore
import styles from './Modal.module.scss';

interface ModalProps {
  type?: string;
  text: string;
  canClose?: boolean;
}

const Modal: FC<ModalProps> = ({ type = 'alert', text, canClose = false }) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div
      className={c(
        styles.container,
        styles[type],
        showModal ? styles.show : styles.hidden,
      )}
    >
      <div className={styles.block}>
        <img src={alertIcon} alt="alert" />
        <div className={styles.bar} />
        <span>{text}</span>
      </div>
      {canClose && (
        <button
          type="button"
          onClick={() => {
            setShowModal(false);
          }}
          className={styles.button}
        >
          <img src={closeIcon} alt="close" />
        </button>
      )}
    </div>
  );
};

export default Modal;
