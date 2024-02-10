
//FETCHING DATA USING API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }
//     return res.json();
// }

import { getUser } from "../../../lib/data";

const AuthorName = async ({ userId }) => {

    //FETCHING DATA WITH API
    // const user = await getData(userId);

    //FETCHING DATA WITHOUT AN API, FROM DB
    const user = await getUser(userId);
    console.log(user);

    return (
        <div className="flex flex-col h-12 gap-0">
            <h1 className="author text-md text-slate-500">Author</h1>
            <h1 className="authorname text-lg text-white">{user.username}</h1>
        </div>
    )
}

export default AuthorName
