import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto p-10">
        <h1 className="flex justify-center py-5 font-montserrat text-7xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          POSTCAP
        </h1>
        <h1 className="flex justify-center text-4xl">
          Transform your social posts to beautiful photos.
        </h1>
        <div className="container mx-auto">
          <div className="my-5 rounded-full shadow-md bg-white">
            <div className="p-4 flex flex-row">
              {/* <div className="flex-grow-0">
                <Image
                  className=""
                  src="/fb.svg"
                  alt="fb"
                  width={50}
                  height={50}
                />
              </div> */}
              <div className="flex-grow">
                <input
                  className="h-full w-full p-2 px-4 text-lg focus:outline-none"
                  type="url"
                  placeholder="Paste your URL Here"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button className="active:bg-green-700 p-3 px-10 rounded-full shadow-xl bg-primary-btn active:bg-primary-btn-active">
              <span className="text-xl text-white font-semibold">Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
