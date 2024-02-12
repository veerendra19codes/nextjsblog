import Image from "next/image"
import AuthorName from "../../Components/AuthorName/AuthorName";
import { Suspense } from "react";
//FETCHING DATA WITHOUT AN API I.E FETCHING FROM A SEPERATING FOLDER INSIDE PROJECT
import { getPost } from "../../../lib/data"

//FETCHING DATA WITH API
const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);

    if (!res.ok) {
        throw new Error("Failed to get a post");
    }
    return res.json();
}

// const deleteData = async (slug) => {
//     const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, { method: "DELETE" });

//     if (!res.ok) {
//         throw new Error("Failed to delete");
//     }
//     return res.json();
// }


export const generateMetadata = async ({ params }) => {
    const { slug } = params;

    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
    };
};

const SingleBlogPage = async ({ params, searchParams }) => {

    // SERVER SIDE NAVIGATION
    // console.log(params);
    //url - http://localhost:3000/blog/post
    //console(server/vscode console) - { slug: 'post' }
    //url - http://localhost:3000/blog/posttest
    //console(sevver/vscode console) - { slug: 'posttest' }

    // console.log(searchParams);
    //url - http://localhost:3000/blog/post?q=test&q2=test2
    //console(server/vscode console) - { q: 'test', q2: 'test2' }

    //GETTING POSTID
    const { slug } = params;
    // console.log(params);

    //FETCHING DATA WITH API
    const post = await getData(slug);

    //FETCHING DATA WITHOUT AN API
    // const post = await getPost(slug);
    // console.log(post);

    return (
        <div className="flex gap-12 justify-evenly items-center py-8 px-24">
            {post.img && (
                <div className="imgContainer left w-[350px] h-[500px] relative" >
                    <Image src={post?.img ? post?.img : ""} alt="blogimg" fill className="object-cover w-auto h-auto"
                        priority={true} />
                </div>
            )}

            <div className="right flex flex-col justify-start gap-8 h-full pr-48">
                {post &&
                    <h1 className="font-bold text-4xl">{post?.title}</h1>
                }

                <div className="postdetails flex justify-start gap-4 h-12 ">
                    {/* {post.img &&
                        <Image src={post.img} alt="authorimg" width={48} height={48} className="size-12 rounded-full" />
                    }  */}

                    <Suspense fallback={<div>Loading...</div>}>
                        {post &&
                            <AuthorName userId={post?.userId} />
                        }
                    </Suspense>

                    <div className="flex flex-col h-48 gap-0">
                        <h1 className="published text-md text-slate-500">Published</h1>
                        <h1 className="publisheddate text-lg text-white">{post.createdAt.toString().slice(4, 16)}</h1>
                    </div>
                </div>
                {post &&
                    <>
                        <div className="desc">{post?.desc}</div>
                        {/* <button onClick={() => deleteData}>Delete</button> */}
                    </>
                }
            </div>
        </div>
    )
}

export default SingleBlogPage
