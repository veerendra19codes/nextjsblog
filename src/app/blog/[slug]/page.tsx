import Image from "next/image"
const SingleBlogPage = () => {
    return (
        <div className="flex gap-12 justify-center items-center py-8 px-24">
            <div className="imgContainer left w-[350px] h-[500px] relative ml-24">
                <Image src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blogimg" fill className="object-cover" />
            </div>

            <div className="right flex flex-col justify-start gap-8 h-full">
                <h1 className="font-bold text-4xl">Title</h1>

                <div className="postdetails flex justify-start gap-4 h-12 ">

                    <Image src="https://images.pexels.com/photos/9869646/pexels-photo-9869646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="authorimg" width={48} height={48} className="size-12 rounded-full" />

                    <div className="flex flex-col h-12 gap-0">
                        <h1 className="author text-md text-slate-500">Author</h1>
                        <h1 className="authorname text-lg text-white">Tony Gray</h1>
                    </div>

                    <div className="flex flex-col h-48 gap-0">
                        <h1 className="published text-md text-slate-500">Published</h1>
                        <h1 className="publisheddate text-lg text-white">11.02.2024</h1>
                    </div>
                </div>

                <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repudiandae architecto quos dolores dolorum repellendus ad itaque fugit facere deleniti.</div>
            </div>
        </div>
    )
}

export default SingleBlogPage
