import "./NoSearch.css";

const NoSearch = ({ showModalBool, setShowModalBool }) => {
  return showModalBool ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">Please input a search</div>
        <div className="modal-footer">
          <button onClick={() => setShowModalBool(false)} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NoSearch;
