import Image from "next/image";
import SideList from "../public/sidelist.svg";
import classNames from "classnames";
import Link from "next/link";

export default function NavBar(username) {
  
  return (

    <div className="flex flex-col w-screen">

      <nav className="flex flex-col w-screen">
        <div className="bg-green-500 ">
          <div
            className="flex ml-4 mt-3 mb-3
                          items-center w-10 h-10 
                          rounded-full bg-white"
          ></div>

          <div
            className={`flex 
                          justify-between
                          items-center
                          ml-5 mr-9 mb-5 text-white`}
          >
            <p className="font-Poppins"> Olá, {username.name} </p>

            <Image src={SideList} />
          </div>
        </div>

        <div className="block bg-white border-b-2 border-gray-200">
          <ul
            className={classNames(`w-screen
                         flex
                         flex-row
                         justify-around
                         mb-0 mt-5`)}
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
                > Home </li>

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
                > Favorites </li>
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
                > Meus Pontos </li>

              </a>

            </Link>

          </ul>

        </div>

      </nav>

    </div>
  );
}