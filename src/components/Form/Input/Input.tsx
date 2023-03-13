import { ReactEventHandler } from "react";
import InputStyled from "./InputStyled";

interface InputProps {
  name: string;
  placeholder: string;
  className: string;
  type: string;
  minLength: number;
  title?: string;
  onChange: ReactEventHandler;
}

const Input = ({
  name,
  placeholder,
  type,
  minLength,
  title,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <>
      <InputStyled>
        <input
          onChange={onChange}
          className={`form__input ${name}`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          minLength={minLength}
          title={title}
          required
        />
      </InputStyled>
    </>
  );
};

export default Input;
