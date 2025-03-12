import { Button } from "@/components/ui/button";

export function FancyButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      asChild
      variant="outline"
      className="absolute top-4 right-4 z-20 bg-transparent text-white hover:text-black 
                 hover:animate-pulse transition-all duration-500"
      style={{
        background: "linear-gradient(90deg, #ff00ff, #00ffff, #ffcc00, #ff6600)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 3s infinite alternate",
      }}
    >
      {children}
    </Button>
  );
}
