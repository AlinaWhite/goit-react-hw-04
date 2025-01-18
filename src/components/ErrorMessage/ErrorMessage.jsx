import { FaRegFaceSadTear } from "react-icons/fa6";
import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorMessage}>
      <p>There are no images for you.</p>
      <FaRegFaceSadTear size={"8rem"} />
    </div>
  );
};

export default ErrorMessage;
