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

enum NotesEndPoints {
  CREATE = "/create",
  UPDATE = "/update/:id",
  GET_ALL = "/all",
  DELETE = "/delete/:id",
}

export { UserEndPoints, AuthEndPoints, NotesEndPoints };
