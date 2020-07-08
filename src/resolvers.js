import { users } from "./data";

export default {
  Query: {
    user(parent, { id }) {
      return users.find(user => user.id === id);
    }
  }
};
