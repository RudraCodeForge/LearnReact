const Show = () => {
  let date = new Date();
  console.log("Today date is :-",date);
  return (
    <h3>
      Today date is: {date} and time is: {}
    </h3>
  );
};
export default Show;
