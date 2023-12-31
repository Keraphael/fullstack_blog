import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 4,
    },
    desc: {
      type: String,
      required: true,
      min: 6,
    },
    imageUrl: {
      type: String,
      required: true,
      enum: ["Nature", "Mountion", "Ocean", "Wildlife", "Forest"],
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  { timestamps: ture }
);

export default mongoose?.models?.Blog || mongoose.model("Blog", BlogSchema);
