import { verify } from "jsonwebtoken";
import { UserType } from "../type/user";

function validateToken(
  req: { body: UserType; headers: any },
  res: any,
  next: any
) {
  if (!req.headers["authorization"]) {
    return res.status(403).json({
      response: { code: 403, message: "Bearer token is missing!" },
    });
  }

  try {
    const decode = verify(
      req.headers["authorization"],
      process.env.SERVER_SECRET || ""
    );
    return next();
  } catch (error) {
    return res.status(403).json({
      response: { code: 403, message: "Bearer token is expired or invalid!" },
      error,
    });
  }
}

export { validateToken };
