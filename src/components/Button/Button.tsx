import ButtonStyled from "./ButtonStyled";

const Button = (): JSX.Element => {
  return (
    <>
      <ButtonStyled className="form__button" type="submit" value="Iniciar">
        Iniciar
      </ButtonStyled>
    </>
  );
};

export default Button;
