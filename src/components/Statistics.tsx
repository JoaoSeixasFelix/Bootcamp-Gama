import Description from "./Description";
import TablePrograms from "./Table";
import TableClients from "./TableClients";

export const Statistics = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col h-36 w-4/5 ml-5 justify-center">
          <div className="flex h-3/4 items-center font-Poppins text-5xl">
            <Description myprograms={"Estatísticas"} />
          </div>
          <div className="flex h-1/4 text-lg mb-3 items-end">
            <Description
              salutation={
                "Acompanhe os dados e os retornos sobre o seu negócio."
              }
            />
          </div>
        </div>
        <div className="flex flrex-row items-center justify-around mt-3">
          <div className="flex justify-center w-96 h-96 bg-gray-700 items-center">
            Graph 1
          </div>
          <div className="flex w-96 h-96 bg-gray-700 ">Graph 2</div>
        </div>
        <div className="flex w-full items-center mt-10 justify-center">
          <div className="flex w-4/5 justify-center h-96 bg-gray-700 ">Insert Grapch Bar Here!</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
