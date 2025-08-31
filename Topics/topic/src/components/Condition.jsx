import { useState } from "react";
const Condition = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="p-4 text-center">
        <button
          onClick={() => setShow(!show)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {show ? "Hide Message" : "Show Message"}
        </button>

        {show && (
          <p className="mt-4 text-lg text-green-600">
            Hello 👋 This is a conditionally rendered message!
          </p>
        )}

        <ol>
          <li>
            <span className="First">Definition:</span> Conditional rendering in
            React allows you to display components or elements based on certain
            conditions.
          </li>
          <li>
            <span className="First">Techniques:</span> Common methods include
            if-else statements, ternary operators, and logical && operators
            inside JSX.
          </li>
          <li>
            <span className="First">Flexibility:</span> It makes UI flexible by
            showing, hiding, or switching components dynamically.
          </li>
          <li>
            <span className="First">Reusability:</span> Helps in creating
            reusable components by rendering only the required parts.
          </li>
          <li>
            <span className="First">Performance:</span> Improves performance by
            avoiding unnecessary rendering of components.
          </li>
          <li>
            <span className="First">User Experience:</span> Enhances UX by
            showing appropriate content depending on user actions or data state.
          </li>
        </ol>
      </div>
    </>
  );
};
export default Condition;
