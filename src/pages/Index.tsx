
import { useState } from 'react';
import TokenPairHeader from '../components/TokenPairHeader';
import PriceChart from '../components/PriceChart';
import SwapInterface from '../components/SwapInterface';
import StatsSection from '../components/StatsSection';
import TransactionsTable from '../components/TransactionsTable';
import Links from '../components/Links';

const Index = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
          <div className="space-y-6">
            <TokenPairHeader />
            <PriceChart timeframe={selectedTimeframe} onTimeframeChange={setSelectedTimeframe} />
            <TransactionsTable />
          </div>
          <div className="space-y-6">
            <SwapInterface />
            <StatsSection />
            <Links />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
