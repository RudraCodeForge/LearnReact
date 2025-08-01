import PASS_DATA from './PASS_DATA';

const REACT_PROPS = () => {
  let arr = ["DAL","FRUIT","LOCKEY","PANEER","GREEN VEGETABLES"];
  //let arr =[];
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4 ">PROPS</h1>
        <PASS_DATA items={arr} />
        <p className="text-justify">
          <ol>
            <lh>WHAT IS PROPS IN REACT ?</lh>
            <li>
              Props are arguments passed into React components. Props are
              passed to components via HTML attributes. Props stands for
              properties.
            </li>
            <li>
              Short in properties
            </li>
            <li>
              Machanism to pass data from parent components to child components
            </li>
            <li>
              Props are read only by default 
            </li>
          </ol>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_6cYzsrEAEZsDHBLrti3qyu0B0L0B7dU3ljj6n9eoe5qPzYNU5Fm_gZO&s=10" alt="props" className="propsimg" />
          <br/>
          <ol>
            <lh>USAGE OF PROPS</lh>
            <li>
              Pass data from parants to child
            </li>
            <li>
              Makes components reusable 
            </li>
            <li>
              Dynamic data rendering
            </li>
            <li>
              Define as attributes in JSX
            </li>
          </ol>
          <br/>
          <ol>
            <lh>KEY POINTS OF PROPS</lh>
            <li>
              Data Flows One way (Downward)
            </li>
            <li>
              Props are Immutable
            </li>
            <li>
              Used For Communication Between components
            </li>
          </ol>
        </p>
      </div>
    </>
  );
};
export default REACT_PROPS;