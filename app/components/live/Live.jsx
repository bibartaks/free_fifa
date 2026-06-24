"use client";

import React, { useState } from "react";

const players = {
  1: {
    label: "Player 1 · Stream 54",
    src: "https://dlhd.pk/stream/stream-756.php",
  },
  2: {
    label: "Player 2 · Stream 54",
    src: "https://dlhd.pk/watch/stream-54.php",
  },
  3: {
    label: "Player 3 · Stream 756",
    src: "https://dlhd.pk/stream/stream-54.php",
  },
};

export function Live() {
  const [active, setActive] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 p-2 max-w-[1500px] mx-auto w-full">
      {/* LEFT SIDE */}
      <div>
        {/* VIDEO */}
        <div className="overflow-hidden  border p-4 border-white/10 bg-white/[0.03] backdrop-blur-2xl">
          <div className="relative aspect-video">
            {Object.entries(players).map(([key, player]) => (
              <iframe
                key={key}
                src={player.src}
                allowFullScreen
                className={`absolute inset-0 w-full h-full border-0 ${
                  Number(key) === active ? "block" : "hidden"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-5 p-4">
          <h1 className="text-2xl text-blue-500 font-bold">
            FIFA World Cup Live Stream
          </h1>

          <p className="mt-2 text-white/60">{players[active].label}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="sticky top-4 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5">
          <h2 className="mb-4 text-lg font-semibold">Streams</h2>

          <div className="space-y-3">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setActive(n)}
                className={`w-full rounded-2xl p-4 text-left transition-all ${
                  active === n
                    ? "bg-white text-black"
                    : "bg-white/[0.04] hover:bg-white/[0.08]"
                }`}
              >
                <div className="font-medium">Player {n}</div>

                <div
                  className={`text-sm ${
                    active === n ? "text-black/70" : "text-white/50"
                  }`}
                >
                  Click to switch stream
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-white/70">Live Broadcast</span>
            </div>

            <div className="mt-4 text-sm text-white/50">
              HD Quality Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
