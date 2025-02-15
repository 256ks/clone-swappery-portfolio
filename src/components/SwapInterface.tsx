
import { useState } from 'react';
import { Settings, Info } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const SwapInterface = () => {
  const { toast } = useToast();
  const [maxSlippage, setMaxSlippage] = useState('Auto');
  const [sellAmount, setSellAmount] = useState('');
  const [buyAmount, setBuyAmount] = useState('');

  const handleSwap = () => {
    if (!sellAmount || !buyAmount) {
      toast({
        variant: "destructive",
        description: "Please enter both amounts",
      });
      return;
    }
    
    toast({
      description: "Swap initiated",
    });
  };

  const calculateBuyAmount = (sellAmount: string) => {
    // Mock conversion rate: 1 USDC = 0.0004 ETH
    const numericAmount = parseFloat(sellAmount);
    if (!isNaN(numericAmount)) {
      setBuyAmount((numericAmount * 0.0004).toFixed(6));
    } else {
      setBuyAmount('');
    }
  };

  const handleSellAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSellAmount(value);
    calculateBuyAmount(value);
  };

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

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Max slippage</span>
          <button 
            className="hover:bg-gray-100 rounded-full p-1 transition-colors"
            onClick={() => toast({ description: "Controls the maximum price movement you'll accept" })}
          >
            <Info className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button 
            className={`px-3 py-1 rounded-full ${maxSlippage === 'Auto' ? 'text-uniswap-pink bg-[#FAD7ED]' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setMaxSlippage('Auto')}
          >
            Auto
          </button>
          <button 
            className={`px-3 py-1 rounded-full ${maxSlippage === '5.50%' ? 'text-uniswap-pink bg-[#FAD7ED]' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setMaxSlippage('5.50%')}
          >
            5.50%
          </button>
        </div>
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
              value={sellAmount}
              onChange={handleSellAmountChange}
              className="bg-transparent text-2xl font-mono outline-none w-full" 
            />
            <button className="flex items-center gap-2 bg-white rounded-full py-[8px] px-[12px]">
              <img alt="USDC" src="/lovable-uploads/fa9d275c-8577-4f1e-8c40-8e5a04766cc9.png" className="w-6 h-6" />
              <span className="px-[20px]">USDC</span>
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
              value={buyAmount}
              readOnly
              className="bg-transparent text-2xl font-mono outline-none w-full" 
            />
            <button className="flex items-center gap-2 bg-white py-2 rounded-full px-[12px]">
              <img alt="ETH" className="w-6 h-6" src="/lovable-uploads/60b7bd4f-6029-47f8-acf8-ed922c1a50d4.png" />
              <span className="py-0 mx-0 my-0 px-[20px]">ETH</span>
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={handleSwap}
        disabled={!sellAmount || !buyAmount}
        className={`w-full py-4 text-center rounded-2xl transition-colors ${
          sellAmount && buyAmount 
            ? 'bg-uniswap-pink text-white hover:bg-opacity-90' 
            : 'bg-[#F5F6FC] text-[#BBBFCC]'
        }`}
      >
        {sellAmount && buyAmount ? 'Swap' : 'Enter an amount'}
      </button>
    </div>
  );
};

export default SwapInterface;
