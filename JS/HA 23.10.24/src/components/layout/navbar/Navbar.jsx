import styles from "./Navbar.module.css";
import StanBtn from "../../stanBtn/StanBtn";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <StanBtn text="hallo" />
    </div>
  );
}

export default Navbar;
