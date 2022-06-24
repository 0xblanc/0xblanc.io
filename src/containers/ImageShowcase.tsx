const ImageShowcase = () => {
  return (
    <div className="h-[1000px] sm:mx-0 xl:mx-64 flex flex-col justify-center">
      <div className="w-full justify-center items-center flex flex-col text-center">
        <h1 className="text-2xl text-darkBlue ">Want something special? </h1>
        <h1 className="text-5xl text-darkBlue font-bold">
          AI image processed NFT generation
        </h1>
      </div>
      <div className="flex sm:grid sm:grid-cols-2 w-full h-1/2 my-10  flex-col-reverse sm:flex-col">
        <div className="col-span-1 bg-aliceBlue h-full flex space-y-10 flex-row sm:flex-col justify-center sm:justify-end md:justify-start">
          <div>1</div>
        </div>
        <div className="col-span-1 bg-white h-full">2</div>
      </div>
    </div>
  )
}
export default ImageShowcase
