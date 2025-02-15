
import { useEffect, useRef } from 'react';
import { Chart } from 'recharts';

const MOCK_DATA = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  volume: Math.random() * 70,
}));

const PriceChart = ({ timeframe, onTimeframeChange }) => {
  const timeframes = ['1H', '1D', '1W', '1M', '1Y'];

  return (
    <div className="bg-white rounded-2xl border p-6 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-mono font-semibold">$298.73M</h2>
          <p className="text-sm text-uniswap-gray">Past day</p>
        </div>
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => onTimeframeChange(tf)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                timeframe === tf
                  ? 'bg-uniswap-light-gray text-black'
                  : 'text-uniswap-gray hover:text-black'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[300px] animate-chart-slide">
        {/* Chart visualization would go here - using a placeholder for now */}
        <div className="h-full flex items-end gap-1">
          {MOCK_DATA.map((data, i) => (
            <div
              key={i}
              style={{ height: `${data.volume}%` }}
              className="flex-1 bg-uniswap-pink opacity-80 rounded-t"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
