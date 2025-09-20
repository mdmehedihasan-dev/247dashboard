import React from "react";
import { Zap, Sparkles, Palette } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#071128] flex flex-col items-center justify-center text-white px-4 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to the Next-Gen <br className="hidden md:block" /> AI Video
        Platform!
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-lg text-white/70 max-w-2xl mb-10">
        Select a tool from the sidebar to get started, or try our guided tour.
      </p>

      {/* Features */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <Zap className="h-8 w-8 text-yellow-400" />
          <span className="font-medium">Fastest Render</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Sparkles className="h-8 w-8 text-blue-400" />
          <span className="font-medium">Most Powerful AI</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Palette className="h-8 w-8 text-indigo-400" />
          <span className="font-medium">Unlimited Design</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
