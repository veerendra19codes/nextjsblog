import Image from 'next/image'
import AdminPostForm from '../Components/AdminPostForm/AdminPostForm'
import AdminPosts from '../Components/AdminPosts/AdminPosts'
import AdminUsers from '../Components/AdminUsers/AdminUsers'
import AdminUserForm from '../Components/AdminUserForm/AdminUserForm'
import { Suspense } from "react"


const AdminPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto">

            <div className="top flex flex-row w-full h-auto p-8">
                <Suspense fallback={<div>Loading...</div>}>

                    <AdminPosts />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>

                    <AdminPostForm />
                </Suspense>
            </div>

            <div className="bottom flex justify-around w-full h-auto p-8">
                <Suspense fallback={<div>Loading...</div>}>

                    <AdminUsers />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>

                    <AdminUserForm />
                </Suspense>
            </div>
        </div>
    )
}

export default AdminPage
