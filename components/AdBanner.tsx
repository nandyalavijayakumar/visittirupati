interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div className={`text-center my-6 ${className}`}>
      <p className="text-[#8B7355] text-xs mb-2">Advertisement</p>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 p-4 rounded-lg min-h-[90px] flex items-center justify-center">
        <div className="text-center">
          <span className="text-gray-500 text-sm font-medium">Google AdSense</span>
          <p className="text-gray-400 text-xs mt-1">Replace with your AdSense ad unit</p>
        </div>
      </div>
    </div>
  );
}