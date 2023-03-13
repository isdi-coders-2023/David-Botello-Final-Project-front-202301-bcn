import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import Input from "./Input/Input";

const Form = (): JSX.Element => {
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

  return (
    <>
      <FormStyled className="form">
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
          <Button />
          <div className="register">
            <span>No estás registrado/a?</span>
            <a href="http://">Clica aquí</a>
          </div>
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
