import React, { useState } from "react";
import { Mic2, Music2, Headphones, ChevronDown } from "lucide-react";
import voiceovers from "../../assets/image/voiceovers.png";

const RealisticVoiceovers = () => {
  const [script, setScript] = useState("");
  const [voice, setVoice] = useState("Female | English (US)");
  const [emotion, setEmotion] = useState("Neutral");
  const [fx, setFx] = useState("None");
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleGenerate() {
    setIsGenerating(true);
    // TODO: call your TTS backend here
    await new Promise((r) => setTimeout(r, 1100));
    setIsGenerating(false);
  }

  const voices = [
    "Female | English (US)",
    "Male | English (US)",
    "Female | English (UK)",
    "Male | Spanish (ES)",
    "Female | Hindi (IN)",
  ];
  const emotions = ["Neutral", "Cheerful", "Serious", "Empathetic", "Excited"];
  const effects = [
    "None",
    "Studio Reverb",
    "Room Ambience",
    "Telephone",
    "Radio",
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mt-16 mb-6">
          <div className="font-semibold tracking-wide text-lg">247WEB.AI</div>
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Realistic Voiceovers
          </h1>
          <div className="w-24" />
        </div>

        {/* Card */}
        <div
          className="relative rounded-3xl p-5 md:p-7 ring-1 h-full ring-white/10  overflow-hidden"
          style={{
            backgroundImage: `url(${voiceovers})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
        >
          {/* subtle decorative background */}

          <div className="relative">
            {/* Script */}
            <div className="py-20">
              <label className="block text-sm text-white/80 mb-2">Script</label>
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                rows={5}
                placeholder="Enter your script..."
                className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none p-4 text-[15px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
              {/* Voice */}
              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Voice
                </label>
                <div className="relative">
                  <select
                    value={voice}
                    onChange={(e) => setVoice(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2 pr-9 outline-none"
                  >
                    {voices.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
                </div>
              </div>

              {/* Emotion */}
              <div className="">
                <label className="block text-sm text-white/80 mb-2">
                  Emotion
                </label>
                <div className="relative">
                  <select
                    value={emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2 pr-9 outline-none"
                  >
                    {emotions.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sound Effects */}
            <div className="mt-6">
              <label className="block text-sm text-white/80 mb-2">
                Sound Effects
              </label>
              <div className="relative">
                <select
                  value={fx}
                  onChange={(e) => setFx(e.target.value)}
                  className="w-full appearance-none rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2 pr-9 outline-none"
                >
                  {effects.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Decorative icons row */}


            {/* Generate */}
            <div className="mt-8">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full rounded-xl bg-[#1B49F0] hover:bg-[#2a5dff] disabled:opacity-70 py-3 text-sm font-semibold"
              >
                {isGenerating ? "Generating…" : "Generate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisticVoiceovers;
