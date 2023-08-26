import classes from "./LoginButton.module.css";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/auth?mode=login">
      <button className={classes.button}>Login/Sign Up</button>;
    </Link>
  );
}

export default LoginButton;
