import express from "express";
import { jwtDecode } from "jwt-decode";
import { ReqtHeadersType, INotesType } from "../type/notes";
import { Notes } from "../mongoose/models/notes.model";
import { User } from "../mongoose/models/user.model";
import { JwtDecodeType } from "../type/user";

// Create Notes
async function createNote(
  req: { body: INotesType; headers: ReqtHeadersType },
  res: any
) {
  try {
    const decodedToken: JwtDecodeType = jwtDecode(req.headers.authorization);
    console.log("log", req.headers, decodedToken);
    const userData = await User.findById(decodedToken.id);
    console.log("data", userData);
    const createdDate = Date.now();
    const noteModel = new Notes({
      createdDate,
      userId: decodedToken.id,
      ...req.body,
    });

    const data = await noteModel.save();
    return res.status(201).json({
      response: { code: 201, message: "Successfully Created Note!" },
      data,
    });
  } catch (error) {
    console.log(
      "Error while creating the user note or incorrect userId",
      error
    );
    return res.status(401).json({
      response: {
        code: 401,
        message: "Error while creating the user note or incorrect userId",
      },
    });
  }
}

// Get all notes by ID
async function getNotesById(req: { headers: ReqtHeadersType }, res: any) {
  const decodedToken: JwtDecodeType = jwtDecode(req.headers.authorization);
  console.log("log", req.headers, decodedToken);
  try {
    const data = await Notes.find({ userId: decodedToken.id });
    console.log("All users data reterived!", data);
    res.status(200).json({
      response: { code: 200, message: "Successfully reterived users!" },
      data,
    });
  } catch (error) {
    console.log("Error while finding the user data", error);
  }
}

// // Delete user data
// async function deleteUser(req: { body: UserBodyType; params: any }, res: any) {
//   try {
//     const data = await User.findByIdAndDelete(req.params.id);
//     console.log("Successfully deleted the user!", data);
//     res.status(200).json({
//       response: { code: 200, message: "Successfully deleted the user!" },
//       data,
//     });
//   } catch (error) {
//     console.log("Error while deleting the user data", error);
//   }
// }

export { createNote, getNotesById };
