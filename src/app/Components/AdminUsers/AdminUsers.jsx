import { getUsers } from "../../../lib/data";
// import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "../../../lib/actions";

const AdminUsers = async () => {
    const users = await getUsers();

    return (
        <div className="flex justify-start items-center w-1/2 flex-col gap-4 py-6">
            <h1>Users</h1>
            {users.map((user) => (
                <div className="flex justify-between items-center w-full px-12 h-12" key={user.id}>
                    <div className="flex gap-4 items-center">
                        <Image
                            src={user.img || "/noAvatar.png"}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-full h-[40px] w-[40px]"
                        />
                        <span>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button className="bg-red-500 rounded-lg px-4 py-2">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;