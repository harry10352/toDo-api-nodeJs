enum UserEndPoints {
  GET = "/user/:id",
  GET_ALL = "/user/all",
  POST_USER = "/user/add",
  PUT_USER = "/user/update",
  DELETE_USER = "/user/delete/:id",
}

enum AuthEndPoints {
  LOGIN = "/login",
  REGISTER = "/register",
}

export { UserEndPoints, AuthEndPoints };
