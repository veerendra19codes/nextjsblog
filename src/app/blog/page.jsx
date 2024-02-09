import PostCard from "../Components/PostCard/PostCard";

const BlogPage = () => {
    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center w-full h-auto mt-12">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}

export default BlogPage
