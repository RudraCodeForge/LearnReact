const Show = () => {
  const FullDate = new Date();
  let date =FullDate.toLocaleDateString() ;
  let time =FullDate.toLocaleTimeString()
  console.log("Today date is :-", date);
  return (
    <h3>
      Today date is: {date} and time is: {time}
    </h3>
  );
};
export default Show;
