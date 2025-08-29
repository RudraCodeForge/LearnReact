const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="mt-3">
          <h5 className="text-muted">Loading posts...</h5>
        </div>
      </div>
    </div>
  );
};

export default Spinner;