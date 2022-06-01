import className from "classnames";
import Image from "next/image";
import Disclousure from "./Disclosure";

type Props = {
  item?: string;
  points?: string;
  picture?: string | object | any;
  restaurantName?: string;
  contact?: string;
  localization?: string;
  validate?: string;
  favIcon?: string | object | any;
  promotion?: string;
};

type ScreenPointsProps = {
  item?: string;
  points?: string;
  picture?: string | object | any;
  restaurantName?: string;
  contact?: string;
  localization?: string;
  validate?: string;
  promotion?: string;
};

export const restaurantDescription = (item: Props) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <div className="flex flex-col border-solid border-2 border-gray-200 rounded-xl items-center">
        <Image src={item.picture} />
        <div className={"restaurant-description w-full flex justify-between"}>
          <div className="dish-description mt-2 ml-4">
            <p className="">{item.restaurantName}</p>
            <li className={"model-plate ml-2 text-zinc-500 text-xs"}>
              {item.contact}
            </li>
            <li className="ml-2 text-zinc-500 text-xs">{item.localization}</li>
          </div>
          <div className={"dish-description flex justify-center mr-4"}>
            <Image src={item.favIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ScreenPoints = (propsPoints: ScreenPointsProps) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <div className="flex flex-col border-solid border-2 border-gray-200 rounded-xl items-center">
        <Image src={propsPoints.picture} className={"rounded-t-xl"} />
        <div
          className={
            "restaurant-description flex justify-between h-full w-full"
          }
        >
          <div className="dish-description w-full mt-2 ml-2 justify-center">
            <p className={"model-plate text-base text-gray-700"}>
              {propsPoints.promotion}
            </p>

            <p className="user-points text-sm text-emerald-400">
              {propsPoints.points}
            </p>
            <div className="flex flex-col text-sm">
              <span className="w-11/12 font-Roboto mr-2 text-sm text-gray-600">
                {propsPoints.restaurantName}
              </span>
              <Disclousure />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default restaurantDescription;
