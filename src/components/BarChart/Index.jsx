import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Fresher", "Expenses"],
  ["2020", 300, 120],
  ["2021", 500, 200],
  ["2022", 800, 350],
  ["2023", 900, 440],
];

export const options = {
  chart: {
    title: "Institute Performance",
    subtitle: "Fresher,and Expenses : 2020-2023",
  },
};

export function App() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default App;