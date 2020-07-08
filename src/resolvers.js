import jwt from "jsonwebtoken";

import { users } from "./data";

export default {
  Query: {
    user(parent, { id }) {
      return users.find(user => user.id === id);
    }
  },
  Mutation: {
    login(parent, { email, password }) {
      const { id, permissions, roles } = users.find(
        user => user.email === email && user.password === password
      );
      return jwt.sign(
        { "https://spaceapi.com/graphql": { roles, permissions } },
        "SUPER_SECRET",
        { algorithm: "HS256", subject: id, expiresIn: "1d" }
      );
    }
  }
};
