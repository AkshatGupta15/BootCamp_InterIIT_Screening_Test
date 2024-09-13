import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/data.js";
import LineChart from "./LineChart.jsx";
// import "./styles.css";

Chart.register(CategoryScale);

export default function Charts() {
  // Group the data by symbol
  const groupedData = Data.reduce((acc, data) => {
    if (!acc[data.symbol]) {
      acc[data.symbol] = [];
    }
    acc[data.symbol].push(data);
    return acc;
  }, {});

  // Create an array of chartData for each symbol
  const chartDataArray = Object.entries(groupedData).map(([symbol, data]) => ({
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()), // Convert timestamp to time
    datasets: [
      {
        label: "Price",
        data: data.map(d => d.price),
        fill: false,
        borderColor: "blue"
      }
    ]
  }));

  return (
    <div className="w-full">
        <div className="flex">
          {/* <div>Symbol: {Object.keys(groupedData)[index]}</div> */}
          
          <LineChart chartData={chartDataArray[0]} />
          <LineChart chartData={chartDataArray[0]} />
          <LineChart chartData={chartDataArray[0]} />
        </div>
      {/* {chartDataArray.map((chartData, index) => (
        <div key={index}>
          <div>Symbol: {Object.keys(groupedData)[index]}</div>
          <LineChart chartData={chartData} />
        </div>
      ))} */}
    </div>
  );
}
