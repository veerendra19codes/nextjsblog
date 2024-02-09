import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = () => {
    return (
        <div className="flex flex-col gap-4 mb-12 w-1/4 xl:w-2/6 lg:w-1/2">
            <div className="top flex justify-between items-center">
                <div className="imgContainer w-5/6 h-[400px] relative">
                    <Image src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blogimg" fill className="object-cover" />
                </div>
                <div className="-rotate-90 p-0  h-[4px] flex justify-center items-center">01.02.2024</div>
            </div>

            <div className="bottom flex flex-col gap-0">
                <h1 className="text-2xl text-white font-bold mb-4 w-90">Title</h1>
                <p className="text-md text-indigo-500 w-90 mb-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, nostrum?</p>
                <Link href="/blog/post" className="underline">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard
