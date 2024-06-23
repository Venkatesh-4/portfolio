import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  "use server";
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
