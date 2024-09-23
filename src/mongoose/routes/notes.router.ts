import { Router } from "express";
import { NotesEndPoints } from "../../api/enums/endpoints.enums";
import { validateToken } from "../../utils/validate-token";
import {
  createNote,
  deleteNotes,
  getNotesById
} from "../../controller/notes.controller";

const router = Router();
router.post(NotesEndPoints.CREATE, validateToken, createNote);
router.get(NotesEndPoints.GET, validateToken, getNotesById);
router.delete(NotesEndPoints.DELETE, validateToken, deleteNotes);

export { router as NotesRouter };
