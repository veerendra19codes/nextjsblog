import Image from "next/image"

const ContactPage = () => {
    return (
        <div className="flex flex-row justify-center items-center">

            <div className="left w-1/2 flex justify-center items-center">
                <Image src="/contact.png" alt="contact" width={450} height={450} />
            </div>

            <div className="right w-1/2 flex justify-center items-center">
                <form action="" className="right w-1/2 form gap-6 flex flex-col justify-center items-center w-[400px]">
                    <input type="text" className="bg-slate-800 text-gray-500 rounded-md pl-8 p-2 border-none outline-none w-full" placeholder="Name and surname" />
                    <input type="text" className="bg-slate-800 text-gray-500 rounded-md pl-8 p-2 border-none outline-none w-full" placeholder="Email address" />
                    <input type="text" className="bg-slate-800 text-gray-500 rounded-md pl-8 p-2 border-none outline-none w-full" placeholder="Phone number(optional" />
                    <textarea className="bg-slate-800 text-gray-500 rounded-md pl-8 w-full h-32 border-none outline-none" placeholder="Message" />
                    <button type="submit" className="bg-blue-700 rounded-md p-4 w-full">Send</button>
                </form>
            </div>

        </div>
    )
}

export default ContactPage
