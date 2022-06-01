import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Disclousure() {
  return (
    <div className="">
      <div className="flex items-end flex-col-reverse rounded-2xl bg-white mb-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className=" rounded-lg">
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-360 transform" : "rotate-180 transform"
                  } h-5 mr-4 bg-transparent`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex font-Poppins flex-col justify-start mr-40 mt-3 text-sm text-gray-500">
                <div className="mt-4 flex items-center">
                  <div className=" flex justify-center w-5 h-5 mr-3 bg-green-500 rounded-full">
                    1
                  </div>
                  <p className="">Almoço</p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className=" flex justify-center w-5 h-5 mr-3 bg-green-500 rounded-full">
                    2
                  </div>
                  <p className="">Almoço</p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className=" flex justify-center w-5 h-5 mr-3 bg-green-500 rounded-full">
                    3{" "}
                  </div>
                  <p className="">Almoço</p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className=" flex justify-center items-center border-2 w-5 h-5 mr-3  rounded-full">
                    4
                  </div>
                  <p className="">Almoço</p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className=" flex justify-center items-center border-2 w-5 h-5 mr-3 rounded-full">
                    5
                  </div>
                  <p className="">Almoço</p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className=" flex justify-center items-center border-2 w-5 h-5 mr-3 rounded-full">
                    6
                  </div>
                  <p className="">Sneakers Grátis!</p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
