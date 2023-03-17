import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import useUserForm from "../../../hooks/useUser/useUserForm";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUserForm();

  const [login, loginSet] = useState({
    username: "",
    password: "",
    communitty: true,
  });

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.currentTarget;

    loginSet({
      ...login,
      [name]: event.target.type === "checkbox" ? checked : value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser(login);
  };

  const isDisabled =
    login.username === "" || login.password === "" || login.password.length < 8;
  return (
    <>
      <LoginFormStyled onSubmit={onSubmitHandler} className="form">
        <div className="form__container">
          <div className="form__title-container">
            <h2 className="form__title">Inicio Sesión</h2>
          </div>
          <div className="form__data-container">
            <div className="form__username-container">
              <label htmlFor="username" className="form__username-label">
                Usuario
              </label>
              <Input
                id="username"
                aria-label="input"
                name={"username"}
                placeholder={"Introduce tu usuario"}
                className={"form__input username"}
                type={"text"}
                minLength={0}
                onChange={handlerInput}
              />
            </div>
            <div className="form__password-container">
              <label htmlFor="password" className="form__password-label">
                Contraseña
              </label>
              <Input
                id="password"
                aria-label="contraseña"
                name={"password"}
                placeholder={"Introduce tu contraseña"}
                className={"password"}
                type={"password"}
                minLength={8}
                title="Tu contraseña deberá tener al menos un carácter especial, un número, una mayúscula y una minúscula"
                onChange={handlerInput}
              />
            </div>
            <div className="form__communitty-container">
              <label htmlFor="communitty" className="form__communitty-label">
                Comunidad
              </label>
              <input
                type={"checkbox"}
                name={"communitty"}
                id={"communitty"}
                className={"form__input community"}
                onChange={handlerInput}
                checked={login.communitty}
              />
            </div>
          </div>
          <Button text={"Iniciar"} isDisabled={isDisabled} />
          <div className="register">
            <span>No estás registrado/a?</span>
            <a href="http://">Clica aquí</a>
          </div>
        </div>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
