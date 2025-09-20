import React, { useEffect, useMemo, useState } from "react";
import {
  Upload,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  Plus,
} from "lucide-react";
import videoimage from "../../assets/image/imagetovideo.png"

const ImageToVideo = () => {
  const [aspect, setAspect] = useState("16:9");
  const [style, setStyle] = useState("Cinematic");
  const [imageName, setImageName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [t, setT] = useState(0);
  const duration = 8.0;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setT((x) => {
        const n = x + 0.1;
        if (n >= duration) {
          clearInterval(id);
          setIsPlaying(false);
          return duration;
        }
        return n;
      });
    }, 100);
    return () => clearInterval(id);
  }, [isPlaying]);

  const tLabel = useMemo(() => `${duration.toFixed(1)} s`, [duration]);

  function handleUpload(e) {
    const f = e.target.files?.[0];
    if (f) setImageName(f.name);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsGenerating(false);
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
        </div>

        <div className="rounded-3xl   p-4 md:p-6 lg:p-8 shadow-2xl">
          <div className="flex items-center max-w-5xl  justify-between ">
            <p className="text-3xl">247WEB.AI</p>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">
              IMAGE TO VIDEO
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Panel */}
            <aside className="lg:col-span-1">
              <div className="rounded-2xl ring-1 ring-white/10 p-4 md:p-5">
                <div className="text-center font-medium mb-3">Upload Image</div>

                {/* Dropzone */}
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center rounded-2xl ring-1 ring-white/10 h-48 cursor-pointer hover:ring-blue-400 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2 text-white/80">
                    <Upload className="h-6 w-6" />
                    <span>Upload</span>
                  </div>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
                {imageName && (
                  <div
                    className="mt-2 text-xs text-white/70 truncate"
                    title={imageName}
                  >
                    {imageName}
                  </div>
                )}

                {/* Aspect ratio */}
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wide text-white/60 mb-2">
                    Aspect ratio
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setAspect((a) =>
                        a === "16:9" ? "9:16" : a === "9:16" ? "1:1" : "16:9"
                      )
                    }
                    className="w-full flex items-center justify-between rounded-xl px-3 py-2 ring-1 ring-white/10 hover:ring-blue-400"
                  >
                    <span className="text-sm">{aspect}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Style */}
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wide text-white/60 mb-2">
                    Style
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setStyle((s) =>
                        s === "Cinematic"
                          ? "Default"
                          : s === "Default"
                          ? "Anime"
                          : "Cinematic"
                      )
                    }
                    className="w-full flex items-center justify-between rounded-xl  px-3 py-2 ring-1 ring-white/10 hover:ring-blue-400"
                  >
                    <span className="text-sm">{style}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="mt-6 w-full rounded-xl bg-[#1341D9] hover:bg-[#2455f1] disabled:opacity-70 py-3 text-sm font-semibold"
                >
                  {isGenerating ? "Generating…" : "Generate"}
                </button>
              </div>
            </aside>

            {/* Right Panel */}
            <section className="lg:col-span-2 flex flex-col gap-4">
              {/* Main Preview */}
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 max-h-96 bg-black">
                <img
                  src={videoimage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Timeline Card */}
              <div className="rounded-2xl bg-[#0A1530] ring-1 ring-white/10 p-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </button>

                  {/* thumbnail */}
                  <div className="h-24 w-44 overflow-hidden rounded-xl ring-1 ring-white/10 bg-black">
                    <img
                      src={videoimage}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* waveform slider */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative flex-1 h-12 rounded-xl bg-[#0E1A3D] ring-1 ring-white/10 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-blue-500/30"
                      style={{ width: `${(t / duration) * 100}%` }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(90deg,transparent,transparent_12px,currentColor_12px,currentColor_13px)]" />
                  </div>
                  <button
                    className="inline-flex items-center justify-center rounded-xl h-12 w-12 bg-[#0E1A3D] ring-1 ring-white/10 hover:ring-blue-400"
                    aria-label="Add track"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-2 text-center text-sm text-white/70 select-none">
                  {tLabel}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToVideo;
