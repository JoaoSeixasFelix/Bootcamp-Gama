import className from "classnames";
import Image from "next/image";
import Disclousure from "./Disclosure";

type Props = {
  item?: string;
  points?: string;
  picture?: string | object | any;
  restaurantName?: string;
  plateModel?: string;
  localization?: string;
  validate?: string;
  favIcon?: string | object | any;
  promotion?: string;
};

export const restaurantDescription = (item: Props) => {
  const list = item.points ? "" : "list-item";

  return (
    <div className="flex justify-center items-center mb-6">
      <div className="flex flex-col border-solid border-2 border-gray-200 rounded-xl items-center">
        <Image src={item.picture} />

        <div
          className={className(
            `restaurant-description flex ${
              item.points ? "flex-col-reverse" : ""
            } justify-between h-full w-72`
          )}
        >
          {item.points ? (
            <div className="flex justify-end">
              <Disclousure />
            </div>
          ) : (
            ""
          )}

          <div className="dish-description w-screen mt-2 justify-center items-start">
            <p className={`model-plate text-base text-gray-700 `}>
              {item.promotion}
            </p>
            <p className="">{item.restaurantName}</p>

            <p className="user-points text-sm text-emerald-400">
              {item.points}
            </p>

            <p className={`model-plate ${list} ml-4 text-zinc-500 text-xs`}>
              {item.plateModel}
            </p>

            <p className="ml-0 text-zinc-500 text-xs">{item.localization}</p>

            <p className="font-light">{item.validate}</p>
          </div>

          <div className={"dish-description mt-6 justify-center items-center"}>
            {item.points ? "" : <Image src={item.favIcon} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default restaurantDescription;
