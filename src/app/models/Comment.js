import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: ture,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: ture,
    },
    text: {
      type: String,
      required: ture,
    },
  },
  { timestamps: ture }
);

export default mongoose?.models?.comment ||
  mongoose.model("Comment", CommentSchema);
