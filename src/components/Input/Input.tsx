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
          placeholder={placeholder}
          minLength={minLength}
          title={title}
          aria-label="input"
          required
        />
      </InputStyled>
    </>
  );
};

export default Input;
