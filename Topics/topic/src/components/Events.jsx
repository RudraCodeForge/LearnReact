import styles from "./Events.module.css";

const Events = () => {
  let arr = ["Apple", "Banana", "Orange", "Green Vegetables"];
  const HandleEvents = (e, item) => {
    console.log(e);
    console.log(`${item} add on cart successfully`);
  };
  return (
    <div className="container my-4">
      <h1 className="text-center">Events</h1>
      <ul className="list-group mb-4">
        <li className="list-group-item active" aria-current="true">
          HEALTHY FOODS
        </li>
        {arr.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              {item}
              <button
                className={`btn btn-primary btn-sm ${styles.btn}`}
                onClick={(e) => HandleEvents(e, item)}
              >
                Buy now
              </button>
            </li>
          );
        })}
      </ul>
      <ol>
        <li>
          <span className={styles.first}>React </span> Events use Camel Case
          Ex:- onCkick
        </li>
        <li>
          <span className={styles.first}>Uses </span> synthetic events, not
          direct browser event
        </li>
        <li>
          <span className={styles.first}>Events Handlers </span> can be function
          or arrow function
        </li>
        <li>
          <span className={styles.first}>Avoid </span> inline arrow function in
          JSX for performance
        </li>
      </ol>
      <p className={styles.first}>
        <b>-: THERE ARE BASICALLY 10 TYPES OF EVENTS IN REACT :-</b>
      </p>
      <h3>1. MOUSE EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onClick</td>
            <td>Triggered when an element is clicked</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onDoubleClick</td>
            <td>Triggered on a double click</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onMouseEnter</td>
            <td>When the mouse pointer enters an element</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>onMouseLeave</td>
            <td>When the pointer leaves an element</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>onMouseDown</td>
            <td>When the mouse button is pressed</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>onMouseUp</td>
            <td>When the mouse button is released</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h3>2. KEYBOARD EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onKeyDown</td>
            <td>When a key is pressed down</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onKeyPress</td>
            <td>When a key is pressed (deprecated in HTML, useonKeyDown)</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onKeyUp</td>
            <td>When a key is released</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h3>3. FORM EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>OnChange</td>
            <td>When the value of an input, textarea, or select changes</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onInput</td>
            <td>Similar to onChange, fires every time input changes</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onSubmit</td>
            <td>When a form is submitted</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>onReset</td>
            <td>When a form is reset</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>onInvalid</td>
            <td>When form validation fails</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>4. CLIPBOARD EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onCopy</td>
            <td>When content is copied</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onCut</td>
            <td>When content is cut</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onPaste</td>
            <td>When content is pasted</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>5. FOCUS EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onFocus</td>
            <td>When an element gains focus</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onBlur</td>
            <td>When an element loses focus</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>6. COMPOSITION EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onCompositionStart</td>
            <td>User starts text composition</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onCompositionUpdate</td>
            <td>During text composition</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onCompositionEnd</td>
            <td>Composition ends</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>7. TOUCH EVENTS (MOBILE)</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onTouchStart</td>
            <td>When a finger touches the screen</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onTouchMove</td>
            <td>When a finger moves</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onTouchEnd</td>
            <td>When the finger is lifted</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>onTouchCancel</td>
            <td>When the touch is interrupted (like a pop-up)</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>8. POINTER EVENTS (Modern Alternative to mouse/touch)</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onPointerDown</td>
            <td>Pointer is pressed down</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onPointerUp</td>
            <td>Pointer is released</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onPointerMove</td>
            <td>Pointer is moved</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>onPointerEnter / onPointerLeave</td>
            <td>Pointer enters or leaves</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>onPointerCancel</td>
            <td>Cancelled interaction</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>9. UI EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onScroll</td>
            <td>When scrolling happens in an element</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onResize</td>
            <td>
              When the window or element resizes (usually added to window)
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>10. MEDIA EVENTS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Events</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>onPlay/onPause</td>
            <td>Media play or pause</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>onEnded</td>
            <td>Media playback ended</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>onVolumeChange</td>
            <td>Volume is changed</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>onTimeUpdate</td>
            <td>Media current time updates</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>onLoadedData</td>
            <td>When media data is loaded</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Events;
