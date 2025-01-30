// import FormAuth from "../components/Auth/Form/FormAuth";
import FormSignIn from "../components/SignIn/FormSignIn";
import cl from "./page.module.scss";

export default function AuthSignIn() {
  return (
    <div className={cl.auth}>
      <FormSignIn />
    </div>
  );
}
