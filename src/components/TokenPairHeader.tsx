import { ArrowUp, Settings } from 'lucide-react';
const TokenPairHeader = () => {
  return <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img alt="USDC/ETH" className="w-8 h-8" src="/lovable-uploads/da75e3d5-da6e-42d3-a78b-d6d04b8e83f6.jpg" />
          <span className="text-xl font-semibold">USDC / ETH</span>
        </div>
        <span className="text-sm bg-uniswap-light-gray px-2 py-1 rounded">v2</span>
        <span className="text-sm text-uniswap-gray">0.03%</span>
        <ArrowUp className="w-4 h-4 text-green-500" />
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>;
};
export default TokenPairHeader;