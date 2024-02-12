import { addPost, deletePost } from "../../lib/actions"

const AddPost = () => {
    return (
        <div>
            <form action={addPost}>
                <input type=
                    "text" placeholder="title" name="title" className="text-black" />
                <input type=
                    "text" placeholder="desc" name="desc" className="text-black" />
                <input type=
                    "text" placeholder="slug" name="slug" className="text-black" />
                <input type=
                    "text" placeholder="userId" name="userId" className="text-black" />
                <button>Add Post</button>
            </form>

            <form action={deletePost}>
                <input type="text" placeholder="post id" name="id" className="text-black" />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default AddPost
