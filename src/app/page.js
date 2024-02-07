import Image from "next/image"
const Home = () => {
  return (
    <div className="home flex flex-row justify-evenly">

      <div className="left flex flex-col w-1/2 gap-8 justify-center">

        <div className="title gap-4 flex flex-col">
        <h1 className="font-bold text-5xl text-textSoft">Creative</h1>
        <h1 className="font-bold text-5xl text-textSoft">Thoughts</h1>
        <h1 className="font-bold text-5xl text-textSoft">Agency</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus cumque deleniti recusandae omnis architecto doloremque ipsa nisi voluptas illum.</p>
        <div className="buttons flex flex-row gap-4">
          <button className="bg-blue-500 rounded-md p-4">Learn More</button>
          <button className="bg-white text-bgDark rounded-md p-4">Contact</button>
        </div>
        <Image src="/brands.png" alt="brands" width={500} height={100} />
      </div>

      <div className="right w-1/2 flex justify-center items-center">
        
          <Image src="/hero.gif" alt="hero" width={450} height={450} />
      </div>
    </div>
  )
}

export default Home
