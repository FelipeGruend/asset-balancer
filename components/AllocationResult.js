export default function AllocationResult({ allocationResult }) {
    return (
      <div>
        <h2>New Allocation</h2>
        {Object.keys(allocationResult.newAllocation).map((asset) => (
          <p key={asset}>{asset}: {allocationResult.newAllocation[asset].toFixed(2)} (Invest {allocationResult.investmentNeeded[asset].toFixed(2)})</p>
        ))}
      </div>
    );
  }
  