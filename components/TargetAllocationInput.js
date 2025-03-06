export default function TargetAllocationInput({ targetAllocation, setTargetAllocation }) {
    return (
      <div class='w-full max-w-md bg-white p-6 rounded-xl shadow-md mt-4'>
        <h2>Target Allocation (%)</h2>
        {Object.keys(targetAllocation).map((asset) => (
          <div key={asset}>
            <label>{asset}: </label>
            <input
              type="number"
              value={targetAllocation[asset]}
              onChange={(e) => setTargetAllocation({ ...targetAllocation, [asset]: Number(e.target.value) })}
            />
          </div>
        ))}
      </div>
    );
  }
  