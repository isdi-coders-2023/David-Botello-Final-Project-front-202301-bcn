import { render, screen } from "@testing-library/react";
import Input from "./Input";

const roleInput = "input";

describe("Given a Input component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a input textbox", () => {
      render(
        <Input
          onChange={() => ""}
          className={""}
          type={""}
          name={""}
          placeholder={""}
          minLength={8}
          title={""}
        />
      );

      const expectedRoleInput = screen.getByRole("textbox");

      expect(expectedRoleInput).toHaveAccessibleName(roleInput);
    });
  });
});
