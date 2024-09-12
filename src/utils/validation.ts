import joi from "joi";
import { UserType } from "../type/user";

function userPayloadValidation(req: { body: UserType }, res: any, next: any) {
  const schema = joi.object({
    name: joi.string().min(3).max(60).required(),
    email: joi.string().email().required(),
    phone: joi.number().min(10).required(),
    password: joi.string().min(8).max(16).alphanum().required(),
    roleType: joi.string().min(4).required(),
  });
  const { error, value } = schema.validate(req.body);

  if (error)
    return res.status(400).json({
      response: { code: 400, message: "Validation error!" },
      error,
    });

  next();
}

function userLoginValidation(req: { body: UserType }, res: any, next: any) {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(16).alphanum().required(),
  });
  const { error, value } = schema.validate(req.body);

  if (error)
    return res.status(400).json({
      response: { code: 400, message: "Invalid User!" },
      error,
    });

  next();
}

export { userPayloadValidation, userLoginValidation };
