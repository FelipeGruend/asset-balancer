import { useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState({});
  const [targetAllocation, setTargetAllocation] = useState({});
  const [investment, setInvestment] = useState(0);
  const [allocationResult, setAllocationResult] = useState(null);

  const handlePortfolioChange = (e) => {
    const { name, value } = e.target;
    setPortfolio((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleTargetChange = (e) => {
    const { name, value } = e.target;
    setTargetAllocation((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const calculateRebalancing = () => {
    const totalCurrent = Object.values(portfolio).reduce((acc, val) => acc + val, 0);
    const totalNew = totalCurrent + investment;
    let newAllocation = {};
    let investmentNeeded = {};

    for (let asset in targetAllocation) {
      newAllocation[asset] = (targetAllocation[asset] / 100) * totalNew;
      investmentNeeded[asset] = newAllocation[asset] - (portfolio[asset] || 0);
    }

    setAllocationResult({ newAllocation, investmentNeeded });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Asset Balancer</h1>
      
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Current Portfolio</h2>
        {Object.keys(portfolio).map((key) => (
          <div key={key} className="mb-2">
            <label className="block text-gray-700">{key}</label>
            <input
              type="number"
              name={key}
              placeholder={`${key} amount`}
              className="block w-full p-2 border rounded"
              value={portfolio[key]}
              onChange={handlePortfolioChange}
            />
          </div>
        ))}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded mt-2"
          onClick={() => setPortfolio({ fixed_income: 0, stocks: 0, dollar: 0 })}
        >
          Add Default Assets
        </button>
      </div>
      
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-4">Target Allocation (%)</h2>
        {Object.keys(portfolio).map((key) => (
          <div key={key} className="mb-2">
            <label className="block text-gray-700">{key}</label>
            <input
              type="number"
              name={key}
              placeholder={`${key} %`}
              className="block w-full p-2 border rounded"
              value={targetAllocation[key] || ""}
              onChange={handleTargetChange}
            />
          </div>
        ))}
      </div>
      
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-4">New Investment</h2>
        <input
          type="number"
          placeholder="Amount to Invest"
          className="block w-full p-2 border rounded"
          value={investment}
          onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
        />
        <button
          className="w-full bg-green-500 text-white py-2 rounded mt-2"
          onClick={calculateRebalancing}
        >
          Calculate Rebalancing
        </button>
      </div>
      
      {allocationResult && (
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-4">New Allocation</h2>
          {Object.entries(allocationResult.newAllocation).map(([key, value]) => (
            <p key={key} className="text-gray-700">{key}: ${value.toFixed(2)} (Invest: ${allocationResult.investmentNeeded[key].toFixed(2)})</p>
          ))}
        </div>
      )}
    </div>
  );
}
