
const MOCK_TRANSACTIONS = [
  {
    time: '12m ago',
    type: 'Remove',
    usd: 50731.53,
    usdc: 12842.69,
    eth: 13.8957,
  },
  {
    time: '12m ago',
    type: 'Sell USDC',
    usd: 4003.65,
    usdc: 4000,
    eth: 1.46967,
  },
  // ... Add more mock transactions
];

const TransactionsTable = () => {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm text-uniswap-gray">
            <th className="text-left font-normal pb-4">Time</th>
            <th className="text-left font-normal pb-4">Type</th>
            <th className="text-right font-normal pb-4">USD</th>
            <th className="text-right font-normal pb-4">USDC</th>
            <th className="text-right font-normal pb-4">ETH</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_TRANSACTIONS.map((tx, i) => (
            <tr key={i} className="border-t text-sm">
              <td className="py-4">{tx.time}</td>
              <td className={`py-4 ${tx.type.includes('Sell') ? 'text-red-500' : ''}`}>
                {tx.type}
              </td>
              <td className="text-right py-4 font-mono">${tx.usd.toLocaleString()}</td>
              <td className="text-right py-4 font-mono">{tx.usdc.toLocaleString()}</td>
              <td className="text-right py-4 font-mono">{tx.eth.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
