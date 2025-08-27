import {useState, useEffect} from 'react';
const Show = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleTimeString('en-US', { 
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card bg-primary text-white h-100">
          <div className="card-body text-center">
            <h5 className="card-title">
              <i className="bi bi-calendar3"></i> Today's Date
            </h5>
            <h3 className="card-text fw-bold">{date}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card bg-success text-white h-100">
          <div className="card-body text-center">
            <h5 className="card-title">
              <i className="bi bi-clock-fill"></i> Current Time
            </h5>
            <h3 className="card-text fw-bold">{time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Show;
