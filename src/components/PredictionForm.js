import React, { useState } from "react";

const stateMap = {
  Telangana: 6,
  Maharashtra: 4,
  "Tamil Nadu": 5,
  Karnataka: 3,
  "Andhra Pradesh": 0,
};

const occupationMap = {
  Farmer: 0,
  Business: 1,
  "Government Job": 2,
  "Daily Wage": 3,
  "Private Employee": 4,
};

const ageMap = {
  Adult: 0,
  Senior: 1,
  Child: 2,
};

function PredictionForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    State: 6,
    Income: "",
    Family_Size: "",
    Land_Owned: 0,
    Occupation: 0,
    Aadhaar_Linked: 1,
    Existing_Benefits: 0,
    Total_Ration_Cards: 1,
    Age_Group: 0,
    Eligible: 0,
    Duplicate_Flag: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form className="prediction-form" onSubmit={handleSubmit}>
      <div>
        <label>State</label>
        <select name="State" onChange={handleChange}>
          {Object.entries(stateMap).map(([name, value]) => (
            <option key={name} value={value}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Income</label>
        <input type="number" name="Income" onChange={handleChange} required />
      </div>

      <div>
        <label>Family Size</label>
        <input type="number" name="Family_Size" onChange={handleChange} required />
      </div>

      <div>
        <label>Occupation</label>
        <select name="Occupation" onChange={handleChange}>
          {Object.entries(occupationMap).map(([name, value]) => (
            <option key={name} value={value}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Age Group</label>
        <select name="Age_Group" onChange={handleChange}>
          {Object.entries(ageMap).map(([name, value]) => (
            <option key={name} value={value}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Aadhaar Linked</label>
        <select name="Aadhaar_Linked" onChange={handleChange}>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
      </div>

      <div>
        <label>Existing Benefits</label>
        <input type="number" name="Existing_Benefits" onChange={handleChange} />
      </div>

      <div>
        <label>Total Ration Cards</label>
        <input type="number" name="Total_Ration_Cards" onChange={handleChange} />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Analyzing..." : "Predict Fraud"}
      </button>
    </form>
  );
}

export default PredictionForm;