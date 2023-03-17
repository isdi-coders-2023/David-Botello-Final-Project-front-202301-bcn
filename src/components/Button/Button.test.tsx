import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button", () => {
      render(<Button text={""} isDisabled={false} />);

      const expectedButtonElement = screen.getByRole("button");

      expect(expectedButtonElement).toBeInTheDocument();
    });

    describe("When it is rendered with text 'Iniciar'", () => {
      test("Then it should show a button with text 'Iniciar'", () => {
        const text = "Iniciar";
        const expectedText = "Iniciar";
        render(<Button text={text} isDisabled={false} />);

        const expectedButtonText = screen.getByRole("button");

        expect(expectedButtonText).toHaveTextContent(expectedText);
      });
    });

    describe("When it is rendered with props 'isDisabled=true'", () => {
      test("Then it should show a button disabled", () => {
        const isDisabled = true;

        render(<Button text={""} isDisabled={isDisabled} />);

        const expectedButton = screen.getByRole("button");

        expect(expectedButton).toBeDisabled();
      });
    });
  });
});
