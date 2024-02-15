import Image from 'next/image'
import React from 'react'

const AdminPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto">
            <div className="top flex justify-around w-full h-auto p-12">
                <div className="top-left posts flex flex-col justify-start gap-8 items-center w-1/2">
                    <h1>Posts</h1>
                    <div className="postrow flex justify-between items-center w-full p-4">
                        <div className="profilepicture-title flex flex-row gap-4 items-center">
                            <Image src="/noavatar.png" alt="profile" width={35} height={35} className="rounded-full" />
                            <h1>title</h1>
                        </div>
                        <button className="p-2 bg-red-500">Delete</button>
                    </div>
                    <div className="postrow flex justify-between items-center">
                        <div className="profilepicture-title">
                            <Image src="/noavatar.png" alt="profile" width={30} height={30} />
                            <h1>title2</h1>
                        </div>
                        <button className="p-2 bg-red-500">Delete</button>
                    </div>
                </div>
                <div className="top-right post-form w-1/2 p-12">
                    <form action="" className="w-auto bg-slate-800 h-auto p-12 flex flex-col justify-center items-center gap-8">
                        <input type="text" placeholder="title" name="title" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <input type="text" placeholder="img" name="img" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <input type="text" placeholder="slug" name="slug" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <textarea type="text" placeholder="description" name="description" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <button type="submit" className="bg-blue-700 p-4 rounded-lg" >Add</button>
                    </form>
                </div>
            </div>

            <div className="top flex justify-between">
                <div className="top-left posts flex flex-col justify-center items-center">
                    <h1>Posts</h1>
                    <div className="postrow flex justify-between items-center">
                        <div className="profilepicture-title">
                            <Image src="/noavatar.png" alt="profile" width={30} height={30} />
                            <h1>title</h1>
                        </div>
                        <button className="p-2 bg-red-500">Delete</button>
                    </div>
                    <div className="postrow flex justify-between items-center">
                        <div className="profilepicture-title">
                            <Image src="/noavatar.png" alt="profile" width={30} height={30} />
                            <h1>title2</h1>
                        </div>
                        <button className="p-2 bg-red-500">Delete</button>
                    </div>
                </div>
                <div className="top-right post-form">
                    <form action="" className="w-auto bg-slate-800 h-auto p-12 flex flex-col justify-center items-center gap-8">
                        <input type="text" placeholder="title" name="title" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <input type="text" placeholder="img" name="img" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <input type="text" placeholder="slug" name="slug" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <textarea type="text" placeholder="description" name="description" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                        <button type="submit" className="bg-blue-700 p-4 rounded-lg" >Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
