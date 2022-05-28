import Image from "next/image";

export const restaurantDescription = (item) => {
  const list = item.points ? "" : "list-item";

  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <div className="flex flex-col min-w-fit border-solid border-2 border-gray-200 rounded-xl items-center">
        <Image src={item.picture} />

        <div className="restaurant-description flex items-center justify-between w-72">
          <div className="dish-description mt-2">
            <p className="text-base">{item.restaurantName}</p>

            <p className="user-points text-base text-emerald-400">
              {item.points}
            </p>

            <p className={`model-plate ${list} ml-4 text-zinc-500 text-xs`}>
              {item.plateModel}
            </p>

            <p className="ml-0 text-zinc-500 text-xs">{item.localization}</p>

            <p className="font-light">{item.validate}</p>
          </div>

          <div>{item.points ? "" : <Image src={item.favIcon} />}</div>
        </div>
      </div>
    </div>
  );
};

export default restaurantDescription;
