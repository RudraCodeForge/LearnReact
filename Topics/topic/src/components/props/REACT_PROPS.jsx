import PASS_DATA from './PASS_DATA';

const REACT_PROPS = () => {
  let arr = ["DAL","FRUIT","LOCKEY","PANEER","GREEN VEGETABLES"];
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4 ">PROPS</h1>
        <PASS_DATA items={arr} />
        <p className="text-justify">
        </p>
      </div>
    </>
  );
};
export default REACT_PROPS;