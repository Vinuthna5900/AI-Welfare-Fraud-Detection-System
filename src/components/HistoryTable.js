import React, { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";

function HistoryTable() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await fetchHistory();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="history-panel">
      <h2>Prediction History</h2>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Status</th>
            <th>Confidence</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.timestamp}</td>
              <td>{item.status}</td>
              <td>{(item.confidence * 100).toFixed(1)}%</td>
              <td>{item.fraud_alert ? "High Risk" : "Safe"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;