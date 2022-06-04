import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartClients = () => {
  var data = {
    labels: ["-R$48,50", "+R$389,90"],
    datasets: [
      {
        label: "# of Votes",
        data: [48.5, 389.9],
        backgroundColor: ["#EAF6ED", "rgba(103, 197, 135, 1)"],
        borderColor: ["#EAF6ED", "rgba(103, 197, 135, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspesctRatio: true,
    scales: {
      
    },

    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div className="">
      <div className="flex h-full px-10">
        <Pie
          height={300}
          width={300}
          data={data}
          options={options}
          className=""
        />
      </div>
      <canvas className="-mb-20 -mt-24 p-10" id="chart"></canvas>
    </div>
  );
};

export default PieChartClients;
