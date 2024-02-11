import Image from "next/image"
const Home = () => {
  return (
    <div className="home flex flex-row justify-between px-12">

      <div className="left flex flex-col w-1/2 gap-8 justify-center pl-24">

        <div className="title gap-4 flex flex-col">
        <h1 className="font-bold text-5xl text-textSoft">Creative</h1>
        <h1 className="font-bold text-5xl text-textSoft">Thoughts</h1>
        <h1 className="font-bold text-5xl text-textSoft">Agency</h1>
        </div>
        <p className="w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus cumque deleniti recusandae omnis architecto doloremque ipsa nisi voluptas illum.</p>
        <div className="buttons flex flex-row gap-4">
          <button className="bg-blue-500 rounded-md p-4">Learn More</button>
          <button className="bg-white text-bgDark rounded-md p-4">Contact</button>
        </div>
        <Image src="/brands.png" alt="brands" width={500} height={100} className="w-auto h-auto"/>
      </div>

      <div className="right w-1/2 flex justify-center items-center">
        
          <Image src="/hero.gif" alt="hero" width={450} height={450} />
      </div>
    </div>
  )
}

export default Home
