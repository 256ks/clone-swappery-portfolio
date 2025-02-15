
const StatsSection = () => {
  return (
    <div className="bg-white rounded-2xl border p-6 space-y-6">
      <h3 className="text-xl font-semibold">Stats</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-uniswap-gray mb-2">Pool balances</h4>
          <div className="flex items-center gap-2">
            <span className="text-lg font-mono">74.5M USDC</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-[60%] h-full bg-uniswap-pink" />
            </div>
            <span className="text-lg font-mono">35.7K ETH</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-uniswap-gray mb-1">TVL</h4>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono">$171.8M</span>
            <span className="text-sm text-green-500">↑0.07%</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-uniswap-gray mb-1">24H volume</h4>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono">$27.1M</span>
            <span className="text-red-500 text-sm">↓40.53%</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-uniswap-gray mb-1">24H fees</h4>
          <span className="text-2xl font-mono">$13.5K</span>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
