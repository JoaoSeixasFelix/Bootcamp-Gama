import React from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function ModalAddingCustomer() {
  const [showModal, setShowModal] = useState(false);
  const [namePrograming, setnamePrograming] = useState();
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        type={"button"}
        height="w-14"
        width="w-14"
        backGroundColor="bg-gray-300"
        textColor="text-slate-900"
        borderColor="transparent"
        margin="m-0"
        padding="p-0"
      >
        +
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
            <div className="w-4/5 h-5/6">
              {/*content*/}

              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full h-4/5 bg-white outline-none focus:outline-none">
                <div className="p-4 flex-auto">
                  <div className="mt-10"></div>
                  <div className="w-80">
                    <Input
                      onValueChange={(e) => setnamePrograming(e)}
                      name="login"
                      placeholder="Nome do Progama"
                      value={namePrograming}
                      type={"text"}
                      size="w-full"
                      bgColor="bg-gray-100"
                      textColor="white"
                      borderColor="border-b-green-500"
                      marginLeft="ml-6"
                      required
                    />
                  </div>
                  <div className=" w-full h-4/5 overflow-x-hidden flex items-center sm:rounded-lg">
                    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="flex items-center">
                          <th
                            scope="row"
                            className="w-full px-6 py-4 font-medium text-gray-900"
                          >
                            <div className="mt-4 flex items-center">
                              <div className=" flex justify-center items-center w-8 h-8 mr-5 bg-gray-50 border-2 rounded-full">
                                1
                              </div>
                              <p className="w-56 border-b-2">Tarefa #1</p>
                            </div>
                          </th>

                          <td className="px-6 py-4 text-right ">
                            <span className="border-b-2">+R$0,00</span>
                          </td>
                        </tr>
                        <tr className="flex items-center">
                          <th
                            scope="row"
                            className="w-full px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            <div className="mt-4 flex items-center">
                              <div className=" flex justify-center items-center w-8 h-8 mr-5 bg-gray-50 border-2 rounded-full">
                                2
                              </div>
                              <p className="w-56 border-b-2 mr-30">Tarefa #2</p>
                            </div>
                          </th>

                          <td className="px-6 py-4 text-right">
                            <span className="border-b-2">+R$0,00</span>
                          </td>
                        </tr>
                        <tr className="flex items-center">
                          <th
                            scope="row"
                            className="w-full px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            <div className="mt-4 flex items-center">
                              <div className=" flex justify-center items-center w-8 h-8 mr-5 bg-gray-50 border-2 rounded-full">
                                3
                              </div>
                              <p className="w-56 border-b-2 mr-30">Tarefa #3</p>
                            </div>
                          </th>
                          <td className="px-6 py-4 text-right">
                            <span className="border-b-2">+R$0,00</span>
                          </td>
                        </tr>
                        <tr className="flex items-center">
                          <th
                            scope="row"
                            className="w-full px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            <div className="mt-4 flex items-center">
                              <div className=" flex justify-center items-center w-8 h-8 mr-5 bg-gray-50 border-2 rounded-full">
                                4
                              </div>
                              <p className="w-56 border-b-2 mr-30">Tarefa #4</p>
                            </div>
                          </th>

                          <td className="px-6 py-4 text-right">
                            <span className="border-b-2">+R$0,00</span>
                          </td>
                        </tr>
                        <tr className="flex items-center">
                          <th
                            scope="row"
                            className="w-full px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            <div className="mt-4 flex items-center">
                              <div className=" flex justify-center items-center w-8 h-8 mr-5 bg-gray-50 border-2 rounded-full">
                                5
                              </div>
                              <p className="w-56 border-b-2 mr-30">Tarefa #5</p>
                            </div>
                          </th>

                          <td className="px-6 py-4 text-right">
                            <span className="border-b-2">+R$0,00</span>
                          </td>
                        </tr>
                        <tr className="flex items-center">
                          <th
                            scope="row"
                            className="w-full px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            <div className="mt-4 flex items-center">
                              <div className=" flex justify-center items-center w-8 h-8 mr-5 bg-gray-50 border-2 rounded-full">
                                6
                              </div>
                              <p className="w-56 border-b-2 mr-30">
                                Recompensa!
                              </p>
                            </div>
                          </th>

                          <td className="px-6 py-4 text-right">
                            <span className="border-b-2">+R$0,00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end items-center">
                    <div className=" font-Poppins text-lg flex justify-center items-center w-30 h-8 mr-5">
                      Retorno por cliente:
                    </div>
                    <p className="w-20 border-b-2 mr-10"></p>
                  </div>
                </div>

                {/*footer*/}

                <div
                  className="flex items-center justify-end mt-0
                                border-solid 
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
