import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Disclousure() {
  return (
    <div className="">
      <div className="flex items-end w-72 flex-col-reverse rounded-2xl bg-white mb-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className=" rounded-lg hover:bg-green-300 focus:outline-none focus-visible:ring focus-visible:ring-green-300 focus-visible:ring-opacity-75">
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-360 transform" : "rotate-180 transform"
                  } h-5  bg-transparent`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col justify-start mr-56 text-sm text-gray-500">
               <p>Almoco</p>
               <p>Almoco</p>
               <p>Almoco</p>
               <p>Almoco</p>
               <p>Almoco</p>
               <p>Almoco</p>
               
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
