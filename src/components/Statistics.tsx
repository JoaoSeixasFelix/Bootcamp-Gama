import BarChart from "./BarCharts";
import Description from "./Description";
import PieChart from "./PieChartClients";
import PieChartClients from "./PieChartPrograms";
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
        <div className="flex flrex-row items-center justify-around mt-10">
          <div className="flex flex-col justify-center w-80 h-80 bg-slate-50 items-center">
            <span>Retorno com programas</span>
            <PieChartClients />
          </div>
          <div className="flex flex-col justify-center w-80 h-80  bg-slate-50 items-center">
            <span>Retorno com programas</span>
            <PieChart />
          </div>
        </div>
        <div className="flex w-full items-center mt-6 justify-center">
          <div className="flex w-full justify-center h-96">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
