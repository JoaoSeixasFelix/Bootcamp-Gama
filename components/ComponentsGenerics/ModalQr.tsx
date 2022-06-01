import React from "react";
import Button from "./Button";
import QrCodeScreen from "../QrCodeScreen";
import QrIcon from "../../public/qrcode.svg";
import Image from "next/image";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        type={"button"}
        width="w-51"
        backGroundColor="transparent"
        textColor="text-slate-900"
        borderColor="transparent"
        margin="m-0"
        padding="p-0"
      >
        {" "}
        <Image src={QrIcon} />{" "}
      </Button>

      {showModal ? (
        <>
          <div
            className="   bottom-0 right-0 top-0
                          justify-center
                          items-center
                          flex
                          overflow-x-hidden 
                          overflow-y-auto 
                          fixed inset-0 
                          z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className=" border-0  rounded-lg shadow-lg  relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <QrCodeScreen />
                </div>

                {/*footer*/}

                <div
                  className="flex items-center justify-end 
                                p-6 border-t border-solid 
                              border-slate-200 rounded-b"
                >
                  <button
                    className="bg-emerald-500 text-white
                               active:bg-emerald-600
                                font-bold uppercase
                                text-sm px-6 py-3 rounded shadow
                                hover:shadow-lg outline-none 
                                focus:outline-none mr-1 mb-1 ease-linear
                                transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {" "}
                    Close{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
