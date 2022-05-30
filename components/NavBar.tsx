import classNames from "classnames";
import Link from "next/link";
import UserModal from "./DropdonwUser";

export default function NavBar(username) {
  return (
    <div className="flex flex-col">
      <nav className="flex flex-col ">
        <div className="bg-green-500 ">
          <div className=" user-picture ml-5 flex mt-3 mb-3 items-center w-12 h-10 rounded-full bg-white">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              className="rounded-full w-32 shadow-lg"
              alt="Avatar"
            />
          </div>

          <div
            className={`flex justify-between items-center ml-5 mr-4 mb-3 text-white`}
          >
            <p className="font-Poppins"> Olá, {username.name} </p>
            <UserModal />
          </div>
        </div>
        <div className="block bg-white border-b-2 border-gray-200">
          <ul
            className={classNames("w-screen flex flex-row justify-around mt-3")}
          >
            <Link href={"/userhomepage"}>
              <a>
                <li
                  className={classNames(`ml-4 
                                ${
                                  username.activeFav || username.activePoints
                                    ? "text-gray-400"
                                    : username.activeHome
                                } 
                                ${username.colorHome} font-Poppins`)}
                >
                  {" "}
                  Home{" "}
                </li>
              </a>
            </Link>

            <Link href={"/userfavorites"}>
              <a>
                <li
                  className={classNames(`m-0  
                              ${
                                username.activeHome || username.activePoints
                                  ? "text-gray-400"
                                  : username.activeFav
                              } 
                              ${username.colorFav} font-Poppins`)}
                >
                  {" "}
                  Favorites{" "}
                </li>
              </a>
            </Link>

            <Link href={"/userpagepoints"}>
              <a>
                <li
                  className={classNames(`mr-20
                          ${
                            username.activeHome || username.activeFav
                              ? "text-gray-400"
                              : username.activePoints
                          }
                          ${username.colorPoints}  font-Poppins`)}
                >
                  {" "}
                  Meus Pontos{" "}
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
