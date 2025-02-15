
import { useState } from 'react';
import { Settings } from 'lucide-react';

const SwapInterface = () => {
  const [maxSlippage, setMaxSlippage] = useState('Auto');

  return (
    <div className="bg-white rounded-2xl border p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-uniswap-pink text-white rounded-full hover:bg-opacity-90 transition-colors">
            Swap
          </button>
          <button className="px-4 py-2 text-sm bg-[#FAD7ED] text-uniswap-pink rounded-full hover:bg-opacity-90 transition-colors">
            Add liquidity
          </button>
        </div>
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="bg-uniswap-light-gray p-4 rounded-xl">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Sell</span>
            <span className="text-sm text-gray-600">Balance: 0 USDC</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="0"
              className="bg-transparent text-2xl font-mono outline-none w-full"
            />
            <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-full">
              <img src="/lovable-uploads/5c64e6d1-be8c-446b-a571-5d5065606f8e.png" alt="USDC" className="w-6 h-6" />
              <span>USDC</span>
            </button>
          </div>
        </div>

        <div className="bg-uniswap-light-gray p-4 rounded-xl">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Buy</span>
            <span className="text-sm text-gray-600">Balance: 0 ETH</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="0"
              className="bg-transparent text-2xl font-mono outline-none w-full"
            />
            <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-full">
              <img src="/lovable-uploads/5c64e6d1-be8c-446b-a571-5d5065606f8e.png" alt="ETH" className="w-6 h-6" />
              <span>ETH</span>
            </button>
          </div>
        </div>
      </div>

      <button className="w-full py-4 text-center bg-[#F5F6FC] rounded-2xl text-[#BBBFCC]">
        Enter an amount
      </button>
    </div>
  );
};

export default SwapInterface;
