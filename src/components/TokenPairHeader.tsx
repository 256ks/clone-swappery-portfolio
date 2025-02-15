
import { ArrowUp, Settings } from 'lucide-react';

const TokenPairHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/5c64e6d1-be8c-446b-a571-5d5065606f8e.png" alt="USDC/ETH" className="w-8 h-8" />
          <span className="text-xl font-semibold">USDC / ETH</span>
        </div>
        <span className="text-sm bg-uniswap-light-gray px-2 py-1 rounded">v3</span>
        <span className="text-sm text-uniswap-gray">0.05%</span>
        <ArrowUp className="w-4 h-4 text-green-500" />
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TokenPairHeader;
