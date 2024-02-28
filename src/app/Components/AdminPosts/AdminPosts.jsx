import { getPosts } from "../../../lib/data";
// import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "../../../lib/actions";

const AdminPosts = async () => {
    const posts = await getPosts();

    return (
        <div className="flex justify-start items-center w-1/2 flex-col gap-4 py-6">
            <h1>Posts</h1>
            {posts.map((post) => (
                <div className="flex justify-between items-center w-full px-12 h-12" key={post.id}>
                    <div className="flex items-center gap-4">
                        <Image
                            src={post.img || "/noAvatar.png"}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-full h-[40px] w-[40px]"
                        />
                        <span className="">{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button className="bg-red-500 rounded-lg px-4 py-2">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminPosts;