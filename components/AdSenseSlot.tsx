interface AdSenseSlotProps {
  slot?: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export default function AdSenseSlot({
  slot = "auto",
  format = "horizontal",
  className = "",
}: AdSenseSlotProps) {
  const heights: Record<string, string> = {
    horizontal: "h-24",
    rectangle: "h-64",
    vertical: "h-96",
  };

  return (
    <div
      className={`w-full ${heights[format]} bg-card/50 border border-border rounded-lg flex items-center justify-center ${className}`}
    >
      {/* AdSense slot goes here */}
      {/* Replace with actual AdSense code: data-ad-slot="${slot}" */}
      <p className="text-slate-700 text-xs">Advertisement</p>
    </div>
  );
}
