
//FETCHING DATA USING API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }
//     return res.json();
// }

import { getUser } from "../../../lib/data";
import Image from "next/image";

const AuthorName = async ({ userId }) => {

    //FETCHING DATA WITH API
    // const user = await getData(userId);

    //FETCHING DATA WITHOUT AN API, FROM DB
    const user = await getUser(userId);
    // console.log(user);

    return (
        <div className="flex flex-row h-12 gap-4">

            {/* src={user.img ? user?.img : "/noavatar.png"} */}
            <Image
                src={user?.img ?? "/noavatar.png"}
                alt="authorimg"
                width={48}
                height={48} className="size-12 rounded-full w-auto h-auto"
                priority={true}
            />


            <div className="texts flex flex-col h-12 gap-0">
                <h1 className="author text-md text-slate-500">Author</h1>
                <h1 className="authorname text-lg text-white">{user.username}</h1>
            </div>
        </div>
    )
}

export default AuthorName
