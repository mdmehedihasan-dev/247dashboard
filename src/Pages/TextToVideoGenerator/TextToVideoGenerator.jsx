import React, { useState } from "react";
import { Play, Check } from "lucide-react";

const TextToVideoGenerator =()=> {
  const [prompt, setPrompt] = useState("");
  const [opts, setOpts] = useState({
    aiRewrite: true,
    brandColors: true,
    smartScene: false,
    stockFootage: false,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0.4);

  function toggle(k) {
    setOpts((o) => ({ ...o, [k]: !o[k] }));
  }

  async function handleGenerate() {
    setIsGenerating(true);
    // TODO: call your backend here
    await new Promise((r) => setTimeout(r, 1000));
    setIsGenerating(false);
  }

  const videoTypes = [
    "Create Short Video",
    "Make Explainer",
    "Create Animated FI",
    "Use My Script",
    "Make Audiogram",
    "Social Clip",
    "Reel/Story",
    "Multi‑Language",
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
          <h1 className="text-2xl md:text-4xl font-extrabold">Text‑to‑Video Generator</h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left: Prompt + options */}
          <div>
            <div className="rounded-2xl ring-1 ring-white/10 bg-[#0B1220] p-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                placeholder={
                  "Give me a topic, premise and detailed instructions in any language\n\n or drag & drop your script"
                }
                className="w-full bg-[#0E1A3D] ring-1 ring-white/10 rounded-xl p-4 outline-none placeholder:text-cyan-300/70 text-cyan-300"
              />

              {/* Options */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Toggle label="AI Rewrite" checked={opts.aiRewrite} onClick={() => toggle("aiRewrite")} />
                <Toggle label="Smart Scene" checked={opts.smartScene} onClick={() => toggle("smartScene")} />
                <Toggle label="Brand Colors" checked={opts.brandColors} onClick={() => toggle("brandColors")} />
                <Toggle label="Stock Footage" checked={opts.stockFootage} onClick={() => toggle("stockFootage")} />
              </div>

              <div className="mt-4">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="inline-flex items-center justify-center rounded-lg bg-[#2457FF] hover:bg-[#3767ff] disabled:opacity-70 px-4 py-2 text-sm font-semibold"
                >
                  {isGenerating ? "Generating…" : "Generate a Video"}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Preview */}
          <div>
            <div className="rounded-2xl ring-1 ring-white/10 bg-[#0B1220] p-4 h-full">
              <div className="h-60 rounded-xl bg-black grid place-items-center ring-1 ring-white/10">
                <button className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/10 ring-1 ring-white/20">
                  <Play className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6">
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white/70" style={{ width: `${progress * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Types */}
        <div className="mt-8">
          <div className="text-xs tracking-wider text-white/70 mb-3">VIDEO TYPES</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {videoTypes.map((t) => (
              <button
                key={t}
                className="flex items-center gap-2 rounded-lg bg-[#0B1220] ring-1 ring-white/10 hover:ring-blue-500/60 px-3 py-2 text-sm"
              >
                <span className="inline-block h-8 w-8 rounded-md bg-[#0E1A3D]" />
                <span className="truncate">{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Row */}
        <div className="mt-10 grid grid-cols-2 gap-6 md:w-1/2">
          <button className="flex items-center gap-2 text-white/80">
            <span className="h-7 w-7 rounded-full bg-[#0E1A3D] grid place-items-center">⚙️</span>
            Workflows
          </button>
          <button className="flex items-center gap-2 text-white/80">
            <span className="h-7 w-7 rounded-full bg-[#0E1A3D] grid place-items-center">🧩</span>
            Plugins
          </button>
        </div>
      </div>
    </div>
  );
}
export default TextToVideoGenerator;

function Toggle({ label, checked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ring-1 ring-white/10 ${
        checked ? "bg-[#0E1A3D]" : "bg-transparent hover:ring-blue-500/60"
      }`}
      aria-pressed={checked}
    >
      <span
        className={`h-5 w-5 rounded-[4px] grid place-items-center ring-1 ring-white/10 ${
          checked ? "bg-[#0E1A3D]" : "bg-[#0B1220]"
        }`}
      >
        {checked ? <Check className="h-3.5 w-3.5" /> : null}
      </span>
      {label}
    </button>
  );
}
