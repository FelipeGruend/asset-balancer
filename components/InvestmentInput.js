export default function InvestmentInput({ investment, setInvestment, calculateRebalancing }) {
    return (
      <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-md mt-4">
        <h2 class="text-xl font-semibold mb-4">Investment Amount</h2>
        <input class="block w-full p-2 border rounded" type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} />
        <button onClick={calculateRebalancing}>Calculate</button>
      </div>
    );
  }
  