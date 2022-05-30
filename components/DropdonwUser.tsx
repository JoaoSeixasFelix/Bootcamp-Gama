import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import SideList from "../public/sidelist.svg";
import { Fragment } from "react";

const sections = [
  {
    name: "Profile",
    description: "",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Sair",
    description: "",
    href: "##",
    icon: IconTwo,
  },
];

export default function UserModal() {
  return (
    <div className=" max-w- px-6">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-transparent 
                px-3 py-2 text-base font-medium text-white 
                hover:text-opacity-100 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <Image src={SideList} />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute left-0 z-10 mt-3 
                                        max-w-sm -translate-x-1/2 transform 
                                        px-4 sm:px-0 lg:max-w-3xl"
              >
                <div
                  className="overflow-hidden rounded-lg 
                                shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div className="relative grid gap-8 bg-white p-7 ">
                    {sections.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center 
                                  rounded-lg p-2 transition duration-150 
                                  ease-in-out hover:bg-gray-50 focus:outline-none 
                                  focus-visible:ring focus-visible:ring-orange-500 
                                  focus-visible:ring-opacity-50"
                      >
                        <div
                          className="flex h-10 w-10 
                                        shrink-0 items-center
                                        justify-center text-white sm:h-12 sm:w-12"
                        >
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.38">
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="19.5"
          fill="white"
          stroke="#263238"
        />
      </g>
      <path
        d="M20 12C21.0609 12 22.0783 12.4214 22.8284 13.1716C23.5786 13.9217 24 14.9391 24 16C24 17.0609 23.5786 18.0783 22.8284 18.8284C22.0783 19.5786 21.0609 20 20 20C18.9391 20 17.9217 19.5786 17.1716 18.8284C16.4214 18.0783 16 17.0609 16 16C16 14.9391 16.4214 13.9217 17.1716 13.1716C17.9217 12.4214 18.9391 12 20 12ZM20 22C24.42 22 28 23.79 28 26V28H12V26C12 23.79 15.58 22 20 22Z"
        fill="#979797"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.98438 2.01562V15.9844H10V18H1.98438C1.45312 18 0.984375 17.7969 0.578125 17.3906C0.203125 16.9844 0.015625 16.5156 0.015625 15.9844V2.01562C0.015625 1.48438 0.203125 1.01563 0.578125 0.609375C0.984375 0.203125 1.45312 0 1.98438 0H10V2.01562H1.98438ZM15.0156 3.98438L19.9844 9L15.0156 14.0156L13.6094 12.5625L16.1875 9.98438H6.01562V8.01562H16.1875L13.6094 5.39062L15.0156 3.98438Z"
        fill="black"
      />
    </svg>
  );
}
