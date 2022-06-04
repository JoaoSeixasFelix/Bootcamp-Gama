import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  var data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "",
        data: [40, 88, 60, 39, 63, 94, 4, 42, 2, 3, 99, 5],
        backgroundColor: [
          "#0263FF)",
          "#FF7723",
          "#8E30FF",
          "#ED54DD",
          "#C60BB9",
          "#BF65DD",
          "#AF9F1C",
          "#029A9E",
          "#D95550",
          "#D95550",
          "#8E5E8C",
          "#68A7B7",
        ],
        borderColor: [
          "#0263FF)",
          "#FF7723",
          "#8E30FF",
          "#ED54DD",
          "#C60BB9",
          "#BF65DD",
          "#AF9F1C",
          "#029A9E",
          "#D95550",
          "#D95550",
          "#8E5E8C",
          "#68A7B7",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspesctRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
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
        <Bar
          height={300}
          width={300}
          data={data}
          options={options}
          className=""
        />
      </div>
      <canvas className="p-10" id="chart"></canvas>
    </div>
  );
};

export default BarChart;
