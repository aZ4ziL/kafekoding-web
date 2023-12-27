export default function Home() {
  return (
    <>
      <header className="relative w-full min-h-[60vh]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase text-center">
            Selamat datang di kafe koding
          </h1>
          <p className="text-gray-400 font-extralight text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            distinctio!
          </p>
          <div className="flex mt-5 items-center gap-3 justify-center">
            <button className="px-3 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white rounded-md transition-colors ease-in duration-75">
              Get Started
            </button>
          </div>
          <p className="text-gray-300 text-xs font-extralight text-center mt-2">
            Kafe Koding Community
          </p>
        </div>
      </header>
    </>
  )
}
