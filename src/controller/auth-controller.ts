import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { User } from "../mongoose/models/user.model";
import { UserBodyType } from "../type/user";

function loginUser(req: any, res: any) {
  res.send(res);
}

async function registerUser(req: { body: UserBodyType }, res: any) {
  const uuid = uuidv4();
  const userModel = new User({ uuid, ...req.body });
  // const data = await User.create({ uuid: newId, ...userModel });
  userModel.password = await hash(req.body.password, 10);

  try {
    const data = await userModel.save();
    data.password = undefined;
    return res.status(201).json({
      response: { code: 201, message: "Successfully Created users!" },
      data,
    });
  } catch (error) {
    console.log("Error while registering the user data", error);
  }
}

export { loginUser, registerUser };
