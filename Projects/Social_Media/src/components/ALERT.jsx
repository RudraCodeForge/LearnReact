const ALERT = ({ name, body, type = "warning", onClose }) => {
  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      <strong>{name}:</strong> {body}
      {onClose && (
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      )}
    </div>
  );
};
export default ALERT;