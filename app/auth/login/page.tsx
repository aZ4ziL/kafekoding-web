import { faSignIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Login() {
  return (
    <>
      <div className="w-screen min-h-screen relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md rounded-lg w-[90%] md:w-[67%] lg:w-[30%] p-5">
          <form action="" method="post">
            <div className="flex items-center flex-col gap-3 justify-center">
              <div className="flex items-start flex-col gap-2 w-full">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="outline-none w-full border border-gray-300 rounded-md p-2"
                  autoFocus
                />
              </div>
              <div className="flex items-start flex-col gap-2 w-full">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="outline-none w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div className="mt-3">
              <Link href="/" legacyBehavior>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-sky-600 w-full text-white p-3 hover:bg-sky-800 active:bg-sky-600 rounded-sm"
                >
                  <FontAwesomeIcon icon={faSignIn} />
                  <span>Login</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
