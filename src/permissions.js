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

const canReadAnyUser = rule()((parent, args, { user }) => {
  return checkPermission(user, "read:any_user");
});

const canReadOwnUser = rule()((parent, args, { user }) => {
  return checkPermission(user, "read:own_user");
});

const isReadingOwnUser = rule()((parent, { id }, { user }) => {
  return user && user.sub === id;
});

export default shield({
  Query: {
    user: or(and(canReadOwnUser, isReadingOwnUser), canReadAnyUser),
    viewer: isAuthenticated
  }
});
