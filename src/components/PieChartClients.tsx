import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  var data = {
    labels: ["Jan", "Fev"],
    datasets: [
      {
        label: "# of Votes",
        data: [37, 63],
        backgroundColor: ["#EAF6ED", "rgba(66, 133, 244, 1)"],
        borderColor: ["#EAF6ED", "rgba(66, 133, 244, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspesctRatio: true,
    scales: {},

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

export default PieChart;
