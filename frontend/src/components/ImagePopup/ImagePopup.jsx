import './ImagePopup.css';

const ImagePopup = ({
  title,
  image,
  isOpen,
  index,
  cardsLength,
  onClose,
  onNext,
  onPrevious,
}) => {
  const handleCloseModalByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup` + (isOpen ? ' popup_opened' : '')}
      onClick={handleCloseModalByOverlay}
    >
      <div className='popup__container-image'>
        <button
          className='popup__closed'
          type='button'
          onClick={onClose}
        ></button>
        <button
          className='popup__image-switch-btx popup__image-switch-btx_type_prev'
          onClick={onPrevious}
        ></button>
        <button
          className='popup__image-switch-btx popup__image-switch-btx_type_next'
          onClick={onNext}
        ></button>

        <div className='popup__image-container'>
          <img
            className='popup__image'
            src={`http://localhost:8055/assets/${image}`}
            alt={title}
          />
          <div className='popup__image-text-container'>
            <p className='popup__text'>{title}</p>
            <p className='popup__image-length'>{`${
              index + 1
            }/${cardsLength}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImagePopup };
