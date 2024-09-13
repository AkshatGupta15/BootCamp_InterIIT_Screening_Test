// ./components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({fetchData}) => {
    const labels = ["RELIANCE", "TCS", "HDFCBANK"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Nifty 50",
      backgroundColor: [
        "#FF7777",
        '#684BDB',
        '#2BEBC7',
      ],
      borderColor: [
        "#FF7777",
        '#684BDB',
        '#2BEBC7',
      ],
      borderWidth: 1,
      hoverOffset: 5,
      data: [fetchData[0].change, fetchData[1].change, fetchData[2].change],
      cutout: '60%',
    },
  ],
};
  return (
    <div>
      <Doughnut data={data}/>
    </div>
  );
};
export default DoughnutChart;