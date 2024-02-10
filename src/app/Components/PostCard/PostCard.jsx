import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
    return (
        <>
            <div className="top flex justify-between items-center">
                {
                    post.img &&
                    <div className="imgContainer w-5/6 h-[400px] relative">

                        <Image src={post.img} alt="blogimg" fill className="object-cover" />
                    </div>
                }
                <div className="-rotate-90 p-0  h-[4px] flex justify-center items-center">01.02.2024</div>
            </div>

            <div className="bottom flex flex-col gap-0">
                <h1 className="text-2xl text-white font-bold mb-4 w-90">{post.title}</h1>
                <p className="text-md text-indigo-500 w-90 mb-2 ">{post.desc}</p>
                <Link href={`/blog/${post.slug}`} className="underline" >READ MORE</Link>
            </div >
        </>
    )
}

export default PostCard
