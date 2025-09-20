import React, { useMemo, useState } from "react";
import { Search, Link as LinkIcon, Video, BarChart3 } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const AnalyticsSeoTools=()=> {
  const [url, setUrl] = useState("");
  const traffic = useMemo(
    () => [
      { day: "Mon", v: 200 },
      { day: "Tue", v: 360 },
      { day: "Wed", v: 300 },
      { day: "Thu", v: 520 },
      { day: "Fri", v: 460 },
      { day: "Sat", v: 610 },
      { day: "Sun", v: 780 },
    ],
    []
  );
  const keywords = ["ai video platform", "seo tools", "rank tracker", "video optimization", "performance analytics"];

  function analyze() {
    // Wire to your backend; this is a placeholder
    if (!url) return;
    console.log("Analyze:", url);
  }

  function KpiCard({ label, value, trend }) {
  return (
    <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
      <div className="mb-1">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
      {trend === "up" && <div className="mt-1 text-emerald-400 text-xs">▲ Up</div>}
      {trend === "down" && <div className="mt-1 text-rose-400 text-xs">▼ Down</div>}
    </div>
  );
}

function ActionPill({ icon, label }) {
  return (
    <button className="flex items-center gap-2 rounded-full  px-4 py-2 text-sm">
      <span className="grid place-items-center h-16 w-16 rounded-full  bg-[#0B1220] ring-1 ring-white/10 hover:ring-blue-500/60">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

  return (
    <div className="min-h-screen bg-[#06090F] text-white antialiased">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mt-10 mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-center flex-1">ANALYTICS & SEO TOOLS</h1>
          <div className="w-24" />
        </div>

        {/* URL Input */}
        <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-3 flex gap-3 items-center mb-6">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className="flex-1 bg-transparent outline-none px-3 py-2 rounded-lg text-[15px] placeholder:text-white/60"
          />
          <button
            onClick={analyze}
            className="rounded-md bg-[#1B49F0] hover:bg-[#2a5dff] px-4 py-2 text-sm font-semibold"
          >
            Analyze
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <KpiCard label="SEO Score" value={<span className="text-3xl font-bold">77</span>} />
          <KpiCard label="Total Views" value={<span className="text-3xl font-bold">35.2K</span>} />
          <KpiCard label="Click-Through Rate" value={<span className="text-3xl font-bold">4.5%</span>} trend="up" />
        </div>

        {/* Traffic & Keywords */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2 rounded-2xl bg-[#0B1220] ring-1 ring-white/10">
            <div className="px-4 py-3 text-white/90 font-medium">Traffic</div>
            <div className="h-64 px-2 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={traffic} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="trafficFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#ffffff10" strokeDasharray="3 3" />
                  <XAxis dataKey="day" stroke="#9fb1d3" tickLine={false} axisLine={false} />
                  <YAxis stroke="#9fb1d3" tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#0B1220", border: "1px solid #1f2940", borderRadius: 12 }}
                    labelStyle={{ color: "#9fb1d3" }}
                  />
                  <Area type="monotone" dataKey="v" stroke="#60a5fa" fill="url(#trafficFill)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Keywords */}
          <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
            <div className="text-white/90 font-medium mb-3">Top Keywords</div>
            <ul className="space-y-3">
              {keywords.map((k) => (
                <li key={k} className="flex items-center gap-3 text-sm">
                  <Search className="h-4 w-4 text-white/80" />
                  <span className="truncate">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          <ActionPill icon={<Search className="h-5 w-5" />} label="Search Rankings" />
          <ActionPill icon={<LinkIcon className="h-5 w-5" />} label="Backlinks" />
          <ActionPill icon={<Video className="h-5 w-5" />} label="Video Optimization" />
          <ActionPill icon={<BarChart3 className="h-5 w-5" />} label="Performance Analytics" />
          <ActionPill icon={<Search className="h-5 w-5" />} label="Keyword Research" />
        </div>
      </div>
    </div>
  );
}


export default AnalyticsSeoTools;