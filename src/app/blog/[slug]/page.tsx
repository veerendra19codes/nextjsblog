import Image from "next/image"
import AuthorName from "../../Components/AuthorName/AuthorName";
import { Suspense } from "react";
//FETCHING DATA WITHOUT AN API I.E FETCHING FROM A SEPERATING FOLDER INSIDE PROJECT
import { getPost } from "../../../lib/data"


//FETCHING DATA WITH API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }
//     return res.json();
// }

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
    console.log(params);

    //FETCHING DATA WITH API
    // const post = await getData(slug);

    //FETCHING DATA WITHOUT AN API
    const post = await getPost(slug);
    console.log(post);

    return (
        <div className="flex gap-12 justify-center items-center py-8 px-24">
            <div className="imgContainer left w-[350px] h-[500px] relative ml-24">
                <Image src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blogimg" fill className="object-cover" />
            </div>

            <div className="right flex flex-col justify-start gap-8 h-full">
                {post &&
                    <h1 className="font-bold text-4xl">{post?.title}</h1>
                }

                <div className="postdetails flex justify-start gap-4 h-12 ">
                    {post.img &&
                        <Image src={post.img} alt="authorimg" width={48} height={48} className="size-12 rounded-full" />
                    }

                    <Suspense fallback={<div>Loading...</div>}>
                        {post &&
                            <AuthorName userId={post?.id} />
                        }
                    </Suspense>

                    <div className="flex flex-col h-48 gap-0">
                        <h1 className="published text-md text-slate-500">Published</h1>
                        <h1 className="publisheddate text-lg text-white">11.02.2024</h1>
                    </div>
                </div>
                {post &&
                    <div className="desc">{post?.desc}</div>
                }
            </div>
        </div>
    )
}

export default SingleBlogPage
