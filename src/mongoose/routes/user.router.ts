import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

import { User } from "../models/user.model.js";
import { UserEndPoints } from "../../api/enums/endpoints.enums.js";

// Get all users data
router.get(UserEndPoints.GET_ALL, async (_, res) => {
  try {
    const data = await User.find({});
    console.log("All users data reterived!", data);
    res.status(200).json({
      response: { code: 200, message: "Successfully reterived all users!" },
      data,
    });
  } catch (error) {
    console.log("Error while returiving the user data", error);
  }
});

// create user data
// router.post(UserEndPoints.POST_USER, async (req, res) => {
//   try {
//     const newId = uuidv4();
//     const data = await User.create({ uuid: newId, ...req.body });
//     console.log("Users data added!", data);
//     res.status(201).json({
//       response: { code: 201, message: "Successfully Created users!" },
//       data,
//     });
//   } catch (error) {
//     console.log("Error while creating the user data", error);
//   }
// });

// Get one student by ID
router.get(UserEndPoints.GET, async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    console.log("All users data reterived!", data);
    res.status(200).json({
      response: { code: 200, message: "Successfully reterived users!" },
      data,
    });
  } catch (error) {
    console.log("Error while finding the user data", error);
  }
});

// Delete user data
router.delete(UserEndPoints.DELETE_USER, async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    console.log("Successfully deleted the user!", data);
    res.status(200).json({
      response: { code: 200, message: "Successfully deleted the user!" },
      data,
    });
  } catch (error) {
    console.log("Error while deleting the user data", error);
  }
});

export { router };
