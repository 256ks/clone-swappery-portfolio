
import { Copy, ExternalLink } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Links = () => {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Address copied to clipboard",
      duration: 2000,
    });
  };

  const handleExternalLink = (type: string) => {
    let url = '';
    switch (type) {
      case 'pair':
        url = 'https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640';
        break;
      case 'eth':
        url = 'https://etherscan.io/token/eth';
        break;
      case 'usdc':
        url = 'https://etherscan.io/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
        break;
    }
    window.open(url, '_blank');
  };

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
            <button 
              onClick={() => handleCopy('0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640')}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Copy className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={() => handleExternalLink('pair')}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/60b7bd4f-6029-47f8-acf8-ed922c1a50d4.png" alt="ETH" className="w-5 h-5" />
            <span>ETH</span>
          </div>
          <button 
            onClick={() => handleExternalLink('eth')}
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          >
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
            <button 
              onClick={() => handleCopy('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Copy className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={() => handleExternalLink('usdc')}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
