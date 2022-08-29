/**
 *@module server/MyPostSchema 
 */
import mongoose from "mongoose";


const postSchema = new mongoose.Schema(
  {
    /**
     * Este será el título de la publicación que se realice 
     */
    title: {
      type: String,
      required: true,
      trim: true,
    },
    /**
     * Esta será la descripción del post que se realice
     */
    description: {
      type: String,
      required: true,
      trim: true,
    },
    /**
     * esta será la imagen del post que se realice
     */
    image: {
      public_id: String,
      url: String,
    },
  },
);

export default mongoose.model("Post", postSchema);