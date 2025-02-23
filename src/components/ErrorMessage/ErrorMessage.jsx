import style from "./ErrorMessage.module.css";

function ErrorMessage({ errorMessage }) {
  return <p className={style.errorMessage}>{errorMessage}</p>;
}

export default ErrorMessage;
