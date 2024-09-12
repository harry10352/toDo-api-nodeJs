import { Router } from "express";
import { NotesEndPoints, UserEndPoints } from "../../api/enums/endpoints.enums";
import { validateToken } from "../../utils/validate-token";
import {
  createNote,
  getNotesById
} from "../../controller/notes.controller";

const router = Router();
router.post(NotesEndPoints.CREATE, validateToken, createNote);
router.get(NotesEndPoints.GET_ALL, validateToken, getNotesById);

export { router as NotesRouter };
