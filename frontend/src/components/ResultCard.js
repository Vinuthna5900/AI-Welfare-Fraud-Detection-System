import React from "react";

function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="result-card">
      <h2>Prediction Result</h2>

      <div className="result-item">
        <span>Status:</span>
        <strong>{result.status}</strong>
      </div>

      <div className="result-item">
        <span>Prediction:</span>
        <strong>{result.prediction}</strong>
      </div>

      <div className="result-item">
        <span>Confidence:</span>
        <strong>{result.confidence}%</strong>
      </div>

      <div className="result-item">
        <span>Fraud Alert:</span>
        <strong className={result.fraud_alert ? "danger" : "safe"}>
          {result.fraud_alert ? "HIGH RISK" : "SAFE"}
        </strong>
      </div>
    </div>
  );
}

export default ResultCard;