import React, { useEffect, useRef, useState } from "react";

type VideoSource = { src: string; type?: string };

export default function Background({
  children,
  videoSrc,
  sources,
  poster,
  preload = "auto",
  className = "",
  paused = false,
  fallbackSrc, // <- imagem estática ou animated WebP/GIF
}: {
  children: React.ReactNode;
  videoSrc?: string;
  sources?: VideoSource[];
  poster?: string;
  preload?: "none" | "metadata" | "auto";
  className?: string;
  paused?: boolean;
  fallbackSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  const hasVideo =
    !paused && (videoSrc || (sources && sources.length)) && !useFallback;

  // Se conexão for ruim, já usa fallback (melhora experiência em mobile)
  useEffect(() => {
    const conn: any = (navigator as any).connection;
    const type: string | undefined = conn?.effectiveType;
    if (type && ["slow-2g", "2g", "3g"].includes(type)) {
      if (fallbackSrc) setUseFallback(true);
    }
  }, [fallbackSrc]);

  useEffect(() => {
    if (!hasVideo || !videoRef.current) return;

    const v = videoRef.current;
    v.muted = true; // garante autoplay no iOS
    (v as any).playsInline = true;
    // tenta tocar — se o navegador bloquear, usamos fallback
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        if (fallbackSrc) setUseFallback(true);
      }
    };
    tryPlay();
  }, [hasVideo, fallbackSrc]);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {hasVideo ? (
        <video
          ref={videoRef}
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover opacity-60 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen"
          preload={preload}
          poster={poster}
          aria-hidden="true"
        >
          {sources?.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
          {videoSrc && <source src={videoSrc} />}
        </video>
      ) : fallbackSrc ? (
        <img
          src={fallbackSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          aria-hidden="true"
        />
      ) : null}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
