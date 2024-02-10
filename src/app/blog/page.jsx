import PostCard from "../Components/PostCard/PostCard";
//FETCHING DATA WITHOUT AN API I.E FETCHING FROM A SEPERATING FOLDER INSIDE PROJECT
import { getPosts } from "../../lib/data";

//FETCHING DATA WITH API
// const getData = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }
//     return res.json();
// }

const BlogPage = async () => {

    //FETCHING DATA WITH API
    // const posts = await getData();
    // console.log(posts);

    //FETCHING DATA WITHOUT AN API
    const posts = await getPosts();
    console.log(posts);

    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center w-full h-auto mt-12">
            {posts.map((post) => (
                <div className="flex flex-col gap-4 mb-12 w-1/4 xl:w-2/6 lg:w-1/2 justify-start" key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default BlogPage
