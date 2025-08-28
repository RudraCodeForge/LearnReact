import styles from "./STATE.module.css";
import USESTATE from "./USESTATE";
import UseStateImg from "../../assets/UseState.jpg";
import USEREF from './USEREF';
import USECALLBACK from './USECALLBACK';
import USEMEMO from './USEMEMO';
import CUSTOM_HOOK from './CUSTOM_HOOK';
const STATES = () => {
  return (
    <div className="container">
      <h1 className="text-center">STATES</h1>
      <USESTATE />
      <img
        className={styles.img}
        src={UseStateImg} 
        alt="UseState" />
      <ol className={styles.List}>
        <li>
          <span className={styles.First}>States </span> Represents data that changes over time.
        </li>
        <li>
          <span className={styles.First}>States </span> is local or private to the component.
        </li>
        <li>
          <span className={styles.First}>States </span> Changes components to re-render.
        </li>
        <li>
          <span className={styles.First}>For </span>the functional component, we use the useState hook.
        </li>
        <li>
          <span className={styles.First}>Hooks </span>should only be used inside the components.
        </li>
        <li>
          <span className={styles.First}>Parent </span>components will pass state down to children via props.
        </li>
        <li>
          <span className={styles.First}>Lifting state up: </span> share state between components to moving it to their closest ancestor.
        </li>
        <li>
          <span className={styles.First}>React </span> function start with use are hooks. Ex:- useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId, useImperativeHandle, useSyncExternalStore, useInsertionEffect.
        </li>
      </ol>
      <USEREF/>
      <USECALLBACK/>
      <USEMEMO/>
      <CUSTOM_HOOK/>
    </div>
  );
};
export default STATES;
