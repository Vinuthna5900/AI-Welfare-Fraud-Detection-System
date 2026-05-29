import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import PredictionForm from "./components/PredictionForm";
import ResultCard from "./components/ResultCard";
import FraudChart from "./components/FraudChart";
import HistoryTable from "./components/HistoryTable";
import { predictFraud } from "./services/api";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [stats, setStats] = useState({
    totalCases: 0,
    fraudCases: 0,
    safeCases: 0,
    fraudRate: 0,
  });

  const handlePrediction = async (data) => {
    try {
      setLoading(true);

      const response = await predictFraud(data);

      setResult(response);

      const total = stats.totalCases + 1;
      const fraud = response.fraud_alert
        ? stats.fraudCases + 1
        : stats.fraudCases;

      const safe = response.fraud_alert
        ? stats.safeCases
        : stats.safeCases + 1;

      setStats({
        totalCases: total,
        fraudCases: fraud,
        safeCases: safe,
        fraudRate: ((fraud / total) * 100).toFixed(1),
      });

    } catch (error) {
      alert(error.response?.data?.error || "Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Sidebar setActiveTab={setActiveTab} />

      <div className="main-content">
        <div className="header">
          <h1>AI-Powered Welfare Fraud Detection Dashboard</h1>
        </div>

        {activeTab === "dashboard" && (
          <>
            <div className="stats-grid">
              <StatsCard title="Total Cases" value={stats.totalCases} />
              <StatsCard title="Fraud Cases" value={stats.fraudCases} />
              <StatsCard title="Safe Cases" value={stats.safeCases} />
              <StatsCard title="Fraud Rate" value={`${stats.fraudRate}%`} />
            </div>

            <div className="dashboard-grid">
              <div className="form-panel">
                <h2>Applicant Details</h2>
                <PredictionForm
                  onPredict={handlePrediction}
                  loading={loading}
                />
              </div>

              <div className="result-panel">
                <ResultCard result={result} />
              </div>
            </div>
          </>
        )}

        {activeTab === "analytics" && <FraudChart stats={stats} />}

        {activeTab === "history" && <HistoryTable />}
      </div>
    </div>
  );
}

export default App;