const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide the title of your blog"],
    },
    content: {
      type: String,
      required: [true, "Please provide the content of your blog"],
    },
    category: {
      type: String,
      required: [true, "Please select the category."],
      enum: {
        values: ["tech", "lifestyle", "business", "entertainment", "world"],
        message: "Please select your blog category.",
      },
    },
    image: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140633878.jpg",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
