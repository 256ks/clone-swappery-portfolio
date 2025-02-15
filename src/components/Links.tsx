
import { Copy, ExternalLink } from 'lucide-react';

const Links = () => {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h3 className="text-xl font-semibold mb-4">Links</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <img src="/lovable-uploads/fa9d275c-8577-4f1e-8c40-8e5a04766cc9.png" alt="ETH" className="w-5 h-5" />
              <img src="/lovable-uploads/60b7bd4f-6029-47f8-acf8-ed922c1a50d4.png" alt="USDC" className="w-5 h-5" />
            </div>
            <span>ETH / USDC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">0x88e6...5640</span>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <Copy className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/60b7bd4f-6029-47f8-acf8-ed922c1a50d4.png" alt="ETH" className="w-5 h-5" />
            <span>ETH</span>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/fa9d275c-8577-4f1e-8c40-8e5a04766cc9.png" alt="USDC" className="w-5 h-5" />
            <span>USDC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">0xA0b8...eB48</span>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <Copy className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
