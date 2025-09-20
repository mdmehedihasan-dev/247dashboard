import React, { useEffect, useState } from "react";
import {
  Upload,
  Play,
  Pause,
  Heart,
  MessageCircle,
  Eye,
} from "lucide-react";
import videoplaceholder from "../../assets/image/aivideo.png"
import image1 from "../../assets/image/aivideo2.png"
import image2 from "../../assets/image/aivideo3.png"
import image3 from "../../assets/image/aivideo4.png"



const AIVideoClipGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0.35); // 0..1
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("/mnt/data/6.png");

  // Fake play progress
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 0.98 ? 0 : p + 0.01));
    }, 120);
    return () => clearInterval(id);
  }, [isPlaying]);

  function onDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }
  function onUpload(e) {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  }
  function handleFile(f) {
    setFileName(f.name);
    const url = URL.createObjectURL(f);
    if (imageUrl?.startsWith("blob:")) URL.revokeObjectURL(imageUrl);
    setImageUrl(url);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    // TODO: call your backend for clip generation
    await new Promise((r) => setTimeout(r, 1200));
    setIsGenerating(false);
  }

  const clips = [
    { id: 1, t: "0:23", src: image1 },
    { id: 2, t: "0:29", src: image2 },
    { id: 3, t: "0:23", src: image3 },
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mt-20 mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
          <h1 className="text-2xl md:text-4xl font-extrabold">AI Video Clip Generator</h1>
          <div  />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Panel */}
          <aside className="lg:col-span-1">
            <label
              htmlFor="video-upload"
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              className="flex items-center justify-center rounded-2xl  ring-1 ring-white/10 h-[420px] cursor-pointer hover:ring-blue-400 transition-colors"
            >
              <div className="flex flex-col items-center gap-3 text-white/80">
                <div className="h-12 w-12 rounded-full bg-black/30 grid place-items-center ring-1 ring-white/10">
                  <Upload className="h-5 w-5" />
                </div>
                <div className="text-sm">Upload</div>
                <div className="text-xs text-white/60">Click or drag a video/image</div>
              </div>
            </label>
            <input id="video-upload" type="file" accept="video/*,image/*" onChange={onUpload} className="hidden" />
            {fileName && (
              <div className="mt-2 text-xs text-white/70 truncate" title={fileName}>
                {fileName}
              </div>
            )}
          </aside>

          {/* Preview + Clips */}
          <section className="lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-2xl  ring-1 ring-white/10 p-3 md:p-4 shadow-xl">
              {/* Main preview */}
              <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-black">
                <img src={videoplaceholder} alt="preview" className="w-full h-[500px] object-cover" />

                {/* Social overlay */}
                <div className="absolute left-3 bottom-10 text-sm">
                  <div className="font-medium">Interview</div>
                  <div className="text-white/80">01:23:24</div>
                </div>
                <div className="absolute right-3 bottom-10 space-y-3 text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <Heart className="h-4 w-4" /> <span className="text-sm">65.3k</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <MessageCircle className="h-4 w-4" /> <span className="text-sm">362</span>
                  </div>
                </div>

                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="absolute left-3 top-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/60 ring-1 ring-white/20 hover:ring-white/40"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>

                {/* Scrub line */}
                <div className="absolute left-0 right-0 bottom-3 px-3">
                  <div className="h-[3px] bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white" style={{ width: `${progress * 100}%` }} />
                  </div>
                  <div className="mt-1 text-xs text-white/80 flex justify-end items-center gap-1">
                    <Eye className="h-3.5 w-3.5" /> 1.2k
                  </div>
                </div>
              </div>

              {/* Suggested clips */}
              <div className="mt-4 flex items-center gap-4">
                {clips.map((c) => (
                  <div key={c.id} className="relative w-28 h-20 rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
                    <img src={c.src} alt={`clip-${c.id}`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-1 right-1 text-[11px] bg-black/70 px-1.5 py-0.5 rounded-md">{c.t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generate */}
            <div className="pt-2">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full rounded-xl bg-[#1341D9] hover:bg-[#2455f1] disabled:opacity-70 py-3 text-sm font-semibold"
              >
                {isGenerating ? "Generating…" : "Generate"}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


export default AIVideoClipGenerator;