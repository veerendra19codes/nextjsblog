import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className="home flex flex-row justify-evenly">

            <div className="left flex flex-col w-1/2 gap-8 justify-center">
                <h1 className="text-indigo-800 text-3xl font-bold">About Agency</h1>
                <div className="title gap-4 flex flex-col">
                    <h1 className="font-bold text-5xl text-textSoft">We create digital ideas</h1>
                    <h1 className="font-bold text-5xl text-textSoft">that are bigger, bolder,</h1>
                    <h1 className="font-bold text-5xl text-textSoft">braver and better</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus cumque deleniti recusandae omnis architecto doloremque ipsa nisi voluptas illum.</p>
                <div className="stats flex flex-row gap-6">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-indigo-800 text-2xl font-bold">10 K+</h3>
                        <p className="text-gray-400">Year of experience</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-indigo-800 text-2xl font-bold">234 K+</h3>
                        <p className="text-gray-400">People reached</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-indigo-800 text-2xl font-bold">5 K+</h3>
                        <p className="text-gray-400">Services and plugins</p>
                    </div>
                </div>
            </div>

            <div className="right w-1/2 flex justify-center items-center">

                <Image src="/about.png" alt="hero" width={400} height={400} />
            </div>
        </div>
    )
}

export default AboutPage
