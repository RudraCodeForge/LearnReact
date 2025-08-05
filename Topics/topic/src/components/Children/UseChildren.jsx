import Container from "./Container";
import styles from "./UseChildren.module.css";
const UseChildren = () => {
  return (
    <Container>
      <h1 className="text-center">CHILDREN PROPS</h1>
      <ol>
        <li>
          <span className={styles.First}>Children </span>are special prop for
          using the passing elements into components
        </li>
        <li>
          <span className={styles.First}>Used for </span>flexible and reusable
          components design
        </li>
        <li>
          <span className={styles.First}>Common </span>in layout or Container
          component
        </li>
        <li>
          <span className={styles.First}>Accessed </span>using props.chlidren
        </li>
        <li><span className={styles.First}>Can be any content </span>String, Number, JSX, Componens</li>
        <li><span className={styles.First}>Enhance </span> Component compatibility and reusability</li>
      
      </ol>
    </Container>
  );
};
export default UseChildren;
