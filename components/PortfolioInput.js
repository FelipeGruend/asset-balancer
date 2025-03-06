export default function PortfolioInput({ portfolio, setPortfolio }) {
    return (
      <div class='w-full max-w-md bg-white p-6 rounded-xl shadow-md'>
        <h2>Current Portfolio</h2>
        {Object.keys(portfolio).map((asset) => (
          <div key={asset}>
            <label>{asset}: </label>
            <input
              type="number"
              value={portfolio[asset]}
              onChange={(e) => setPortfolio({ ...portfolio, [asset]: Number(e.target.value) })}
            />
          </div>
        ))}
      </div>
    );
  }
  