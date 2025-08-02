import styles from "./Dynamic_Css.module.css";
const Dynamic_Css = () => {
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center">DYNAMIC CSS</h1>
        <ol>
          <li><span className={styles["First"]}>Localised ClassName</span> to avoide globle Conflicts</li>
          <li><span className={styles["First"]}>Styles</span> are Scoped to individual components</li>
          <li><span className={styles["First"]}>Helps</span> in Creating components specific Styles</li>
          <li><span className={styles["First"]}>Automatically</span> generate unique class name</li>
          <li><span className={styles["First"]}>Promtes</span> modular and maintainable css</li>
          <li>Can use alongside global css when needed</li>
        </ol>
      </div>
    </>
  );
};
export default Dynamic_Css;
