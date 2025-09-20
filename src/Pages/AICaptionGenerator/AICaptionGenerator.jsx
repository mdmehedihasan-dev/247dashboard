import React, { useEffect, useMemo, useState } from "react";
import { Upload, Hash, Copy, Check } from "lucide-react";

const AICaptionGenerator = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [caption, setCaption] = useState(
    "Exploring the beauty of 🏙️ dawn as the sun paints the sky with vibrant colors. #sunrise"
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const tags = ["morning", "nature", "dawn", "landscape", "early", "serenity"];

  // revoke object URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const charCount = useMemo(() => caption.length, [caption]);

  function onDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }

  function handleFile(f) {
    setFileName(f.name);
    const url = URL.createObjectURL(f);
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setImageUrl(url);
  }

  function onUpload(e) {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    // TODO: call your backend to generate captions using the image
    await new Promise((r) => setTimeout(r, 1000));
    setIsGenerating(false);
  }

  function appendTag(tag) {
    const hash = `#${tag}`;
    const has = caption.includes(hash);
    setCaption((c) => (has ? c : (c.trim() ? c + " " : c) + hash));
  }

  async function copyCaption() {
    await navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}

        <div className="rounded-3xl  p-4 md:p-6 lg:p-8 shadow-2xl">

         <div className="flex items-center max-w-5xl mt-10  justify-between ">
            <p className="text-3xl">247WEB.AI</p>
            <h1 className="text-3xl md:text-6xl font-semibold tracking-tight mb-6 md:mb-8">
               AI CAPTION GENERATOR
            </h1>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Upload area */}
            <div>
              <label
                htmlFor="image-upload"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                className="flex items-center justify-center rounded-2xl  ring-1 ring-white/10 h-[360px] cursor-pointer hover:ring-blue-400 transition-colors overflow-hidden"
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-white/80">
                    <div className="h-12 w-12 rounded-full bg-black/30 grid place-items-center ring-1 ring-white/10">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div className="text-sm">Upload Image</div>
                    <div className="text-xs text-white/60">Click or drag a file here</div>
                  </div>
                )}
              </label>
              <input id="image-upload" type="file" accept="image/*" onChange={onUpload} className="hidden" />
              {fileName && (
                <div className="mt-2 text-xs text-white/70 truncate" title={fileName}>
                  {fileName}
                </div>
              )}
            </div>

            {/* Caption composer */}
            <div>
              <div className="rounded-2xl  ring-1 ring-white/10 p-3 md:p-4">
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  rows={10}
                  className="w-full resize-none bg-transparent outline-none text-[15px]"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                <span>{charCount} characters</span>
                <button
                  onClick={copyCaption}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md  ring-1 ring-white/10 hover:ring-blue-400"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-3">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => appendTag(t)}
                    className="inline-flex items-center gap-1 rounded-lg  ring-1 ring-white/10 hover:ring-blue-400 px-3 py-1.5 text-sm"
                  >
                    <Hash className="h-4 w-4" />
                    #{t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full max-w-xl rounded-xl bg-[#1341D9] hover:bg-[#2455f1] disabled:opacity-70 py-3 text-sm font-semibold"
            >
              {isGenerating ? "Generating…" : "Generate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AICaptionGenerator;