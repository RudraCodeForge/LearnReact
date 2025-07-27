import {useState} from 'react';
const Show = () => {
  const FullDate = new Date();
  let date = FullDate.toLocaleDateString();
  let time = FullDate.toLocaleTimeString('en-US', { 
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const [ctime, setCtime] = useState(time);
  return (
    <h3>
      Today date is: {date} and time is: {ctime}
    </h3>
  );
};
export default Show;
