import styled from "styled-components";

const FormStyled = styled.form`
  font-family: var(--primary-font);
  font-size: 2.4rem;
  color: var(--gray-dark);

  .form {
    &__container {
      width: 32rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    &__title-container {
      width: 100%;
      font-size: 3.2rem;
      background-color: var(--gray-dark);
      color: #eee;
      height: 5rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
    }
    &__title {
      text-transform: uppercase;
      font-family: var(--heading-font);
      font-size: 3.2rem;
      font-weight: 400;
      color: white;
      text-align: center;
      line-height: 5rem;
      letter-spacing: 5px;
    }
    &__data-container {
      background-color: var(--gray-light);
      width: 100%;
      padding: 4rem 3rem 5rem;
      border-radius: 4px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
    &__username-container {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    &__password-container {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    &__communitty-label {
      line-height: 2.5rem;
    }
    &__input.community {
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      margin-left: 2rem;
      background-color: var(--white);
    }
    &__button {
      width: 100%;
      height: 5rem;
      text-transform: uppercase;
      font-family: var(--heading-font);
      font-size: 3.2rem;
      font-weight: 400;
      color: var(--accent-dark);
      text-align: center;
      line-height: 5rem;
      letter-spacing: 5px;
      background-color: var(--accent-color);
      border-radius: 40px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .register {
    font-family: "Montserrat";
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  a {
    color: red;
    font-weight: bold;
  }
`;

export default FormStyled;
