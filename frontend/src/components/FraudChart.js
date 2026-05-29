import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function FraudChart({ stats }) {
  const data = [
    { name: "Fraud Cases", value: stats.fraudCases },
    { name: "Safe Cases", value: stats.safeCases },
  ];

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <div className="chart-panel">
      <h2>Fraud Analytics</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default FraudChart;