import styles from "./Content.module.css";
import StanBtn from "../../stanBtn/StanBtn";
import CustomTextField from "../../customTextField/CustomTextField";

function Content() {
  return (
    <div className="content">Hello from Homepage
    <StanBtn text="Das ist ein text zum üben"/>
    <CustomTextField
        label=""
      />
    </div>
  );
}

export default Content;
