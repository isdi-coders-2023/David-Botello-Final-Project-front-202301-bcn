import { rest } from "msw";
import { setupServer } from "msw/node";
import { mockToken } from "./mockdata";

const routes = { users: "/users", login: "/login" };

const apiUrl = process.env.REACT_APP_URL_API!;

const handlers = [
  rest.post(
    `${apiUrl}${routes.users}${routes.login}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ token: mockToken }));
    }
  ),
];

export const server = setupServer(...handlers);
