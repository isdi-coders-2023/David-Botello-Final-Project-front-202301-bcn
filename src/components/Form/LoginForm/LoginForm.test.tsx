import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "../../../utils/Wrapper";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a input with placeholder with text 'Introduce tu usuario'", () => {
      render(<LoginForm />, { wrapper: Wrapper });
      const expectedPlaceholderText = "Introduce tu usuario";

      const expectedUsernameInput = screen.getByPlaceholderText(
        expectedPlaceholderText
      );

      expect(expectedUsernameInput).toBeInTheDocument();
    });
  });

  test("Then it should show a checkbox input type", () => {
    render(<LoginForm />, { wrapper: Wrapper });

    const expectedCheckbox = screen.getAllByRole("checkbox");

    expect(expectedCheckbox).toBeTruthy();
  });

  test("Then it should show a button with text 'Iniciar'", () => {
    render(<LoginForm />, { wrapper: Wrapper });
    const textButton = "Iniciar";

    const expectedButton = screen.getByRole("button", { name: "Iniciar" });

    expect(expectedButton).toHaveTextContent(textButton);
  });

  describe("When the user write in password input 'holaquetal'", () => {
    test("Then it should show the text 'holaquetal' inside the input", async () => {
      const passwordLabel = "Contraseña";
      const passwordText = "holaquetal";

      render(<LoginForm />, { wrapper: Wrapper });

      const expectedInputText = screen.getByLabelText(passwordLabel);

      await act(
        async () => await userEvent.type(expectedInputText, passwordText)
      );

      expect(expectedInputText).toHaveValue(passwordText);
    });
  });
});
