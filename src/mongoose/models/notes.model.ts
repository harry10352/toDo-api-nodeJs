import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  title: { type: String, require: true },
  noteId: { type: String, require: true },
  desc: { type: String, require: true },
  createdDate: { type: Number, require: true },
  type: { type: String, require: false },
});

const Notes = mongoose.model("notes", notesSchema);

export { Notes };
