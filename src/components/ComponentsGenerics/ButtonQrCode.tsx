import React from "react";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import QrCode from "../../../public/Icons/qr_code_2.svg";
import QrCodeModal from "../../../public/Icons/QRCodeFacil.svg";
import Print from "../../../public/Icons/print.svg";
import Share from "../../../public/Icons/share.svg";




export default function IconQrCode() {
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
        <Image src={QrCode} />
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
            <div className="relative w-9/12 h-5/6">
              {/*content*/}

              <div className=" border-0 full rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <h3 className="font-Poppins mt-8 mb-5 text-lg">
                    A cada 5 almoços, ganhe um Sneakers!
                  </h3>
                  <div className="mt-10">
                    <Image src={QrCodeModal} />
                  </div>
                  <div className="flex items-center justify-center">
                    <span>
                      <Image src={Share} />
                    </span>
                    <span className="ml-20">
                      <Image src={Print} />{" "}
                    </span>
                  </div>
                  <div>
                    <h3 className="mt-8 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Mostre o QR Code para cadastrar seu cliente!
                    </h3>
                  </div>
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
