import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center  items-center bg-black h-screen  ">
      <img
        src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/25/thumbs/800x531/74707.jpg"
        className="
         absolute
         min-h-screen
         opacity-20
        "
      ></img>
      <div className="p-12  w-2/4 max-h-screen z-50 min-w-fit">
        <header className="flex justify-between pb-16 ">
          <div className="font-bold text-white">App Name</div>
          <span className="text-gray-500 font-medium">Home</span>
          <span className="text-gray-500 font-medium">Join</span>
        </header>
        <section className="pt-16">
          <div className="space-y-6">
            <h3 className="font-medium text-gray-700">START FOR FREE</h3>
            <h1 className="font-bold text-4xl text-white">
              Create new account
            </h1>
            <h3 className="text-gray-700 font-medium">
              Already A Member?{" "}
              <a href="#" className="text-blue-600 font-medium">
                Log In
              </a>
            </h3>
          </div>
          <div className="py-9 space-y-4">
            <div className="grid grid-cols-2 gap-12">
              <div className=" rounded-2xl bg-gray-600 p-2 px-3 flex items-center">
                <div>
                  <span className="text-xs text-gray-400 font-medium ">
                    First name
                  </span>
                  <input className=" block w-3/4 bg-transparent text-white" />
                </div>
                <span className="pr-2">👨🏻‍💻</span>
              </div>

              <div className=" rounded-2xl bg-gray-600 p-2 px-3 flex items-center">
                <div>
                  <span className="text-xs text-gray-400 font-medium ">
                    Last name
                  </span>
                  <input className=" block w-3/4 bg-transparent text-white" />
                </div>
                <span className="pr-2">👨🏻‍💻</span>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className=" rounded-2xl bg-gray-600 flex items-center px-4 py-2">
                <div className="w-full">
                  <span className="text-xs text-gray-400 font-medium ">
                    Email
                  </span>
                  <input
                    type="email"
                    className=" block  bg-transparent text-white"
                  />
                </div>
                <span>✉️</span>
              </div>
              <div className=" rounded-2xl bg-gray-600 flex items-center px-4 py-2">
                <div className="w-full">
                  <span className="text-xs text-gray-400 font-medium ">
                    Password
                  </span>
                  <input
                    type="password"
                    className=" block  bg-transparent text-white"
                  />
                </div>
                <span>👀</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <button className="bg-gray-600 py-3 px-6  rounded-full text-white">
              Change method
            </button>
            <button className="bg-blue-600 py-3 px-6  rounded-full text-white">
              Create account
            </button>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
