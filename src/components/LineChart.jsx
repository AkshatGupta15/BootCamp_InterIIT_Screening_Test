import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

function LineChart({ chartData }) {
  // Debugging: Log the chartData to verify the timestamps and prices
  console.log("Chart Data:", chartData);

  const data = {
    labels: chartData.map(item => new Date(item.timestamp).toLocaleString()),
    datasets: [
      {
        label: 'Price',
        data: chartData.map(item => item.price),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Price Over Time',
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
        },
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-md">
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;