import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
    console.log('object');
  };
  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
