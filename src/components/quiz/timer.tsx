"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatDuration } from "@/lib/quiz";

export function Timer({
  initialSeconds,
  onElapsed,
}: {
  initialSeconds: number;
  onElapsed: () => void;
}) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onElapsed();
      return;
    }
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const low = secondsLeft <= 60;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 border",
        low
          ? "border-fireOragne-500 text-fireOragne-400 animate-pulse"
          : "border-black-400 text-white-300",
      )}
    >
      <Clock className="h-4 w-4" />
      <span className="font-bebas text-2xl leading-none tabular-nums">
        {formatDuration(secondsLeft)}
      </span>
    </div>
  );
}
