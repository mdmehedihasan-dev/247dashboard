import React, { useMemo, useState } from "react";
import {
  Rocket,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Check,
  Monitor,
} from "lucide-react";


const AIImageGenerator =()=> {
  const [prompt, setPrompt] = useState("");
  const [useAssistant, setUseAssistant] = useState(true);
  const [model, setModel] = useState("Anime");
  const [ratio, setRatio] = useState("1:1");
  const [count, setCount] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const placeholder = "/mnt/data/7.png";
  const samples = useMemo(
    () => [placeholder, placeholder, placeholder, placeholder],
    []
  );
  const [idx, setIdx] = useState(0);

  const charCount = prompt.length;

  function prev() {
    setIdx((i) => (i - 1 + samples.length) % samples.length);
  }
  function next() {
    setIdx((i) => (i + 1) % samples.length);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    // TODO: wire to backend
    await new Promise((r) => setTimeout(r, 1000));
    setIsGenerating(false);
  }

  const ratios = ["1:1", "16:9", "3:2", "1:6:9", "4:3/4:6"]; // labels used to match screenshot, you can replace with real ones
  const counts = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-[#06090F] text-white antialiased">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mt-10 mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
          <h1 className="text-2xl md:text-4xl font-extrabold">AI Image Generator</h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left controls */}
          <aside className="lg:col-span-1 space-y-4">
            {/* Model card */}
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-white/80 text-sm mb-3">Model</div>
              <div className="flex items-center gap-3 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 p-3">
                <div className="h-10 w-10 rounded-lg bg-black/40 grid place-items-center ring-1 ring-white/10">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Flux Schnell</div>
                  <div className="text-xs text-white/60">Cost effective modeling</div>
                </div>
              </div>
            </div>

            {/* Prompt */}
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-white/80 text-sm mb-2">Prompt</div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                placeholder="What do you want to create?"
                className="w-full rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 p-3 outline-none"
              />
              <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                <label className="inline-flex items-center gap-2 select-none">
                  <input
                    type="checkbox"
                    checked={useAssistant}
                    onChange={(e) => setUseAssistant(e.target.checked)}
                    className="accent-blue-500 h-4 w-4"
                  />
                  <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4" /> Generate with AI</span>
                </label>
                <span>{charCount}/1000</span>
              </div>
            </div>

            {/* Model selector (simple) */}
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-white/80 text-sm mb-2">Model</div>
              <button
                type="button"
                className="w-full flex items-center justify-between rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 px-3 py-2"
              >
                <span>{model}</span>
                <Monitor className="h-4 w-4" />
              </button>
            </div>

            {/* Aspect ratio */}
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-white/80 text-sm mb-2">Aspect Ratio</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "1:1" },
                  { label: "16:9" },
                  { label: "3:2" },
                  { label: "1:6:9" },
                  { label: "4:3/4:6" },
                ].map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setRatio(r.label)}
                    className={`px-3 py-2 rounded-lg ring-1 ring-white/10 ${
                      ratio === r.label ? "bg-[#1B49F0]" : "bg-[#0E1A3D] hover:ring-blue-500/60"
                    } text-sm`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Output count */}
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-white/80 text-sm mb-2">Output Image Number</div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setCount(n)}
                    className={`h-10 rounded-lg ring-1 ring-white/10 ${
                      count === n ? "bg-[#1B49F0]" : "bg-[#0E1A3D] hover:ring-blue-500/60"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right area */}
          <section className="lg:col-span-2">
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-white/90 font-medium mb-4">Sample Image</div>

              {/* Carousel */}
              <div className="relative rounded-2xl overflow-hidden bg-black ring-1 ring-white/10 p-2 ">
                {/* Big preview */}
                <div className="relative col-span-2 rounded-xl overflow-hidden">
                  <img src={samples[idx]} alt={`sample-${idx + 1}`} className="w-full h-72 object-cover" />
                  <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 grid place-items-center ring-1 ring-white/20">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 grid place-items-center ring-1 ring-white/20">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute left-2 bottom-2 text-sm bg-black/50 px-2 py-0.5 rounded-md">
                    {idx + 1}/{samples.length}
                  </div>
                </div>

                {/* Side tiles */}
                <div>
                  {samples.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`relative h-24 rounded-xl overflow-hidden ring-1 ring-white/10 ${
                        i === idx ? "outline  outline-[#1B49F0]" : ""
                      }`}
                    >
                      <img src={s} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                      {i === 0 && (
                        <div className="absolute left-2 bottom-2 text-xs bg-[#1B49F0] px-2 py-0.5 rounded-md">Console</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model tags under carousel */}
              <div className="mt-3 flex items-center gap-3">
                <div className="h-9 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 px-3 grid place-items-center text-sm">Anime</div>
                <div className="h-9 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 px-3 grid place-items-center text-sm">FLUX</div>
                <div className="h-9 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 px-3 grid place-items-center text-sm">Portrait</div>
                <div className="h-9 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 px-3 grid place-items-center text-sm">Cat</div>
              </div>

              {/* Generate Button */}
              <div className="mt-6">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full md:w-64 rounded-xl bg-[#1B49F0] hover:bg-[#2a5dff] disabled:opacity-70 py-3 text-sm font-semibold"
                >
                  {isGenerating ? "Generating…" : "Generate"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AIImageGenerator;