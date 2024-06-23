"use server";
import { addPost } from "@/lib/action";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="desc" name="desc"></input>
        <input type="text" placeholder="slug" name="slug"></input>
        <input type="text" placeholder="userId" name="userId"></input>
        <button>Create</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
