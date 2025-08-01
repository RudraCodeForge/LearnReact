const Maps = () => {
  let arr = ["Dal", "Furits", "Lockey", "Green Vegitables"];
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4 ">MAPS</h1>
        <ul className="list-group mb-4">
          <li className="list-group-item active" aria-current="true">
            Healthy Food
          </li>
          {arr.map((no) => (
            <li key = {no} className="list-group-item">{no}</li>
          ))}
        </ul>
        <p className="text-justify">
          What is map() in React? <br />
          In React, the .map() function is used to loop through an array and
          return a new array of JSX elements. It helps in rendering lists
          dynamically — for example, displaying a list of items, cards, users,
          etc.
          <br />
          <br />
          React में map() क्या होता है? <br />
          React में .map() का इस्तेमाल array के हर item पर loop चलाने के लिए
          होता है, जिससे आप हर item के लिए एक JSX element बना सकें। इसका
          इस्तेमाल ज्यादातर dynamic list या card दिखाने में होता है।
          <br/> <br/>
          PURPOSE : Render lists from array data.
          <br/> <br/>
          JSX ELEMENT : Transform array items into JSX elements.
           <br/> <br/>
          INLINE RENDERING : Render JSX elements directly within the map() function.
           <br/> <br/>
          KEY PROPS : Use unique keys for each item to help React identify which items have changed and need to be re-rendered.
        </p>
      </div>
    </>
  );
};
export default Maps;
