const ImageShowcase = () => {
  return (
    <div className="h-screen">
      <div className="w-full justify-center items-center flex flex-col">
        <h1 className="text-2xl text-darkBlue ">Want something special? </h1>
        <h1 className="text-5xl text-darkBlue font-bold">
          AI image processed NFT generation
        </h1>
        <div></div>
      </div>
      <div className="grid grid-cols-2 w-full h-1/2 my-10 ">
        <div className="col-span-1 bg-aliceBlue h-full ">1</div>
        <div className="col-span-1 bg-white h-full">2</div>
      </div>
    </div>
  )
}
export default ImageShowcase
