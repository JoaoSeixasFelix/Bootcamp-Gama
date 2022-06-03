import Image from "next/image";
import Sneakers from "../../public/IconsTable/Sneakers.svg";
import Disclousure from "./ComponentsGenerics/Disclosure";
import QrCode from "../../public/Icons/qr_code_2.svg";
import Delete from "../../public/Icons/delete.svg";
import { type } from "os";

type PropsTable = {
  Name: string;
  Status: string;
  qantitiesOfCustomers: string;
  start: string;
  icons: string;
};

export const TablePrograms = (props: PropsTable) => {
  return (
    <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase border-y-2 border-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {props.Name}
            </th>
            <th scope="col" className="px-6 py-3">
              {props.Status}
            </th>
            <th scope="col" className="px-6 py-3">
              {props.qantitiesOfCustomers}
            </th>
            <th scope="col" className="px-6 py-3">
              {props.start}
            </th>
            <th scope="col" className="flex justify-center px-6 py-3">
              {props.icons}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center"
            >
              <Image src={Sneakers} />{" "}
              <p className=" ml-4 font-Poppins text-2xl">
                A cada 5 almoços, ganhe um Sneakers!
              </p>
            </th>
            <td className="px-6 py-4">Aberto</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">16/04/2022</td>
            <td className="px-6 py-4 text-right">
              Delete
              <Image src={QrCode} />
              <Image src={Delete} />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center"
            >
              <Image src={Sneakers} />{" "}
              <p className=" ml-4 font-Poppins text-2xl">
                A cada 5 almoços, ganhe um Sneakers!
              </p>
            </th>
            <td className="px-6 py-4">Aberto</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">16/04/2022</td>
            <td className="px-6 py-4 text-right">
              Delete
              <Image src={QrCode} />
              <Image src={Delete} />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center"
            >
              <Image src={Sneakers} />{" "}
              <p className=" ml-4 font-Poppins text-2xl">
                A cada 5 almoços, ganhe um Sneakers!
              </p>
            </th>
            <td className="px-6 py-4">Aberto</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">16/04/2022</td>
            <td className="h-full px-6 py-4 text-right">
              Delete
              <Image src={QrCode} />
              <Image src={Delete} />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center"
            >
              <Image src={Sneakers} />{" "}
              <p className=" ml-4 font-Poppins text-2xl">
                A cada 5 almoços, ganhe um Sneakers!
              </p>
            </th>
            <td className="px-6 py-4">Aberto</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">16/04/2022</td>
            <td className="px-6 py-4 text-right">
              <button>
                <Disclousure />
              </button>
              <Image src={QrCode} className="px-" />
              <Image src={Delete} />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center"
            >
              <Image src={Sneakers} />{" "}
              <p className=" ml-4 font-Poppins text-2xl">
                A cada 5 almoços, ganhe um Sneakers!
              </p>
            </th>
            <td className="px-6 py-4">Aberto</td>
            <td className="px-6 py-4">25</td>
            <td className="px-6 py-4">16/04/2022</td>
            <td className="px-6 py-4 text-right">
              Delete
              <Image src={QrCode} />
              <Image src={Delete} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePrograms;