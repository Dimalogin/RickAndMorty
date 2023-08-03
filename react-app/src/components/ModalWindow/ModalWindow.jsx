import "./ModalWindow.scss";

const ModalWindow = (props) => {
  const { closeModalWindow, data } = props;

  return (
    <div className="modal-window">
      <div className="modal-window__body">
        <button className="modal-window__close-btn" onClick={closeModalWindow}>
          &#10006;
        </button>
        <div className="modal-window__image">
          <img src={data.image} alt="modal-icon" />
        </div>
        <div className="modal-window__info info-modal">
          <div className="info-modal__column">
            <div className="info-modal__name name-info-modal">
              <div className="name-info-modal__title">Name:</div>
              <div className="name-info-modal__subtitle">{data.name}</div>
            </div>
            <div className="info-modal__status status-info-modal">
              <div className="status-info-modal__title">Status:</div>
              <div className="status-info-modal__subtitle">{data.status}</div>
            </div>
            <div className="info-modal__species species-info-modal">
              <div className="species-info-modal__title">Species:</div>
              <div className="species-info-modal__subtitle">{data.species}</div>
            </div>
          </div>
          <div className="info-modal__column">
            <div className="info-modal__origin origin-info-modal">
              <div className="origin-info-modal__title">Origin:</div>
              <div className="origin-info-modal__subtitle">
                {data.origin.name}
              </div>
            </div>
            <div className="info-modal__location location-info-modal">
              <div className="location-info-modal__title">Location:</div>
              <div className="location-info-modal__subtitle">
                {data.location.name}
              </div>
            </div>
            <div className="info-modal__gender gender-info-modal">
              <div className="gender-info-modal__title">Gender:</div>
              <div className="gender-info-modal__subtitle">{data.gender}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
