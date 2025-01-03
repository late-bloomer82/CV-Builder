import trashIcon from "../../assets/delete.svg";

function ResumeOptions({ clearAll, loadAll }) {
  return (
    <div className="resume-options">
      <button id="trash-button" onClick={clearAll}>
        <img src={trashIcon} className="delete-icon" alt="" />
        Clear Resume
      </button>
      <button id="load-button" onClick={loadAll}>
        Load Example
      </button>
    </div>
  );
}

export default ResumeOptions;
