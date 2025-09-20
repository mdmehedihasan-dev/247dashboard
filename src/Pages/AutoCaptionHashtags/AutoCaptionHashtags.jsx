import React, { useEffect, useMemo, useState } from "react";
import { Upload, ChevronDown, Play, Pause } from "lucide-react";

const AutoCaptionHashtags =()=> {
  const [fileName, setFileName] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [isGenerating, setIsGenerating] = useState(false);

  // simple player stub
  const [isPlaying, setIsPlaying] = useState(false);
  const [t, setT] = useState(0);
  const duration = 5.0;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setT((x) => (x + 0.1 >= duration ? (clearInterval(id), setIsPlaying(false), duration) : x + 0.1));
    }, 100);
    return () => clearInterval(id);
  }, [isPlaying]);

  const tLabel = useMemo(() => `${duration.toFixed(1)} s`, [duration]);

  function onUpload(e) {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsGenerating(false);
  }

  const tags = ["tutorial", "tips", "videomarketing"];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between mt-10 mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-right">
            Auto Caption &<br className="hidden md:block" /> Hashtags Generator
          </h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4 space-y-4">
              <div className="text-center text-white/90 font-medium">Upload Video</div>

              <label
                htmlFor="video-upload"
                className="grid place-items-center h-16 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 cursor-pointer hover:ring-blue-400"
              >
                <div className="flex items-center gap-2 text-sm"><Upload className="h-4 w-4" /> Upload</div>
              </label>
              <input id="video-upload" type="file" accept="video/*" onChange={onUpload} className="hidden" />
              {fileName && (
                <div className="text-xs text-white/70 truncate" title={fileName}>{fileName}</div>
              )}

              {/* Feature title */}
              <div className="text-lg font-semibold">Auto Caption & Hashtags</div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-[#0E1A3D] ring-1 ring-white/10 text-xs">#{t}</span>
                ))}
              </div>

              {/* Style */}
              <div>
                <div className="text-sm text-white/70 mb-2">Style</div>
                <button
                  type="button"
                  onClick={() => setStyle((s) => (s === "Cinematic" ? "Default" : "Cinematic"))}
                  className="w-full flex items-center justify-between rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 px-3 py-2"
                >
                  <span>{style}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full rounded-xl bg-[#1341D9] hover:bg-[#2455f1] disabled:opacity-70 py-3 text-sm font-semibold"
              >
                {isGenerating ? "Generating…" : "Generate"}
              </button>
            </div>
          </aside>

          {/* Right panel */}
          <section className="lg:col-span-2 flex flex-col gap-4">
            {/* Video preview with caption overlay */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black">
              <img src="/mnt/data/2.png" alt="preview" className="w-full h-[320px] object-cover" />
              <div className="-mt-20 pb-6 px-6">
                <div className="inline-block bg-black/40 backdrop-blur px-3 py-1.5 rounded-md text-white text-lg font-medium">
                  Here are three video marketing tips.
                </div>
              </div>
            </div>

            {/* Audio timeline */}
            <div className="rounded-2xl bg-[#0B1220] ring-1 ring-white/10 p-4">
              <div className="text-center text-sm text-white/80 mb-3">{tLabel}</div>
              <div className="rounded-xl bg-[#2E3E9E] h-10 ring-1 ring-white/10 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-white/30" style={{ width: `${(t / duration) * 100}%` }} />
                <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_10px,currentColor_10px,currentColor_11px)]" />
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="inline-flex items-center justify-center rounded-full h-11 w-11 bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AutoCaptionHashtags;
