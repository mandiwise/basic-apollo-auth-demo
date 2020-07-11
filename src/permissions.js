import { and, or, rule, shield } from "graphql-shield";

function checkPermission(user, permission) {
  if (user && user["https://spaceapi.com/graphql"]) {
    return user["https://spaceapi.com/graphql"].permissions.includes(
      permission
    );
  }
  return false;
}

const isAuthenticated = rule()((parent, args, { user }) => {
  return user !== null;
});
